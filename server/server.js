require('dotenv').config()

const express          = require('express'),
      port             = process.env.PORT,
      path             = require('path'),
      webpack          = require('webpack'),
      config           = require('../webpack.config'),
      compiler         = webpack(config),
      cors             = require('cors')
      app              = express(),
      spotifyConnector = require('./spotify-connector'),
      request          = require('request')
      saveAcessToken   = require('./spotify-connector'),
      Spotify          = require('spotify-web-api-js'),
      spotifyApi       = new Spotify(),
      XMLHttpRequest   = require('xmlhttprequest').XMLHttpRequest

app.use(cors())
app.options('*', cors())
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}))

saveAcessToken() // Returns accessToken

app.get('/api', (req, res) => {
  spotifyApi.getArtistRelatedArtists('4dwdTW1Lfiq0cM8nBAqIIz', (err, data) => {
    if (err) { console.log(err) }
    else { res.send(data) }
  })
})

app.get('/api/artist/:name', (req, res) => {
  spotifyApi.searchArtists(req.params.name, (err, data) => {
    console.log(data)
    if (err) { console.log(err) }
    else { res.send(data) }
  })
})

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
