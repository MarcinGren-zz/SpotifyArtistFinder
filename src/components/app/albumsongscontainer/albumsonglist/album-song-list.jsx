import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Song from './song/song'

@inject('artistInfoStore', 'songsStore')
@observer
class AlbumSongList extends Component {
  constructor(props) {
    super(props)

    const { artistInfoStore, songsStore } = this.props
    this.state = {
      album: artistInfoStore.getClickedAlbum(songsStore.clickedAlbum)
    }
  }

  render() {
    const { songsStore } = this.props
    const { album } = this.state

    return (
      <div className="asl__container">
        <figure className="asl__album-header">
          <img src={album.img} alt="Album Cover" className="asl__album-img" />
          <figcaption className="asl__album-name">{album.name}</figcaption>
        </figure>
        <ul className="asl__songs-container">
          {songsStore.albumTracks.map(track => (
            <Song key={track.id} song={track} />
          ))}
        </ul>
      </div>
    )
  }
}

export default AlbumSongList
