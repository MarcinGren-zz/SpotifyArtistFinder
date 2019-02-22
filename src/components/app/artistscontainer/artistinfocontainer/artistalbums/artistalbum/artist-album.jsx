import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import dayjs from 'dayjs'

@inject('songsStore')
@observer class ArtistAlbum extends Component {
  constructor(props) {
    super(props)
    this.onAlbumClick = this.onAlbumClick.bind(this)
  }

  onAlbumClick() {
    this.props.songsStore.getAlbumTracks(this.props.album.id)
    this.props.songsStore.updateClickedAlbum(this.props.album.id)
  }

  render() {
    const { album } = this.props

    return (
      <li
        key={album.id}
        className="aa__list-item"
        onClick={this.onAlbumClick}
      >
        <figure className="aa__item-figure">
          <img src={album.img} className="aa__item-image" />
          <figcaption className='aa__album-year'>{dayjs(album.releaseDate).format('YYYY')}</figcaption>
          <figcaption className="aa__item-caption">
            {album.name}
          </figcaption>
        </figure>
      </li>
    )
  }
}

export default ArtistAlbum