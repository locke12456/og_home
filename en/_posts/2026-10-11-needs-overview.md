---
title: "Why Do Residents Get Hungry? Designing Needs"
cat: system
description: How four desires—appetite, sleep, fun and company—drive each resident's day, and even shape who they become.
tags: [needs, npc, design]
featured: true
---
In *The Reincarnated*, residents aren't scenery standing around waiting for the player to talk to them. They get hungry, tired, bored and lonely, and those feelings send them out the door, spending money, looking for someone to talk to—and, when they're out of options, taking desperate risks.

This post introduces the core that brings residents to life: **the needs system**.

## Four desires

Every resident has four desires:

| Desire | How it's met | What makes it different |
| --- | --- | --- |
| **Appetite** | Eating | Food can be bought ahead and eaten later |
| **Sleep** | Sleeping | Needs one unbroken stretch of time, but one good sleep is usually enough |
| **Fun** | Doing what you enjoy | Doing the same thing too often gets dull |
| **Company** | Spending time with others | The other person has to be willing, and one chat doesn't go far |

Think of each desire as a water level that slowly drops over time. Once it falls below the **warning line**, the resident feels hungry, tired, bored or lonely, and their condition suffers. Meet the need well, on the other hand, and they get the good feeling of being full, rested or in high spirits.

The four desires aren't equally easy to meet: sleep is the easiest, filled in one go; company is the hardest, taking several encounters to top up.

<figure class="post-fig" role="img" aria-label="Needs diagram: each of the four desires has a level; when one falls below the warning line, the resident compares options and goes to meet it; the level rises, then slowly drops again in a loop">
<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="ar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#8b6b34"/></marker>
  </defs>
  <g font-family="Georgia,'Noto Serif TC',serif" fill="#3a2a10">
    <g stroke="#8b6b34" stroke-width="1.5" fill="none">
      <rect x="40" y="40" width="30" height="200"/><rect x="95" y="40" width="30" height="200"/>
      <rect x="150" y="40" width="30" height="200"/><rect x="205" y="40" width="30" height="200"/>
    </g>
    <rect x="41" y="100" width="28" height="139" fill="#c9a35a"/>
    <rect x="96" y="160" width="28" height="79" fill="#c9a35a"/>
    <rect x="151" y="200" width="28" height="39" fill="#b5593a"/>
    <rect x="206" y="130" width="28" height="109" fill="#c9a35a"/>
    <path d="M30 180 H245" stroke="#b5593a" stroke-width="1.5" stroke-dasharray="5 4"/>
    <text x="248" y="176" font-size="12" fill="#b5593a">warning</text>
    <text x="248" y="190" font-size="12" fill="#b5593a">line</text>
    <g font-size="13" text-anchor="middle">
      <text x="55" y="262">Appetite</text><text x="110" y="262">Sleep</text><text x="165" y="262">Fun</text><text x="220" y="262">Company</text>
    </g>
    <g stroke="#8b6b34" stroke-width="1.5" fill="#f7f0dc">
      <rect x="300" y="50" width="130" height="56"/><rect x="460" y="50" width="130" height="56"/>
      <rect x="460" y="184" width="130" height="56" fill="#ecd9a4"/><rect x="300" y="184" width="130" height="56"/>
    </g>
    <g font-size="14" font-weight="700" text-anchor="middle">
      <text x="365" y="75">Slowly drops</text><text x="525" y="75">Below the line</text>
      <text x="525" y="209">Compare options</text><text x="365" y="209">Go and do it</text>
    </g>
    <g font-size="12" text-anchor="middle" fill="#6b5530">
      <text x="365" y="94">over time</text><text x="525" y="94">hungry, tired…</text>
      <text x="525" y="228">bag, shop, friend</text><text x="365" y="228">eat, sleep, chat</text>
    </g>
    <g stroke="#8b6b34" stroke-width="1.5" fill="none" marker-end="url(#ar3)">
      <path d="M430 78 H458"/><path d="M525 106 V182"/><path d="M460 212 H432"/><path d="M365 184 V108"/>
    </g>
    <text x="372" y="150" font-size="12" fill="#7a4f12">level rises</text>
  </g>
</svg>
<figcaption>Each desire is a level that slowly drops; a resident's day is spent looking after these four levels.</figcaption>
</figure>

## Everyone plans their day

Residents plan the next day ahead of time: when to work, how many meals to eat, when to sleep, and whether there's time for fun or friends. Time and energy are limited, so nobody can do everything perfectly—everyone has to make trade-offs.

## Where to go is a calculation, too

When residents get hungry, they don't just run to the nearest place. They weigh the options at hand:

- Is there still food in the bag?
- Is the shop nearby expensive? The one farther away is cheaper—but is it worth the walk?
- A restaurant fills you up more—but is there enough money in the purse?

They consider how much each option helps, how far they'd have to walk and how much it costs, check their own budget, and pick the best deal. That's also why shops and markets have customers at all (see "[How a Loaf of Bread Reaches You](/en/devlog/2026/10/economy-overview/)").

## Desires shape character

This world has "seven sins" and "seven virtues"—gluttony and temperance, greed and generosity, sloth and diligence, and so on. They're closely tied to desires:

- **People who lean toward sin** have big appetites and burn through things fast, but they can take in a lot at once and last a long time. Where food is plentiful, they thrive.
- **People who lean toward virtue** use less and are thrifty, but they can't store much. When things are scarce, they hold out better.

Neither is simply better—**it depends on how rich the world around them is**.

Character isn't set in stone at birth, either. Everyone has a rough daily portion of how much to eat or play, and **going beyond it is indulgence**. Those who indulge again and again may slowly fall into sin; those who learn restraint have a chance to grow toward virtue.

## When there's nowhere left to turn

Of the four desires, only **eating and sleeping** can be fatal. Boredom and loneliness hurt, but they won't kill you.

When someone is truly starving with nothing to their name, what they do depends on **what kind of person they are** and **who the other person is**:

- **Good people** turn to people they know for help, or beg.
- **Evil or rebellious people** may steal from, or rob, people they already dislike.
- **Righteous people** may even rob villains and give what they take to good people.

Surviving may come at a moral cost—and that is how sin takes root in hardship. If even that path fails, the ending is the result of the road they walked, not a roll of the dice.

---

The needs system is where most of this world's stories begin: why shops have customers, why residents make friends, why a good person turns bad. In future posts we'll share more about character, relationships and illness, and how they weave together with needs.
