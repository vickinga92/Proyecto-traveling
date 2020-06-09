const mongoose = require('mongoose')
const Schema = mongoose.Schema

let favoritesSchema = new Schema({
  photo: { type: String, required: false },
  name: { type: String, required: false },
  subcategory_type : { type: String, required: false },
  hotel_class : { type: String, required: false },
  location_string: { type: String, required: false },
  num_reviews: { type: Number, required: false },
  helpful_votes: { type: Number, required: false },
  price: { type: String, required: false },
});


module.exports = favoritesSchema
