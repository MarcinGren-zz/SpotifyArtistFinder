import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer class ArtistAlbum extends Component {
  render() {
    const { album } = this.props

    return(
      <li key={album.id}>name: {album.name}</li>
    )
  }
}

export default ArtistAlbum