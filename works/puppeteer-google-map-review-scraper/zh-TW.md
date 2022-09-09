---
title: "Google地圖評論爬蟲 (puppeteer)"
excerpt: 用於猜你喜歡專案以取得地點評論
tags: ["puppeteer", "MongoDB", "web scraping"]
---

A web scraper to get google map reviews with place api.

### 架構

1. 利用 [google place api](https://developers.google.com/maps/documentation/places/web-service/overview) 取得地點資料
2. 利用地點資料設定位置網址
3. 利用 [puppeteer](https://github.com/puppeteer/puppeteer) 取得地點評論。
4. 將結果存入 [MongoDB](https://www.mongodb.com/)

### 使用說明

1. run `npm install`
2. Add a `.env` file.
3. `npm start`

#### 環境變數

**API_KEY** : Google Place API key.  
**CONNECTION_STRING** : MongoDB connection string with username & password

### 入口點

##### app.js

##### main(lat, lng, collection, option)

-   `lat` `lng` : \<number> : 位置經緯度
-   `collection` \<string> : 設定的 mongodb collection 名稱
-   `option` \<object> :
    -   `max` \<number> : 取得評論上限，預設為**200**
    -   `radius` \<number> : 距離位置半徑範圍，預設為**1500**
    -   `type` \<string> : place api 的 place type，預設為**restaurant** (完整列表 : [Place Types](https://developers.google.com/places/supported_types))

### 連結

[Github](https://github.com/chuang861012/puppeteer-google-map-review-scraper)
