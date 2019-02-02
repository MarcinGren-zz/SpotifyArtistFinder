import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Song from './song'

@observer class AlbumSongList extends Component {

  render() {
    const { songsStore } = this.props

    return (
      <ul className='asl__container'>
        {songsStore.albumTracks.map(track => (
          <Song
            key={track.id}
            song={track}
            songsStore={songsStore}
          />
        ))}
      </ul>
    )
  }
}

export default AlbumSongList