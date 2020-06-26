const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const News = require('../models/news')
const cheerio = require('cheerio');
const axios = require('axios')

async function init() {

  try {
    const URL = "https://cnnespanol.cnn.com/seccion/viajes-y-turismo/"
    let response = await axios.get(URL);

    let $ = cheerio.load(response.data)

    var news = {

      titles: $('#article-846433 > div.news__data > h2').text().trim(),
      link: $("h2.news__title").find('a').attr('href')
    }
    console.info(news)
    let newArticle = new News(news)
    await newArticle.save()

  } catch (e) {
    console.log(e);
  }

  router.route('/news')
    .get(async (req, res) => {

      let newsList = await News.find().exec()

      res.json(newsList)
    })
}
init();

module.exports = router


