import React, { Component } from 'react'
import { observer } from 'mobx-react'

export default @observer class ArtistsList extends Component {
  render() {
    const { artistsStore } = this.props

    return (
      <div>
        <ul className="artists-list__list">
          {artistsStore.foundArtists.map(artist => (
            <li key={artist.id} className="artists-list__list-item">
              <figure className="artists-list__item-figure">
                <figcaption className="artists-list__item-caption">
                  {artist.name}
                </figcaption>
                <img src={artist.img} className="artists-list__item-image" />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
