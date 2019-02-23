require('dotenv').config()

const request = require('request') // might change to axios
const Spotify = require('spotify-web-api-js')

const spotifyApi = new Spotify()

const {
  CLIENT_ID,
  CLIENT_SECRET
} = process.env
const CLIENT_CREDENTIALS = 'client_credentials'

const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`
  },
  form: {
    grant_type: CLIENT_CREDENTIALS
  },
  json: true
}

function obtainAccessToken(callback) {
  request.post(authOptions, (error, res, body) => {
    if (!error && res.statusCode === 200) {
      const token = body.access_token
      callback(null, token)
    }
  })
}

function refreshAccessToken() {
  obtainAccessToken((err, res) => {
    spotifyApi.setAccessToken(res)
  })
}

module.exports = refreshAccessToken