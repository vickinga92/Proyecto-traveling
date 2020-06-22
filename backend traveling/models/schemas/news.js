const mongoose = require('mongoose')
const Schema = mongoose.Schema

let NewsSchema = new Schema({
  titles: {
    type: String, required: false, index: {
      unique: true,
      dropDups: true
    }
  },
  link: { type: String, required: false },

});

module.exports = NewsSchema
