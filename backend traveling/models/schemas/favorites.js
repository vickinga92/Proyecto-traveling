const mongoose = require('mongoose')
const Schema = mongoose.Schema

let favoritesSchema = new Schema({
  id: {type: String, required: false},
  name: { type: String, required: false },
  subcategory_type : { type: String, required: false },
  location_string: { type: String, required: false },
  url: { type: String, required: false },
  num_reviews: { type: Number, required: false },
  votes: { type: Number, required: false },
  imgT: { type: String, required: false },
  price: { type: String, required: false },
});


module.exports = favoritesSchema
