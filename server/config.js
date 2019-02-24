require('dotenv').config({path: __dirname + '/../.env'})

module.exports = {
  httpServer: {
    port: process.env.PORT
  },

  spotifyAuth: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  }

}