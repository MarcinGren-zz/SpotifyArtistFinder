import React, { Component } from 'react'
import { observer } from 'mobx-react'

@observer class ArtistAlbum extends Component {
  render() {
    const { album } = this.props

    return(
      // <li key={album.id}>name: {album.name}</li>

      <li
        key={album.id}
        className="aa__list-item"
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