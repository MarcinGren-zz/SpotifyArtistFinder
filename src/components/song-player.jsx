import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer class SongPlayer extends Component {
  constructor(props) {
    super(props)

    // this.onSongClick = this.onSongClick.bind(this)
    // console.log(this.props.songsStore.getClickedSong())
    // this.state = {song: this.props.songsStore.getClickedSong()}
    this.props.songsStore.getClickedSong()
  }
  
  componentDidUpdate() {
    this.props.songsStore.getClickedSong()
  }


  // onSongClick() {
  //   this.props.songsStore.clickedSong = this.props.song.id
  // }

  render() {
    const { songsStore } = this.props

    return (
      <div>
        {/* onClick={this.onSongClick}
        className='s__list-item'
      >
        {song.name}
        <br /> */}
        <audio controls='controls' className='s__player'>
          <source src={this.props.songsStore.songToDisplay.previewUrl} type='audio/mpeg' />
        </audio>
      </div>
    )
  }
}

export default SongPlayer