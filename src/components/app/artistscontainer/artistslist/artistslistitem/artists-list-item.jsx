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
    artistInfoStore.getArtistInfo(artistInfoStore.clickedArtist)
    artistInfoStore.updateDisplayInfo(true)

    artistInfoStore.getArtistAlbums(artist.id)
    artistInfoStore.getRelatedArtists(artist.id)
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
          <img src={artist.img} alt="Artist" className="al__item-image" />
          <figcaption className="al__item-caption">{artist.name}</figcaption>
        </figure>
      </li>
    )
  }
}

export default ArtistsListItem
