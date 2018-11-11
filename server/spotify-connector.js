require('dotenv').config()
const request = require('request') // might change to axios

const CLIENT_ID = process.env.CLIENT_ID,
      CLIENT_SECRET = process.env.CLIENT_SECRET,
      CLIENT_CREDENTIALS = 'client_credentials'


const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64'))
  },
  form: {
    grant_type: CLIENT_CREDENTIALS
  },
  json: true
}

function obtainAccessToken(callback) { request.post(authOptions,  (error, res, body) => {
  if (!error && res.statusCode === 200) {

    const token = body.access_token
    callback(null, token)
  }
})
}

function saveAcessToken() {
  obtainAccessToken((err, res) => {
    accessToken = res // I don't think it's a great idea to have it here - might move this function to the main file
    spotifyApi.setAccessToken(accessToken)
  })
}

module.exports = saveAcessToken
