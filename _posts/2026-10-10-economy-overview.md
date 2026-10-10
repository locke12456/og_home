---
title: 一塊麵包是怎麼來到你手上的：經濟線設計
cat: system
description: 公會、商會、商店各做什麼？用一張圖看懂世界裡的貨與錢怎麼流動。
tags: [economy, design]
featured: true
---
在《轉生者們》的世界裡，商店架上的東西不是憑空出現的。每一件貨都有人採、有人做、有人轉手，價格也跟著一路變化。這篇用最簡單的方式，說明背後的三個角色：**公會、商會、商店**。

<figure class="post-fig" role="img" aria-label="經濟線架構圖：採集場與工房把貨賣給商會，商會批發給商業公會的市場，也配貨給商店，商店再零售給居民">
<svg viewBox="0 0 600 330" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#8b6b34"/></marker>
  </defs>
  <g font-family="'Noto Serif TC',serif" text-anchor="middle" fill="#3a2a10">
    <g stroke="#8b6b34" stroke-width="1.5" fill="#f7f0dc">
      <rect x="20" y="30" width="130" height="56"/>
      <rect x="20" y="130" width="130" height="56"/>
      <rect x="235" y="80" width="130" height="56"/>
      <rect x="450" y="80" width="130" height="56" fill="#ecd9a4"/>
      <rect x="235" y="240" width="130" height="56"/>
      <rect x="450" y="240" width="130" height="56" stroke-dasharray="5 4"/>
    </g>
    <g font-size="20" font-weight="700">
      <text x="85" y="58">採集場</text><text x="85" y="158">工房</text>
      <text x="300" y="108">商會</text><text x="515" y="108">商業公會</text>
      <text x="300" y="268">商店</text><text x="515" y="268">居民</text>
    </g>
    <g font-size="14" fill="#6b5530">
      <text x="85" y="76">小麥、礦石、藥草</text><text x="85" y="176">麵包、藥、金屬錠</text>
      <text x="300" y="126">中盤商</text><text x="515" y="126">大盤・經營市場</text>
      <text x="300" y="286">麵包店、醫院</text><text x="515" y="286">買來吃、用、治病</text>
    </g>
    <g stroke="#8b6b34" stroke-width="1.5" fill="none" marker-end="url(#ar)">
      <path d="M150 64 L233 98"/>
      <path d="M150 152 L233 120"/>
      <path d="M365 108 L448 108"/>
      <path d="M300 136 L300 238"/>
      <path d="M365 268 L448 268"/>
    </g>
    <g font-size="15" fill="#7a4f12">
      <text x="185" y="70">原料</text><text x="185" y="152">成品</text>
      <text x="406" y="100">批發</text>
      <text x="300" y="190" text-anchor="start" dx="10">成本價配貨</text>
      <text x="406" y="260">零售</text>
    </g>
  </g>
</svg>
<figcaption>貨由左往右流動，錢則反方向流回去。</figcaption>
</figure>

## 三個角色

**商業公會：大盤，負責經營市場。**
公會向商會收購貨物，再放到市場上大量出售。市場做的是大宗生意，適合整批進貨的人，不是讓人一個一個零買的地方。

**商會：中盤，負責牽起上下游。**
商會向採集場和工房收貨，一邊轉賣給公會，一邊把貨鋪給旗下的商店。每個商會只收自己業務範圍內的貨。

**商店：零售，直接面對居民。**
商店是商會的會員，可以用成本價向商會進貨，再加價賣給居民。賺到的錢有兩成要繳回商會，其餘歸自己。醫院也是一種商店：醫生會先診斷病人得了什麼病，再開對症的藥。

## 生產者也有自己的盤算

- **採集場**派人去田裡、礦坑採集，把原料賣給商會。
- **工房**要自己去市場買原料，做成成品再賣出。平常賣給商會，倉庫快滿、商會吃不下時，才由公會出面收購。

## 價格為什麼一層比一層高

每一層都是**買斷**上一層的貨，不是代賣，所以每一層都要賺到差價才做得成生意。賣不掉的風險，也由當時持有貨物的人承擔：

> 工房 → 商會 → 公會 → 市場，每過一手，價格就往上加一點。

商店則是在市價上再加成，這是零售賺錢的方式。所以在商店買東西通常比市場貴，但可以**殺價**。

## 居民也會精打細算

居民肚子餓、生病的時候，會比較幾個選項：背包裡的存糧、附近的店、遠一點但比較便宜的店。他們會考慮走過去的路程、價格，以及自己的預算，再決定去哪裡買。沒錢的時候，就只能先將就。

---

這套經濟線還在持續開發與調整，之後的開發日誌會再分享各個環節的細節，例如工房怎麼決定要生產什麼，以及缺貨時價格會怎麼波動。
