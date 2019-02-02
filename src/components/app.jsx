import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Header from './header'
import SearchBox from './search-box'
import ArtistContainer from './artists-container'
import AlbumSongsContainer from './album-songs-container'
import artistsStore from '../stores/artists-store'
import artistInfoStore from '../stores/artist-info-store'
import songsStore from '../stores/songs-store'
import '../styles/main.scss'

@observer class App extends Component {
  
  render() {

    return (
      <div>
        <div className={`${songsStore.displaySongs ? 'faded-background' : null}`}>
          <Header />
          <SearchBox 
            artistsStore={artistsStore}
            artistInfoStore={artistInfoStore}  
          />
          <ArtistContainer
            artistsStore={artistsStore}
            artistInfoStore={artistInfoStore}
            songsStore={songsStore}
          />
        </div>
        {songsStore.displaySongs ? (
          <AlbumSongsContainer
            songsStore={songsStore}
          />
        ) : null}
      </div>
    )
  }
}

export default App
