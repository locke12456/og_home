---
title: "The Bigger the World, the Harder a Day Ends: Three Performance Hurdles"
cat: system
description: From a stuttering editor and an end-of-day that grew slower every day, to splitting the day's work into lanes that run side by side.
tags: [performance, simulation]
featured: true
---
In *The Reincarnated*, every resident, trading house and guild is living its own life. At the end of each day, the world runs an **end-of-day settlement**: workshops tally their output, trading houses restock, the guild buys up goods, residents eat and see the doctor, payments land in wallets… Only when all of it is done can the next day begin.

While the world was small, this ran smoothly. But as we added more towns and people, we ran into three hurdles, one after another.

## Hurdle one: opening the observer window froze everything

During development we use an "observatory" window to watch the state of the world live. The trouble was that every time the window redrew, it reached straight into the world's data—and the world itself was running on the same thread. The result: **the window waited on the world, the world waited on the window**, and the whole editor stuttered.

This isn't just a tooling problem; the in-game interface players see would hit the same wall.

**The fix**: move the world onto its own background thread and have it publish a "snapshot" once a second. The interface only reads the snapshot and never touches the world while it's changing. Once a second is plenty for human eyes, and the world can finally focus on its own work.

## Hurdle two: each day took longer to end

After the move, a new problem surfaced: the simulation couldn't keep up with the target speed, and **the end-of-day settlement got slower every day**. Day one took 1.6 seconds; a few days later, the slowest day took 22.

We timed each part of the settlement separately and found that about **90% of the time** went into "write the entire commission record back to the database every time a commission is completed." Yet nobody needs that record until the player actually saves.

**The fix**: write only when saving. Afterwards, the settlement went back to 1–2 seconds a day, and stopped growing with the day count.

## Hurdle three: doing things at once, without miscounting money

Next, we wanted the world to hold up as it grows. The obvious approach is **parallelism**: much of the settlement is work that doesn't depend on anything else—trading house A restocks, trading house B restocks, residents eat on their own. There's no reason it all has to wait in a single line.

But parallelism carries a serious risk. Imagine two people working on the same wallet at the same moment:

> The wallet holds 100 copper coins. A receives 30, and at the same moment B receives 50. Both first read "100," work out 130 and 150, and write their result back. The wallet ends up at 150. **Those 30 coins simply vanish.**

While investigating, we also found this risk **already existed**: residents' everyday actions and the settlement could already touch the same wallet at once—it just hadn't been caught yet.

## The design today: separate lanes, one-at-a-time counters

<figure class="post-fig" role="img" aria-label="Sequential vs parallel: before, all work waited in one line; now it is split by owner into lanes that run together, and the next stage starts only when every lane is done">
<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#8b6b34"/></marker>
  </defs>
  <g font-family="Georgia,'Noto Serif TC',serif" fill="#3a2a10">
    <g font-size="16" font-weight="700">
      <text x="14" y="64">Before</text>
      <text x="14" y="200">Now</text>
    </g>
    <g stroke="#8b6b34" stroke-width="1.5" fill="#f7f0dc">
      <rect x="80" y="40" width="80" height="36"/><rect x="160" y="40" width="80" height="36"/><rect x="240" y="40" width="80" height="36"/>
      <rect x="320" y="40" width="80" height="36"/><rect x="400" y="40" width="80" height="36"/><rect x="480" y="40" width="80" height="36"/>
      <rect x="80" y="130" width="80" height="36"/><rect x="160" y="130" width="80" height="36"/>
      <rect x="80" y="176" width="80" height="36"/><rect x="160" y="176" width="80" height="36"/>
      <rect x="80" y="222" width="80" height="36"/><rect x="160" y="222" width="80" height="36"/>
    </g>
    <g font-size="12" text-anchor="middle">
      <text x="120" y="63">House A</text><text x="200" y="63">House B</text><text x="280" y="63">Workshop C</text>
      <text x="360" y="63">Resident 1</text><text x="440" y="63">Resident 2</text><text x="520" y="63">Resident 3</text>
      <text x="120" y="153">House A</text><text x="200" y="153">Resident 1</text>
      <text x="120" y="199">House B</text><text x="200" y="199">Resident 2</text>
      <text x="120" y="245">Workshop C</text><text x="200" y="245">Resident 3</text>
    </g>
    <path d="M260 120 V268" stroke="#8b6b34" stroke-width="2" stroke-dasharray="6 5"/>
    <text x="260" y="286" font-size="13" text-anchor="middle" fill="#7a4f12">wait for everyone</text>
    <path d="M268 194 H318" stroke="#8b6b34" stroke-width="1.5" marker-end="url(#ar2)"/>
    <rect x="320" y="176" width="100" height="36" fill="#ecd9a4" stroke="#8b6b34" stroke-width="1.5"/>
    <text x="370" y="199" font-size="14" text-anchor="middle">Next stage</text>
    <rect x="440" y="130" width="140" height="128" fill="none" stroke="#8b6b34" stroke-width="1.5" stroke-dasharray="4 4"/>
    <g font-size="13" text-anchor="middle" fill="#6b5530">
      <text x="510" y="156" font-weight="700" fill="#5b3f14">Shared counters</text>
      <text x="510" y="180">wallets · markets</text>
      <text x="510" y="200">relationships</text>
      <text x="510" y="226">one at a time,</text>
      <text x="510" y="246">others queue</text>
    </g>
    <path d="M80 100 H560" stroke="#b8893a" stroke-width="1"/>
    <text x="320" y="96" font-size="12" text-anchor="middle" fill="#7a4f12">time →</text>
  </g>
</svg>
<figcaption>Work is split by owner into lanes that run side by side; shared counters serve one at a time.</figcaption>
</figure>

We didn't rewrite every system. We changed just two things:

1. **One scheduler** sorts the day's work into lanes. Everything belonging to the same trading house or the same resident always goes into the same lane, so work for different owners can run at the same time. At the end of each stage, the scheduler waits for every lane to finish before moving on.
2. **Locks on shared counters**: wallets, markets, relationships and guild membership rolls—things everyone touches—each get a "one at a time" lock. The lock only covers the short "read, work out, write back" step, and nobody may run off to another counter while holding one, so two people can never end up waiting on each other forever.

A few more rules:

- **Switch between two modes at any time**: "sequential mode" still does things one by one, which makes problems easy to track down; "parallel mode" uses multiple lanes. Comparing the two while measuring shows exactly where the bottleneck is.
- **Two markets never settle at the same time**: when a market runs short it buys from another market, so if both settled at once they could end up waiting on each other.
- **How we know nothing was miscounted**: in parallel, who gets to a deal first depends on timing, so we don't require both modes to produce identical results. Instead we check **conservation**: every coin and every item in the world must be accounted for, nothing may go negative, and nobody may join the same kind of organization twice.

## Results

In a test world with four towns and 128 residents:

- The full end-of-day settlement dropped from about **3.5 seconds to 2.6 seconds** on average.
- The part where every organization settles its own business ran about **twice as fast**.
- Both modes ran with zero errors.

Not every part can run in parallel. Some stages have a natural order—goods must be put on sale before anyone can buy them—and we deliberately kept those one at a time.

Measuring also revealed the next bottleneck: at every moment, the world updates the countdown on status effects for every character, including residents of distant towns. We're already planning a new approach, and we'll share more once it's further along.
