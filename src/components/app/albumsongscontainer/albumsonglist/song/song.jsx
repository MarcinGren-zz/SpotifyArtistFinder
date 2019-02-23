import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('albumStore')
@observer
class Song extends Component {
  constructor(props) {
    super(props)

    this.onSongClick = this.onSongClick.bind(this)
  }

  onSongClick() {
    const { albumStore, song } = this.props
    albumStore.updateClickedSong(song.id)
    albumStore.getSongAudioFeatures(song.id)
  }

  render() {
    const { song } = this.props

    return (
      <li onClick={this.onSongClick} className="s__list-item">
        {song.name}
        <br />
      </li>
    )
  }
}

export default Song
