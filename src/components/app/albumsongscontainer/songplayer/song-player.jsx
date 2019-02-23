import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('albumStore')
@observer
class SongPlayer extends Component {
  constructor(props) {
    super(props)

    this.props.albumStore.getClickedSong()
    this.playerRef = React.createRef()
  }

  componentWillReceiveProps() {
    this.props.albumStore.getClickedSong()
    this.playerRef.current.pause()
    this.playerRef.current.load()
  }

  render() {
    const { albumStore } = this.props

    return (
      <div className="sp__container">
        <span className="sp__song-name">{albumStore.songToDisplay.name}</span>
        <audio controls="controls" ref={this.playerRef} className="sp__player">
          <source src={albumStore.songToDisplay.previewUrl} type="audio/mpeg" />
        </audio>
      </div>
    )
  }
}

export default SongPlayer
