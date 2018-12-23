import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer class AritstAlbums extends Component {
  render() {
    const { artistInfoStore } = this.props

    return(
      <div>here
        <ul>
          {console.log('in render')}
          {console.log(artistInfoStore.artistsAlbums)}
          {artistInfoStore.artistsAlbums.map(album => (
            <li key={album.id}>name: {album.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default AritstAlbums