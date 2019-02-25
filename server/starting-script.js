const Spotify = require('spotify-web-api-js')
const Server = require('./server')
const SpotifyConnector = require('./spotify-connector')
const config = require('./config')

const spotifyApi = new Spotify()
const spotifyConnector = new SpotifyConnector(config, spotifyApi)
const server = new Server(config, spotifyConnector)
server.initServer()