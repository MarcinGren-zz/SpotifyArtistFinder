import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('songsStore')
@observer class Song extends Component {
  constructor(props) {
    super(props)

    this.onSongClick = this.onSongClick.bind(this)
  }

  onSongClick() {
    this.props.songsStore.clickedSong = this.props.song.id
    this.props.songsStore.getSongAudioFeatures(this.props.song.id)
  }

  render() {
    const { song, songsStore } = this.props

    return (
      <li 
        onClick={this.onSongClick}
        className='s__list-item'
      >
        {song.name}
        <br />
        {/* <audio controls='controls' className='s__player'>
          <source src={song.previewUrl} type='audio/mpeg' />
        </audio> */}
      </li>
    )
  }
}

export default Song