const mongoose = require('mongoose')
const NewsSchema = require('./schemas/news')

let NewsModel = mongoose.model('news', NewsSchema);

module.exports = NewsModel
