import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import dayjs from 'dayjs'

@inject('songsStore')
@observer
class ArtistAlbum extends Component {
  constructor(props) {
    super(props)
    this.onAlbumClick = this.onAlbumClick.bind(this)
  }

  onAlbumClick() {
    const { songsStore, album } = this.props

    songsStore.getAlbumTracks(album.id)
    songsStore.updateClickedAlbum(album.id)
  }

  render() {
    const { album } = this.props

    return (
      <li key={album.id} className="iwc__list-item aa__list-item" onClick={this.onAlbumClick}>
        <figure className="iwc__item-figure aa__item-figure">
          <img src={album.img} alt="Album Cover" className="aa__item-image" />
          <figcaption className="aa__album-year">
            {dayjs(album.releaseDate).format('YYYY')}
          </figcaption>
          <figcaption className="iwc__item-caption">{album.name}</figcaption>
        </figure>
      </li>
    )
  }
}

export default ArtistAlbum
