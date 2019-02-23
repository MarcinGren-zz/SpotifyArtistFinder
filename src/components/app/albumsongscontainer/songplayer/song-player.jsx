import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('songsStore')
@observer
class SongPlayer extends Component {
  constructor(props) {
    super(props)

    this.props.songsStore.getClickedSong()
  }

  componentWillReceiveProps() {
    this.props.songsStore.getClickedSong()
    this.refs.player.pause()
    this.refs.player.load()
  }

  render() {
    const { songsStore } = this.props

    return (
      <div className="sp__container">
        <span className="sp__song-name">{songsStore.songToDisplay.name}</span>
        <audio controls="controls" ref="player" className="sp__player">
          <source src={songsStore.songToDisplay.previewUrl} type="audio/mpeg" />
        </audio>
      </div>
    )
  }
}

export default SongPlayer
