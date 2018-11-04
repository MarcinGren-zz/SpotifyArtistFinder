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

app.use(cors())
app.options('*', cors())
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}))


app.get('/api', (req, res) => {

  // const token = ''
  // const options = {
  //   url: 'https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj',
  //   headers: {
  //     'Authorization': 'Bearer ' + token
  //   }
  // }
  // request(options, (error, response, body) => {
  //   if(error) {
  //     res.send('error occured')
  //   } else {
  //     res.send(body)
  //   }
  // })

  // moved from spotify-connector to figure out whats wrong, will refactor after implementing api wrapper
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
  
    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
  
        const token = body.access_token;
        const options = {
          url: 'https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj',
          headers: {
            'Authorization': 'Bearer ' + token
          },
          json: true
        }
        request.get(options, function (error, response, body) {
          res.send(body)
        })
      }
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
