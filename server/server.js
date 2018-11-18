require('dotenv').config()

const express              = require('express'),
      path                 = require('path'),
      webpack              = require('webpack'),
      cors                 = require('cors')
      request              = require('request')
      Spotify              = require('spotify-web-api-js'),
      XMLHttpRequest       = require('xmlhttprequest').XMLHttpRequest,
      webpackDevMiddleware = require('webpack-dev-middleware')
      config               = require('../webpack.config'),
      saveAcessToken       = require('./spotify-connector'),
      
      port       = process.env.PORT,
      compiler   = webpack(config),
      app        = express(),
      spotifyApi = new Spotify()

app.use(cors())
app.options('*', cors())
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

saveAcessToken() // Returns accessToken

app.get('/api/artist/:name', (req, res) => {
  spotifyApi.searchArtists(req.params.name, {
    limit: 5
  }, (err, data) => {
    console.log(data)
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
})

// To be reused for getting artist's albums / related artists
// app.get('/api/artistinfo/:id', (req, res) => {
//   spotifyApi.getArtist(req.params.id,
//     (err, data) => {
//       console.log(data)
//       if (err) {
//         console.log(err)
//       } else {
//         res.send(data)
//       }
//     })
// })

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('server running')
  }
})
