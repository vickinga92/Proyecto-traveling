const mongoose = require('mongoose')
const Schema = mongoose.Schema

let itemSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  dated_at: { type: Date, default: Date.now },
});

module.exports = itemSchema
