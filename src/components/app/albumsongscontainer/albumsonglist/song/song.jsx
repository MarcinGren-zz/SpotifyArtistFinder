import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('songsStore')
@observer
class Song extends Component {
  constructor(props) {
    super(props)

    this.onSongClick = this.onSongClick.bind(this)
  }

  onSongClick() {
    const { songsStore, song } = this.props
    songsStore.updateClickedSong(song.id)
    songsStore.getSongAudioFeatures(song.id)
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
