---
title: "How a Loaf of Bread Reaches You: Designing the Economy"
cat: system
description: What do the guild, trading houses and shops each do? One diagram shows how goods and money move through the world.
tags: [economy, design]
featured: true
---
In *The Reincarnated*, the goods on a shop's shelf don't appear out of thin air. Every item is gathered by someone, made by someone and passed along by someone, and its price changes along the way. This post explains, as simply as we can, the three players behind it all: **the guild, the trading houses and the shops**.

<figure class="post-fig" role="img" aria-label="Economy diagram: gathering sites and workshops sell to a trading house; the trading house sells wholesale to the Merchant Guild's market and also supplies shops, which sell to residents">
<svg viewBox="0 0 600 330" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#8b6b34"/></marker>
  </defs>
  <g font-family="Georgia,'Noto Serif TC',serif" text-anchor="middle" fill="#3a2a10">
    <g stroke="#8b6b34" stroke-width="1.5" fill="#f7f0dc">
      <rect x="20" y="30" width="130" height="56"/>
      <rect x="20" y="130" width="130" height="56"/>
      <rect x="235" y="80" width="130" height="56"/>
      <rect x="450" y="80" width="130" height="56" fill="#ecd9a4"/>
      <rect x="235" y="240" width="130" height="56"/>
      <rect x="450" y="240" width="130" height="56" stroke-dasharray="5 4"/>
    </g>
    <g font-size="15" font-weight="700">
      <text x="85" y="57">Gathering site</text><text x="85" y="157">Workshop</text>
      <text x="300" y="107">Trading house</text><text x="515" y="107">Merchant Guild</text>
      <text x="300" y="267">Shop</text><text x="515" y="267">Residents</text>
    </g>
    <g font-size="12" fill="#6b5530">
      <text x="85" y="76">wheat, ore, herbs</text><text x="85" y="176">bread, potions…</text>
      <text x="300" y="126">middleman</text><text x="515" y="126">runs the market</text>
      <text x="300" y="286">bakery, hospital</text><text x="515" y="286">eat, use, heal</text>
    </g>
    <g stroke="#8b6b34" stroke-width="1.5" fill="none" marker-end="url(#ar)">
      <path d="M150 64 L233 98"/>
      <path d="M150 152 L233 120"/>
      <path d="M365 108 L448 108"/>
      <path d="M300 136 L300 238"/>
      <path d="M365 268 L448 268"/>
    </g>
    <g font-size="14" fill="#7a4f12">
      <text x="190" y="70">raw</text><text x="190" y="152">goods</text>
      <text x="406" y="100">wholesale</text>
      <text x="300" y="190" text-anchor="start" dx="10">supplied at cost</text>
      <text x="406" y="260">retail</text>
    </g>
  </g>
</svg>
<figcaption>Goods flow left to right; money flows back the other way.</figcaption>
</figure>

## The three players

**The Merchant Guild: the wholesaler that runs the market.**
The guild buys goods from the trading houses and sells them in bulk at the market. The market is built for large orders—it's where you stock up by the batch, not where you buy things one at a time.

**Trading houses: the middlemen that connect everyone.**
A trading house buys from gathering sites and workshops, then sells on to the guild on one side and supplies its member shops on the other. Each house only deals in goods within its own line of business.

**Shops: retail, face to face with residents.**
Shops are members of a trading house. They can buy goods from it at cost, then sell them to residents at a markup. Twenty percent of the profit goes back to the trading house; the rest is theirs. A hospital is a kind of shop too: the doctor first works out what's ailing a patient, then prescribes the right medicine.

## Producers have their own plans

- **Gathering sites** send people out to fields and mines and sell the raw materials to a trading house.
- **Workshops** buy their own raw materials at the market, make finished goods and sell them. Normally they sell to a trading house; only when the workshop's storeroom is nearly full and the trading house can't take any more does the guild step in and buy.

## Why prices rise at every step

Each step **buys out** the goods from the step before—nobody is selling on someone else's behalf. So every step needs a margin to make the deal worthwhile, and whoever holds the goods carries the risk if they don't sell:

> Workshop → trading house → guild → market: each hand-off adds a little to the price.

Shops then add a markup on top of the market price. That's how retail makes money, which is why shops usually cost more than the market—but you can **haggle**.

## Residents count their coins too

When residents are hungry or sick, they weigh their options: food in their own bag, the shop nearby, or a cheaper shop farther away. They think about the walk, the price and their own budget before deciding where to go. When money is tight, they make do.

---

The economy is still being developed and tuned. In future devlogs we'll dig into each part in more detail—how a workshop decides what to make, and how prices move when goods run short.
