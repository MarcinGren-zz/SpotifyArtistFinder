const Spotify = require('spotify-web-api-js')
const Server = require('./server')
const SpotifyConnector = require('./spotify-connector')
const Config = require('./config')

const spotifyApi = new Spotify()
const spotifyConnector = new SpotifyConnector(Config, spotifyApi)
const server = new Server(Config, spotifyConnector)
server.initServer()