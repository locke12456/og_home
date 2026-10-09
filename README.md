# 轉生者們 – 官方網站 / 開發日誌
GitHub Pages 內建 Jekyll 建置，push 到 main 即自動部署（lockestudio.net）。無外部 JS/CSS 依賴。

## 寫一篇 devlog
在 `_posts/` 新增 `YYYY-MM-DD-英文slug.md`（slug 會成為網址：`/devlog/YYYY/MM/slug/`）：

```markdown
---
title: 文章標題
cat: system          # system / art / fix / milestone / info（定義在 _config.yml 的 devlog_cats）
description: 一行摘要，用在列表、首頁輪播與社群分享卡片
tags: [npc, economy]
image: /assets/img/devlog/xxx.png   # 選填：封面圖，也是 OG 分享圖
featured: true                      # 選填：上首頁輪播（最多 3 篇；沒有任何 featured 時取最新 3 篇）
---
內文（GFM Markdown）……
```

- 首頁 DEVLOG 區：輪播取 featured，右側列表取最新 5 篇。
- 列表頁 `/devlog/`：依年份分組，可依分類篩選。
- RSS：`/devlog/feed.xml`。
- 圖片放 `assets/img/devlog/`。

## 結構
- `_layouts/default.html`：head（jekyll-seo-tag）、header、footer、script
- `_layouts/post.html`：單篇文章
- `_includes/`：SVG sprite、header、footer
- `index.html`：首頁各區塊；`devlog/index.html`：文章列表
- 新增分類：在 `_config.yml` 的 `devlog_cats` 加一筆，並在 `style.css` 加 `.c-<key>` 顏色。

## 本機預覽
```sh
docker run --rm -v "$PWD:/srv" -w /srv -p 4000:4000 ruby:3.3 \
  sh -c "gem install github-pages webrick && jekyll serve --host 0.0.0.0"
```
不要在這個資料夾裡建置：它位於 Unity `Assets/` 下，`_site/` 會被 Unity 匯入（已列入 .gitignore，但 Unity 仍會掃描）。建議複製到 Unity 專案外再預覽。

## 待換素材
替換 `.kv-bg`、`.chara-art`、`.banner` 背景即可；影片在 `.modal-video` 內放 YouTube iframe。
