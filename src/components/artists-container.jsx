import React, { Component } from 'react'
import { observer } from 'mobx-react'
import ArtistsList from './artists-list'
import ArtistInfoContainer from './artist-info-container'
import AlbumSongsContainer from './album-songs-container'

export default @observer class ArtistsContainer extends Component {

  render() {
    const { artistsStore, artistInfoStore, songsStore } = this.props

    return (
      <div className="results">
        <ArtistsList
          artistsStore={artistsStore}
          artistInfoStore={artistInfoStore}
        />
        {artistInfoStore.displayInfo ? (
          <ArtistInfoContainer
            artistsStore={artistsStore}
            artistInfoStore={artistInfoStore}
            songsStore={songsStore}
          />
        ) : null}
        {songsStore.displaySongs ? (
          <AlbumSongsContainer
            songsStore={songsStore}
          />
        ) : null}
      </div>
    )
  }
}
