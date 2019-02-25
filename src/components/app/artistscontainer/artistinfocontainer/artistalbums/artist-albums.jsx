import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import ArtistAlbum from './artistalbum/artist-album'

@inject('artistInfoStore')
@observer
class AritstAlbums extends Component {
  render() {
    const { artistInfoStore } = this.props

    return (
      <div className="field-name-container">
        <span className="field-name">Albums</span>
        <ul className="aa__list">
          {artistInfoStore.artistsAlbums.map(album => (
            <ArtistAlbum key={album.id} album={album} />
          ))}
        </ul>
      </div>
    )
  }
}

export default AritstAlbums
