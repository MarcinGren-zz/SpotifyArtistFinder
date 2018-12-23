import React, { Component } from 'react'
import { observer } from 'mobx-react'

export default @observer class ArtistsListInfo extends Component {
  constructor(props) {
    super(props)
    this.onArtistClick = this.onArtistClick.bind(this)
  }

  onArtistClick() {
    this.props.artistInfoStore.clickedArtist = this.props.artist.id
    this.props.artistInfoStore.getArtistInfo()
    this.props.artistInfoStore.displayInfo = true

    this.props.artistInfoStore.getArtistAlbums(this.props.artist.id)
    this.props.artistInfoStore.getRelatedArtists(this.props.artist.id)
  }

  render() {
    const { artist } = this.props

    return (
      <li
        key={artist.id}
        className="al__list-item"
        onClick={this.onArtistClick}
      >
        <figure className="al__item-figure">
          <img src={artist.img} className="al__item-image" />
          <figcaption className="al__item-caption">
            {artist.name}
          </figcaption>
        </figure>
      </li>
    )
  }
}
