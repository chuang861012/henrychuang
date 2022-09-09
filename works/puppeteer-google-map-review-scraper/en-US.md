---
title: "Map reviews spider (puppeteer)"
excerpt: A web scraper to get google map reviews with place api.(used for Guess what you like data collection)
tags: ["puppeteer", "MongoDB", "web scraping"]
---

A web scraper to get google map reviews with place api.

### Architecture

1. get place information from [google place api](https://developers.google.com/maps/documentation/places/web-service/overview)
2. use the information to build url of the place
3. get all reviews by [puppeteer](https://github.com/puppeteer/puppeteer)
4. save the results to [MongoDB](https://www.mongodb.com/)

### Usage

1. run `npm install`
2. Add a `.env` file.
3. `npm start`

#### Environment variable

Set the following variables in .env file.  
**API_KEY** : Google Place API key.  
**CONNECTION_STRING** : MongoDB connection string with username & password

### Entry point

##### app.js

##### main(lat, lng, collection, option)

-   `lat` `lng` : \<number> : the latitude & longitude of the place to search.
-   `collection` \<string> : the collection name to save in mongodb.
-   `option` \<object> :
    -   `max` \<number> : the max length of reviews to get at each place. default to **200**
    -   `radius` \<number> : radius in meters. default to **1500**
    -   `type` \<string> : the place type of place api. default to **restaurant** (full list : [Place Types](https://developers.google.com/places/supported_types))

### Links

[Github](https://github.com/chuang861012/puppeteer-google-map-review-scraper)
