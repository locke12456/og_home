# 轉生者們 – 官方網站 / 開發日誌
GitHub Pages 內建 Jekyll 建置，push 到 main 即自動部署（lockestudio.net）。無外部 JS/CSS 依賴。
語言：繁體中文在 `/`，英文在 `/en/`。

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

**英文版**：在 `en/_posts/` 放**同一個檔名**（同日期、同 slug）的檔案，內容換成英文，網址會是 `/en/devlog/YYYY/MM/slug/`。兩篇靠 slug 配對，header 的語言切換鈕會互相跳轉；沒有英文版的文章，切換鈕會回英文首頁。標題含 `:` 時記得加引號。

- 首頁 DEVLOG 區：輪播取同語言的 featured，右側列表取同語言最新 5 篇。
- 列表頁 `/devlog/`、`/en/devlog/`：依年份分組，可依分類篩選。
- RSS：`/devlog/feed.xml`、`/en/devlog/feed.xml`（各自只含該語言）。
- 圖片放 `assets/img/devlog/`，兩種語言共用。

## 多語系結構
- `_data/i18n.yml`：介面文字（導覽、按鈕、頁尾…），以語言為鍵；`base` 是網址前綴。
- `_data/home.yml`：首頁文案（故事、角色、系統、結局、影片），以語言為鍵；`_data/home_icons.yml` 是不分語言的系統圖示。
- `_config.yml` 的 `defaults`：`en/` 底下的頁面與文章自動 `lang: en`；`devlog_cats` 每個分類有各語言的名稱。
- 頁面配對用 front matter `ref`（`index.html` ↔ `en/index.html` 是 `home`，列表頁是 `devlog`）。
- 新增一種語言：在 `i18n.yml`、`home.yml`、`devlog_cats` 各加一組，建 `<lang>/index.html`、`<lang>/devlog/index.html`、`<lang>/devlog/feed.xml`、`<lang>/_posts/`，再把 `_includes/lang-alt.html` 的二選一改成清單。

## 結構
- `_layouts/default.html`：head（jekyll-seo-tag、hreflang、RSS）、header、footer、script
- `_layouts/post.html`：單篇文章（上一篇／下一篇只在同語言內）
- `_includes/`：`home.html`（首頁模板）、`devlog-list.html`、`feed.xml`、`lang-alt.html`（找對應翻譯）、header、footer、SVG sprite
- 新增分類：在 `_config.yml` 的 `devlog_cats` 加一筆，並在 `style.css` 加 `.c-<key>` 顏色。

## 本機預覽
```sh
docker run --rm -v "$PWD:/srv" -w /srv -p 4000:4000 ruby:3.3 \
  sh -c "gem install github-pages webrick && jekyll serve --host 0.0.0.0"
```
不要在這個資料夾裡建置：它位於 Unity `Assets/` 下，`_site/` 會被 Unity 匯入（已列入 .gitignore，但 Unity 仍會掃描）。建議複製到 Unity 專案外再預覽。

## 待換素材
替換 `.kv-bg`、`.chara-art`、`.banner` 背景即可；影片在 `.modal-video` 內放 YouTube iframe。
