const firebase = require('firebase')
const config = require('./config')
const dotenv = require('dotenv')


const firebaseConfig = {
  apiKey: process.env.FB_API_KEY || envs.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN || envs.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DATABASE_URL || envs.FB_DATABASE_URL,
  projectId: process.env.FB_PROJECT_ID || envs.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET || envs.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID || envs.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID || envs.FB_APP_ID,
  measurementId: process.env.FB_MEASUREMENT_ID || envs.FB_MEASUREMENT_ID
};


//module.exports = firebaseConfig;
module.exports = firebaseConfig
