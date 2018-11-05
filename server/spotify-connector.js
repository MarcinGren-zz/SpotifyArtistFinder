require('dotenv').config()
const request = require('request') // might change to axios

const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET

const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(`${client_id}:${client_secret}`).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
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
    accessToken = res
  })
}

module.exports = saveAcessToken


// // const {client_id, client_secret} = process.env works fine on server but console in browser throws error?
// const client_id = process.env.CLIENT_ID
// const client_secret = process.env.CLIENT_SECRET

// function authenticateSpotify(url) {

//   console.log(client_id + 'asd')
//   const authOptions = {
//     url: 'https://accounts.spotify.com/api/token',
//     headers: {
//       'Authorization': 'Basic ' + (new Buffer(`${client_id}:${client_secret}`).toString('base64'))
//     },
//     form: {
//       grant_type: 'client_credentials'
//     },
//     json: true
//   }

//   request.post(authOptions, function (error, response, body) {
//     if (!error && response.statusCode === 200) {

//       const token = body.access_token;
//       const options = {
//         url: url,
//         headers: {
//           'Authorization': 'Bearer ' + token
//         },
//         json: true
//       }

//       request.get(options, function (error, response, body) {
//       })
//     }
//   })
// }

// module.exports = authenticateSpotify