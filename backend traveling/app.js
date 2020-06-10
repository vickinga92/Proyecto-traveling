'use strict'

//dependencias
const express = require('express')
const bearerToken = require('express-bearer-token')
const cors = require('cors')
const database = require('./modules/database')
const firebase = require('firebase')
const config = require('./modules/config')

firebase.initializeApp(config.firebaseConfig);

//instancia de express

const app = express()

//configuración de los middlewares

app.use(bearerToken())
app.use(cors())
app.use(express.json())

//rutas de los ficheros
const routeAuth = require('./routes/auth')
const routeUsers = require('./routes/users')
const routeFavorites = require('./routes/favorites')
const routeNews = require('./routes/news')

//Se enganchan las rutas

app.use(routeAuth)
app.use(routeUsers)
app.use(routeFavorites)
app.use(routeNews)


//conectamos la base de datos
database.connect()


//exponemos la instancia configurada de la app

module.exports = app
