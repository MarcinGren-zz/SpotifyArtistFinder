# SpotifyArtistFinder
Look for your favourite artists in Spotify directory, search their albums, find out their popularity and discover related artists. Check out their song previews and find out which of their songs is the best for dancing and which has the most accousticness.

## Link
https://spotify-artist-finder.herokuapp.com/

## Demo
![alt text](https://media.giphy.com/media/9IZRalYv29LeqcyI41/giphy.gif)

## Setup
- Spotify for Developers account is required - can be created at https://developer.spotify.com/dashboard/login
- Create a client id and client secret - guide https://developer.spotify.com/documentation/general/guides/app-settings/
- Create .env file in the project's root
- Create variables: 
CLIENT_ID = 'yourclientid'
CLIENT_SECRET = 'yourclientsecret'
PORT = yourport
- npm install
- npm start

## To Be Done
### Technical
- Add PropTypes
- Change bindings from constructor to class property
- Add RxJS (to improve http requests and to ensure that correct data is always received)
- Media queries to improve bigger desktops
- Unit tests with jest + enzyme probably

### Functional
- Might want to inform users that song preview is not available as lots of songs don't have it as below
![alt text](https://i.imgur.com/wkdamEz.png)

## Known Issues
- Possible for API to return the wrong data if the last request finishes earlier than others (should be solved by RxJS
- Possible longer loading time from time to time (results from heroku entering sleep mode)
