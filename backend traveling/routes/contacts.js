'use strict'

const express = require('express')
const router = express.Router()

let config = require('../modules/config')
const Contact = require('../models/contacts')
const admin = require('firebase-admin');
var serviceAccount = require("../admin-password.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://traveling-112b8.firebaseio.com"
});
const dbFirebase = admin.database();


router.route('/contacts')
  .get(async (req, res) => {
    let itemList = await Contact.find().exec()

    res.json(itemList)
  })
  .post(async (req, res) => {
    let data = req.body
    console.log(data)
    try {

      let messageInfo = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        _id: newContact.user.uid
      }
      console.log(messageInfo)
      dbFirebase.firestore.collection('contacts').push(messageInfo);
      res.send('received')

    } catch (e) {
      res.status(500).json({ error: e.message })
    }
    res.status(201).json(messageInfo)
  })

router.route('/contacts/:id')
  .get(async (req, res) => {

    let searchId = req.params.id

    let foundItem = await Contact.findById(searchId).exec()

    if (!foundItem) {
      res.status(404).json({ 'message': 'El elemento que intentas obtener no existe' })
      return
    }

    res.json(foundItem)
  })
  .delete(async (req, res) => {

    let searchId = req.params.id

    let foundItem = await Contact.findOneAndDelete({ _id: searchId }).exec()

    if (!foundItem) {
      res.status(404).json({ 'message': 'El elemento que intentas eliminar no existe' })
      return
    }

    res.status(204).json()
  })

module.exports = router
