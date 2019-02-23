import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('artistInfoStore')
@observer
class ArtistsListItem extends Component {
  constructor(props) {
    super(props)

    this.onArtistClick = this.onArtistClick.bind(this)
  }

  onArtistClick() {
    const { artistInfoStore, artist } = this.props

    artistInfoStore.updateClickedArtist(artist.id)
    artistInfoStore.getArtistInfo(artist.id)
    artistInfoStore.getArtistAlbums(artist.id)
    artistInfoStore.getRelatedArtists(artist.id)
    artistInfoStore.updateDisplayInfo(true)
  }

  render() {
    const { artist } = this.props

    return (
      <li
        key={artist.id}
        className="iwc__list-item al__list-item"
        onClick={this.onArtistClick}
      >
        <figure className="iwc__item-figure al__item-figure">
          <img src={artist.img} alt="Artist" className="al__item-image" />
          <figcaption className="iwc__item-caption al__item-caption">{artist.name}</figcaption>
        </figure>
      </li>
    )
  }
}

export default ArtistsListItem
