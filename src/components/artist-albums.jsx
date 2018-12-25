import React, { Component } from 'react'
import { observer } from 'mobx-react'
import ArtistAlbum from './artist-album'

@observer class AritstAlbums extends Component {
  render() {
    const { artistInfoStore } = this.props

    return(
      <ul className='aa__list'>
        {artistInfoStore.artistsAlbums.map(album => (
          <ArtistAlbum 
            key={album.id}
            album={album}
            artistInfoStore={artistInfoStore}
          />
        ))}
      </ul>
    )
  }
}

export default AritstAlbums