import React, { Component } from 'react'
import { observer, Provider } from 'mobx-react'
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
      <Provider 
        artistsStore={artistsStore}
        artistInfoStore={artistInfoStore}
        songsStore={songsStore}
      >
        <div>
          <div className={`${songsStore.clickedAlbum ? 'faded-background' : null}`}>
            <Header />
            <SearchBox />
            <ArtistContainer />
          </div>
          {songsStore.clickedAlbum ? (
            <AlbumSongsContainer
              artistInfoStore={artistInfoStore}
              songsStore={songsStore}
            />
          ) : null}
        </div>
      </Provider>
    )
  }
}

export default App
