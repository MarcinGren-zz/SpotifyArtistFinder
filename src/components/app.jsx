import React from 'react'
import Header from './header'
import SearchBox from './search-box'
import ArtistContainer from './artists-container'
import artistsStore from '../stores/artists-store'
import artistInfoStore from '../stores/artist-info-store'
import '../styles/main.scss'

const App = () => (
  <div>
    <Header />
    <SearchBox artistsStore={artistsStore} />
    <ArtistContainer artistsStore={artistsStore} artistInfoStore={artistInfoStore} />
  </div>
)

export default App