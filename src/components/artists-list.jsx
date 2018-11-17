import React, { Component } from 'react'
import { observer } from 'mobx-react'

export default @observer class ArtistsList extends Component {

  onArtistClick(artistId) {
    this.props.artistInfoStore.clickedArtist = artistId
    this.props.artistInfoStore.getArtistInfo()
    this.props.artistInfoStore.displayInfo = true
  }

  render() {
    const { artistsStore } = this.props

    return (
      <ul className="artists-list__list">
        {artistsStore.foundArtists.map(artist => (
          // Going to move li to a separate component later
          <li key={artist.id} className="artists-list__list-item"
            onClick={() => this.onArtistClick(artist.id)}>
            <figure className="artists-list__item-figure">
              <img src={artist.img} className="artists-list__item-image" />
              <figcaption className="artists-list__item-caption">
                {artist.name}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    )
  }
}
