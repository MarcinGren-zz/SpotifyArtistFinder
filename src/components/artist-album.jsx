import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer class ArtistAlbum extends Component {
  constructor(props) {
    super(props)
    this.onAlbumClick = this.onAlbumClick.bind(this)
  }

  onAlbumClick() {
    console.log('in artist album click')
    console.log(this.props.artistInfoStore.displaySongs)
    this.props.artistInfoStore.getAlbumTracks(this.props.album.id)
    this.props.artistInfoStore.displaySongs = true
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
          <figcaption className="aa__item-caption">
            {album.name}
          </figcaption>
        </figure>
      </li>
    )
  }
}

export default ArtistAlbum