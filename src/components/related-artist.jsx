import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('artistInfoStore')
@observer class RelatedArtist extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.artistInfoStore.getSingleArtist(this.props.artist.id)
    this.props.artistInfoStore.getArtistAlbums(this.props.artist.id)
  }

  render() {
    const { artist } = this.props

    return (
      <li
        key={artist.id}
        className="aa__list-item"
        onClick={this.handleClick}
      >
        <figure className="aa__item-figure">
          <img src={artist.img} className="aa__item-image" />
          <figcaption className="aa__item-caption">
            {artist.name}
          </figcaption>
        </figure>
      </li>
    )
  }
}

export default RelatedArtist