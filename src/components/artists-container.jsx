import React, { Component } from 'react'
import { observer } from 'mobx-react'
import ArtistsList from './artists-list'
import ArtistInfoContainer from './artist-info-container'
import AlbumSongList from './album-song-list'

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
          <AlbumSongList
            artistInfoStore={artistInfoStore}
            songsStore={songsStore}
          />
        ) : null}
      </div>
    )
  }
}
