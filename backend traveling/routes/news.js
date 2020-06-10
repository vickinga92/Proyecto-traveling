const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const News = require('../models/news')
const cheerio = require('cheerio');
const axios = require('axios')


//scraping

async function init() {

      const URL="https://cnnespanol.cnn.com/seccion/viajes-y-turismo/"
      let response = await axios.get(URL);
      try{
         let $ = cheerio.load(response.data)
       // var titles = $('h2').attr('class','news__title').text().trim()
         var titles =$('h2').text().trim()

        var titles1 =  $('h2').map(function(i, el) {
          return $(this).text().trim();
        }).get().join(' ');
        let image = $('article').children('div.news__media').children('a.news__media-item').find('img.image').attr('src')

         var url = $('h2').find('a').attr('href')
         console.info(titles)
         console.info(titles1)
         console.log(url)
         console.log(image)

         //console.info(url)


      }catch(e){
          console.log(e);
      }

router.route('/news')
  .get(async (req, res) => {

    let newsList = await News.find().exec()

    res.json(newsList)
  })
  .post(async (req, res)=>{
    try{
      let titlesList =  {
        titles : titles,
       // url : url
      }
      let titleInMongo = await new News(titlesList).save()
      res.json(titleInMongo);

    }catch (e){
      res.status(500).json({error:e.message})
    }
  })
}
init();
  module.exports = router

/*
  const cheerio = require('cheerio')
const axios = require('axios')
const init = require('./basic_scrap_thomman')
const Guitar = require('./models/guitars')
const mongoose = require('mongoose')
const config = require('./config')

let generic_links = []

async function connectDatabase() {

  try {
    await mongoose.connect("mongodb+srv://victorjim:8zTbXmo44htRv53p@ddawmalaga2020-aizbs.mongodb.net/test?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log("Imposible conectar a la base de datos");
    console.log(err);
  }
}

async function specificScrap (){

    generic_links = await init()

  generic_links.forEach(async (link) => {
    await axios.get(link+'?ls=100').then(urlResponse => {
        const $ = cheerio.load(urlResponse.data)
        $('div.extensible-article.list-view.compare.parent')
        .each((i, el) => {
          setInterval(async()=>{

            let unique_link = $(el).children('div.left').children('div.product-image').find('a').attr('href')
            let imgUrl = $(el).children('div.left').children('div.product-image.image-block').find('img').attr('src').replace('150x150', '350x350')
            let title = $(el).find('div.title-block.link-group').text().trim()
            let price = $(el).find('span.article-basketlink').text()
            let description = $(el).find('div.description-block').text().trim()

            let newGuitar = await new Guitar({
              url: unique_link,
              name: title,
              price: price,
              image: imgUrl,
              description: description,
              status: "new",
              date: new Date(),
              website: "thomann.de/es/guitarras_electricas.html"
            }).save()

          }, 5000)

          })
          })
          .catch(error => {
            console.log(error)
          })
        })
      }

async function empezar(){
  await connectDatabase();
  specificScrap()
}

empezar() */
