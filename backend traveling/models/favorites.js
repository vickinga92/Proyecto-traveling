const mongoose = require('mongoose')
const favoritesSchema = require('./schemas/favorites')
const favoritesModel = mongoose.model('favorites', favoritesSchema)

module.exports = favoritesModel

