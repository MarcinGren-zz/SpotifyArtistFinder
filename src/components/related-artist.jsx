import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer class RelatedArtist extends Component {
  render() {
    const { artist } = this.props

    return (
      <li
        key={artist.id}
        className="aa__list-item"
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