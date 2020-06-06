const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const Favorites = require('../models/favorites')
//middleware configurable para autenticación
const mustAuth = require('../middlewares/mustAuth')

router.route('/favorites')
  .get(mustAuth(), async (req, res) => {
    //let filters = {id: req.user.uid}
    let itemList = await Favorites.find().exec()

    res.json(itemList)
  })
   .post(mustAuth(), async (req, res) => {
    let data = req.body
    try{
      let newFavorite = {} /* [{
        //id: data.user.uid,
        name : data.name,
        subcategory_type : data.subcategory_type,
        location_string : data.location_string,
        url : data.url,
        num_reviews : data.num_reviews,
        votes: data.votes,
        imgT : data.imgT,
        price: data.price
      }] */
    console.info(data)

      let favoriteInMongo = await new Favorites(newFavorite).save()

      res.json(favoriteInMongo);

    }catch (e){
      res.status(500).json({error:e.message})
    }
});
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
  })


module.exports = router
