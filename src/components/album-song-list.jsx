import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Song from './song'

@observer class AlbumSongList extends Component {
  constructor(props) {
    super(props)
    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  handleClickOutside() {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.songsStore.displaySongs = false
      console.log('clicked outside')
    }
  }

  render() {
    const { songsStore } = this.props

    return (
      <ul ref={this.setWrapperRef} className='asl__container'>
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