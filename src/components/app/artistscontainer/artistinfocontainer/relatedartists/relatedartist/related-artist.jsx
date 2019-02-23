import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('artistInfoStore')
@observer
class RelatedArtist extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { artistInfoStore, artist } = this.props

    artistInfoStore.getSingleArtist(artist.id)
    artistInfoStore.getArtistAlbums(artist.id)
  }

  render() {
    const { artist } = this.props

    return (
      <li key={artist.id} className="aa__list-item" onClick={this.handleClick}>
        <figure className="aa__item-figure">
          <img src={artist.img} alt="Related Artist" className="aa__item-image" />
          <figcaption className="aa__item-caption">{artist.name}</figcaption>
        </figure>
      </li>
    )
  }
}

export default RelatedArtist
