import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer class Song extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { song, songsStore } = this.props

    return (
      <li className='s__list-item'>
        {song.name}
        <br />
        <audio controls='controls' className='s__player'>
          <source src={song.previewUrl} type='audio/mpeg' />
        </audio>
      </li>
    )
  }
}

export default Song