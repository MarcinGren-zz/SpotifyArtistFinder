const request = require('request') // might change to axios

const CLIENT_CREDENTIALS = 'client_credentials'

class SpotifyConnector {

  constructor(Config, SpotifyApi) {
    this.Config = Config
    this.SpotifyApi = SpotifyApi

    this.authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': `Basic ${Buffer.from(`${this.Config.spotifyAuth.clientId}:${this.Config.spotifyAuth.clientSecret}`).toString('base64')}`
      },
      form: {
        grant_type: CLIENT_CREDENTIALS
      },
      json: true
    }
    this.refreshAccessToken()
  }

  obtainAccessToken(callback) {
    request.post(this.authOptions, (error, res, body) => {
      if (!error && res.statusCode === 200) {
        this.token = body.access_token
        callback(null, this.token)
      }
    })
  }

  refreshAccessToken() {
    this.obtainAccessToken((err, res) => {
      this.SpotifyApi.setAccessToken(res)
    })
  }
}

module.exports = SpotifyConnector