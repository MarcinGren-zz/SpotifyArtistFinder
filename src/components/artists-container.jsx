import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import ArtistsList from './artists-list'
import ArtistInfoContainer from './artist-info-container'
import AlbumSongsContainer from './album-songs-container'

@inject('artistsStore', 'artistInfoStore', 'songsStore')
@observer
class ArtistsContainer extends Component {
  render() {
    const { artistsStore, artistInfoStore, songsStore } = this.props

    return (
      <div className="results">
        <ArtistsList />
        {artistInfoStore.displayInfo ? (
          <ArtistInfoContainer />
        ) : null}
        {/* {songsStore.clickedAlbum ? (
          <AlbumSongsContainer
            songsStore={songsStore}
          />
        ) : null} */}
      </div>
    )
  }
}

export default ArtistsContainer
