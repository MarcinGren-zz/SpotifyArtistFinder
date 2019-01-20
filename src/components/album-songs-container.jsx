import React, { Component } from 'react'
import { observer } from 'mobx-react'
import AlbumSongList from './album-song-list'
import SongPlayer from './song-player'
import SongInfo from './song-info'

@observer class AlbumSongsContainer extends Component {

  render() {
    const { songsStore } = this.props
    
    return (
      <div className='asc__container'>
        <AlbumSongList 
          songsStore={songsStore}
        />
        {songsStore.clickedSong ? [
          <SongInfo
            songsStore={songsStore}
          />,
          <SongPlayer
            songsStore={songsStore}
          />
        ] : null}
      </div>
    )
  }
}

export default AlbumSongsContainer