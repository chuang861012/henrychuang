---
title: "Guess what you like"
excerpt: Capstone project - Deep learning LINE chatbot recommendation system built on AWS.
tags: ["AWS", "MongoDB", "chatbot", "deep learning"]
---

[introduction video](https://www.youtube.com/watch?v=defBIPYP82Y)

### Architecture

![architecture](architecture.png)

##### AWS

-   [EC2](https://aws.amazon.com/ec2/) To run machine learning
-   [Lambda](https://aws.amazon.com/lambda/) main functions
-   [API Gateway](https://aws.amazon.com/api-gateway/) work with Lambda to setup API
-   [translate](https://aws.amazon.com/tw/translate/) provide i18n service

##### Google

-   [Maps api](https://developers.google.com/maps) to get user location
-   [place api](https://developers.google.com/maps/documentation/places/web-service/overview) with [Map reviews spider (puppeteer)](https://github.com/chuang861012/puppeteer-google-map-review-scraper)
-   [Dialogflow](https://dialogflow.cloud.google.com/) setup chatbot response

##### Frontend

-   [react.js](https://github.com/facebook/react)
-   [Flask](https://flask.palletsprojects.com/en/2.1.x/)

##### Database

-   [MongoDB](https://www.mongodb.com/)

##### Chatbot platform

-   [LINE](https://developers.line.biz/zh-hant/)

##### Others

-   [Open Weather Map API](https://openweathermap.org/api) to get weather data

### Main features

![features](features.png)

### Awards

#### International ICT Innovative Service Awards 2019

-   產學合作組 Third Place
-   鈦坦敏捷開發特別獎 Excellent Work
-   AWS 雲端科技趨勢應用組 nominated

### 連結

[International ICT Innovative Service Awards](https://innoserve.tca.org.tw/index.aspx)
