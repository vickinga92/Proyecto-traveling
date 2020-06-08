const mongoose = require('mongoose')
const Schema = mongoose.Schema

let NewsSchema = new Schema({
title: { type: String, required: false},
photo: { type: String, required: false },
_id: {type: String, required: false},


});

module.exports = NewsSchema
