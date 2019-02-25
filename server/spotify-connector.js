const request = require('request')

const CLIENT_CREDENTIALS = 'client_credentials'

class SpotifyConnector {

  constructor(Config, SpotifyApi) {
    this.config = Config
    this.spotifyApi = SpotifyApi

    this.authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': `Basic ${Buffer.from(`${this.config.spotifyAuth.clientId}:${this.config.spotifyAuth.clientSecret}`).toString('base64')}`
      },
      form: {
        grant_type: CLIENT_CREDENTIALS
      },
      json: true
    }
    this.setNewAccessToken()
  }

  getSpotifyApi() {
    return this.spotifyApi
  }

  setNewAccessToken() {
    request.post(this.authOptions, (error, res, body) => {
      if (!error && res.statusCode === 200) {
        this.spotifyApi.setAccessToken(body.access_token)
      }
    })
  }
}

module.exports = SpotifyConnector