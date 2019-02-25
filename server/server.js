global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const express = require('express')
const path = require('path')
const webpack = require('webpack')
const cors = require('cors')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('../webpack.config')

const compiler = webpack(config)

class Server {
  constructor(Config, SpotifyConnector) {
    this.config = Config
    this.spotifyConnector = SpotifyConnector
    this.spotifyApi = this.spotifyConnector.getSpotifyApi()
  }
      
  errorHandler(err) {
    if (err.status === 401) {
      console.log('token refreshed')
      this.spotifyConnector.setNewAccessToken()
    } else {
      console.log(err)
    }
  }

  initServer() {
    this.app = express()
    this.app.use(cors())
    this.app.options('*', cors())
    // app.use(webpackDevMiddleware(compiler, {
    //   publicPath: config.output.publicPath
    // }))
    
    this.app.use(express.static(config.output.publicPath))
    
    this.app.get('/api/artist/:name', (req, res) => {
      this.spotifyApi.searchArtists(`${req.params.name}*`, {
        limit: 5
      }, (err, data) => {
        if (err) {
          this.errorHandler(err)
        } else {
          res.send(data)
        }
      })
    })
    
    this.app.get('/api/findartist/:name', (req, res) => {
      this.spotifyApi.getArtist(req.params.name,
        (err, data) => {
          if (err) {
            this.errorHandler(err)
          } else {
            res.send(data)
          }
        })
    })
    
    this.app.get('/api/artistalbums/:id', (req, res) => {
      this.spotifyApi.getArtistAlbums(req.params.id, {
        include_groups: 'album,single',
        market: 'PL' //might try a different way to obtain it in the future
      }, (err, data) => {
        if (err) {
          this.errorHandler(err)
        } else {
          res.send(data)
        }
      })
    })
    
    this.app.get('/api/relatedartists/:id', (req, res) => {
      this.spotifyApi.getArtistRelatedArtists(req.params.id,
        (err, data) => {
          if (err) {
            this.errorHandler(err)
          } else {
            res.send(data)
          }
        })
    })
    
    //gonna DRY the requests i think as they're quite similar
    this.app.get('/api/albumtracks/:id', (req, res) => {
      this.spotifyApi.getAlbumTracks(req.params.id, {
        market: 'PL'
      },
      (err, data) => {
        if (err) {
          this.errorHandler(err)
        } else {
          res.send(data)
        }
      })
    })
    
    this.app.get('/api/songaudiofeatures/:id', (req, res) => {
      this.spotifyApi.getAudioFeaturesForTrack(req.params.id,
        (err, data) => {
          if (err) {
            this.errorHandler(err)
          } else {
            res.send(data)
          }
        })
    })
    
    this.app.get('/bundle.js', (req, res) => {
      res.sendFile(path.join(__dirname, '../bundle.js'))
    })
    
    this.app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../src/index.html'))
    })
    
    this.app.listen(this.config.httpServer.port, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('server running')
      }
    })
  }
}

module.exports = Server