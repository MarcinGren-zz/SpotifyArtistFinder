import React, { Component } from 'react'
import { observer } from 'mobx-react'
import ArtistsListItem from './artists-list-item'

export default @observer class ArtistsList extends Component {

  render() {
    const { artistsStore } = this.props

    return (
      <ul className="al__list">
        {artistsStore.foundArtists.map(artist => (
          <ArtistsListItem
            key={artist.id}
            artist={artist}
            artistInfoStore={this.props.artistInfoStore}
          />
        ))}
      </ul>
    )
  }
}
