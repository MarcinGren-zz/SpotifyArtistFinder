require('dotenv').config()

global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const express = require('express')
const path = require('path')
const webpack = require('webpack')
const cors = require('cors')
const Spotify = require('spotify-web-api-js')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('../webpack.config')
const refreshAccessToken = require('./spotify-connector')

const port = process.env.PORT
const compiler = webpack(config)
const app = express()
const spotifyApi = new Spotify()

app.use(cors())
app.options('*', cors())
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }))

app.use(express.static(config.output.publicPath))

refreshAccessToken() // Returns accessToken

function errorHandler(err) {
  if (err.status === 401) {
    console.log('token refreshed')
    saveAcessToken()
  } else {
    console.log(err)
  }
}

app.get('/api/artist/:name', (req, res) => {
  spotifyApi.searchArtists(`${req.params.name}*`, {
    limit: 5
  }, (err, data) => {
    if (err) {
      errorHandler(err)
    } else {
      res.send(data)
    }
  })
})

app.get('/api/findartist/:name', (req, res) => {
  spotifyApi.getArtist(req.params.name,
    (err, data) => {
      if (err) {
        errorHandler(err)
      } else {
        res.send(data)
      }
    })
})

app.get('/api/artistalbums/:id', (req, res) => {
  spotifyApi.getArtistAlbums(req.params.id, {
    include_groups: 'album,single',
    market: 'PL' //might try a different way to obtain it in the future
  }, (err, data) => {
    if (err) {
      errorHandler(err)
    } else {
      res.send(data)
    }
  })
})

app.get('/api/relatedartists/:id', (req, res) => {
  spotifyApi.getArtistRelatedArtists(req.params.id,
    (err, data) => {
      if (err) {
        errorHandler(err)
      } else {
        res.send(data)
      }
    })
})

//gonna DRY the requests i think as they're quite similar
app.get('/api/albumtracks/:id', (req, res) => {
  spotifyApi.getAlbumTracks(req.params.id, {
    market: 'PL'
  },
  (err, data) => {
    if (err) {
      errorHandler(err)
    } else {
      res.send(data)
    }
  })
})

app.get('/api/songaudiofeatures/:id', (req, res) => {
  spotifyApi.getAudioFeaturesForTrack(req.params.id,
    (err, data) => {
      if (err) {
        errorHandler(err)
      } else {
        res.send(data)
      }
    })
})

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../bundle.js'))
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