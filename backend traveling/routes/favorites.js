const mongoose = require('mongoose')
const express = require('express')
const {json} = require('express')
const router = express.Router()
const Favorites = require('../models/favorites')
const mustAuth = require('../middlewares/mustAuth')

router.route('/favorites')
  .get(mustAuth(), async (req, res) => {
   /*  if (req.user.profile !== 'admin') {
      filters.user = { _id: req.user.id }
    } */

    let favoriteList = await Favorites.find().exec()

    res.json(favoriteList)
  })
   .post(mustAuth(), async (req, res) => {
     let data = req.body
    try{
      let newFavorite =  {
        photo: data.photo,
        name : data.name,
        subcategory_type : data.subcategory_type,
        hotel_class: data.hotel_class,
        location_string : data.location_string,
        num_reviews : data.num_reviews,
        helpful_votes: data.helpful_votes,
        price: data.price
      }

      let favoriteInMongo = await new Favorites(newFavorite).save()

      res.json(favoriteInMongo);

    }catch (e){
      res.status(500).json({error:e.message})
    }
})


router.route('/favorites/:id')
  .get(mustAuth(), async (req, res) => {

    let searchId = req.params.id

    let foundItem = await Favorites.findById(searchId).exec()

    if (!foundItem) {
      res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
      return
    }

    res.json(foundItem)
  })
  .delete(mustAuth(), async (req, res) => {

    let searchId = req.params.id

    let foundItem = await Favorites.findOneAndDelete({_id: searchId}).exec()

    if (!foundItem) {
      res.status(404).json({ 'message': 'El elemento que intentas eliminar no existe' })
      return
    }

    res.status(204).json()
  });



module.exports = router
