//scraping
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const News = require('../models/news')


router.route('/news')
  .get(async (req, res) => {

    let itemList = await News.find().exec()

    res.json(itemList)
  })



  module.exports = router
