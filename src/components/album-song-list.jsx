import React, { Component } from 'react'
import { observer } from 'mobx-react'

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
      this.props.artistInfoStore.displaySongs = false
      console.log('clicked outside')
    }
  }

  render() {
    // const { artistInfoStore } = this.props

    return (
      <div ref={this.setWrapperRef} className='asl__container'>
        asd
      </div>
    )
  }
}

export default AlbumSongList