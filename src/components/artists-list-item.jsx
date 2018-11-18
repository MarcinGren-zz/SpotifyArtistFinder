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
  }

  render() {
    const { artist } = this.props

    return (
      <li
        key={artist.id}
        className="artists-list__list-item"
        onClick={this.onArtistClick}
      >
        <figure className="artists-list__item-figure">
          <img src={artist.img} className="artists-list__item-image" />
          <figcaption className="artists-list__item-caption">
            {artist.name}
          </figcaption>
        </figure>
      </li>
    )
  }
}
