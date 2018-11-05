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
      saveAcessToken   = require('./spotify-connector')

app.use(cors())
app.options('*', cors())
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}))

saveAcessToken()


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
  console.log('token321')
  console.log(accessToken)
  const options = {
    url: 'https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj',
    headers: {
      'Authorization': 'Bearer ' + accessToken
    },
    json: true
  }

  request.get(options, function (error, response, body) {
    res.send(body)
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
