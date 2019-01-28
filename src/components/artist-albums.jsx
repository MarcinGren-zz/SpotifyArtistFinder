import React, { Component } from 'react'
import { observer } from 'mobx-react'
import ArtistAlbum from './artist-album'

@observer class AritstAlbums extends Component {
  render() {
    const { artistInfoStore, songsStore } = this.props

    return(
      <div className='field-name-container'>
        <span className='field-name'>Albums</span>
        <ul className='aa__list'>
          {artistInfoStore.artistsAlbums.map(album => (
            <ArtistAlbum 
              key={album.id}
              album={album}
              artistInfoStore={artistInfoStore}
              songsStore={songsStore}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default AritstAlbums