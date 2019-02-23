# SpotifyArtistFinder
Look for your favourite artists in Spotify directory, find out their popularity and followers.

## Link
https://spotify-artist-finder.herokuapp.com/

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
- Add ReactRouter (to avoid using displayInfo)
- Add RxJS (to improve http requests and to ensure that correct data is always received)
- Media queries to improve mobile version
- Might introduce Provider

### New Functionality 
Improving the style of existing Artist Info, addition of Artist's Albums and Related Artists as below
![alt text](https://i.imgur.com/CkfAJmj.jpg)

## Known Issues
- Search box on mobile has right side cut off (using a media query to make it a bit smaller should fix it)
- Possible for API to return the wrong data if the last request finishes earlier than others
- Possible longer loading time from time to time (results from heroku entering sleep mode after which node.js server needs to start from scratch)
