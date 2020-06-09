const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const News = require('../models/news')
const cheerio = require('cheerio');
const axios = require('axios')
const News = require('../models/news')


//scraping
let titlesList = []
async function init() {

      const URL="https://cnnespanol.cnn.com/seccion/viajes-y-turismo/"
      let response = await axios.get(URL);
      try{
         let $ = cheerio.load(response.data)
         const titles = $('h2').text().trim()
         titlesList.push(titles)
         console.info(titles)

      }catch(e){
          console.log(e);
      }
    }
  init();


router.route('/news')
  .get(async (req, res) => {

    let newsList = await News.find().exec()

    res.json(newsList)
  })
  .post(async (req, res)=>{

    let titlesInMongo = await new News(titlesList).save()

    res.json(titlesInMongo);

  })



  module.exports = router
