import React from 'react'
import SearchBox from './search-box'
import ArtistsList from './artists-list'
import Header from './header'
import artistsStore from '../stores/artists-store'
import '../styles/main.scss'

const App = () => (
  <div>
    <Header />
    <SearchBox artistsStore={artistsStore} />
    <ArtistsList artistsStore={artistsStore} />
  </div>
)

export default App