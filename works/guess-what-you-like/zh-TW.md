---
title: "猜你喜歡─個人化旅遊推薦機器人"
excerpt: 大學畢業專題－利用 AWS 建置的深度學習 Line 聊天機器人推薦系統
tags: ["AWS", "MongoDB", "chatbot", "deep learning"]
---

[介紹影片](https://www.youtube.com/watch?v=defBIPYP82Y)

### 架構

![架構圖](architecture.png)

##### AWS

-   [EC2](https://aws.amazon.com/ec2/) 運行機器學習
-   [Lambda](https://aws.amazon.com/lambda/) 主要功能運作
-   [API Gateway](https://aws.amazon.com/api-gateway/) 配合 Lambda 設置 API
-   [translate](https://aws.amazon.com/tw/translate/) 提供多語言服務

##### Google

-   [Maps api](https://developers.google.com/maps) 取得用戶定位
-   [place api](https://developers.google.com/maps/documentation/places/web-service/overview) 配合[Map reviews spider (puppeteer)](https://github.com/chuang861012/puppeteer-google-map-review-scraper)
-   [Dialogflow](https://dialogflow.cloud.google.com/) chatbot 應答用

##### Frontend

-   [react.js](https://github.com/facebook/react)
-   [Flask](https://flask.palletsprojects.com/en/2.1.x/)

##### Database

-   [MongoDB](https://www.mongodb.com/)

##### Chatbot platform

-   [LINE](https://developers.line.biz/zh-hant/)

##### Others

-   [Open Weather Map API](https://openweathermap.org/api) 取得天氣資訊

### 主要功能

![功能](features.png)

### 得獎紀錄

#### 2019 第 24 屆大專校院資訊應用服務創新競賽

-   產學合作組 第三名
-   鈦坦敏捷開發特別獎 佳作
-   AWS 雲端科技趨勢應用組 入圍

### 連結

[大專校院資訊應用服務創新競賽](https://innoserve.tca.org.tw/index.aspx)

