import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import ArtistsListItem from './artistslistitem/artists-list-item'

@inject('artistsStore')
@observer
class ArtistsList extends Component {
  render() {
    const { artistsStore } = this.props

    return (
      <ul className="al__list">
        {artistsStore.foundArtists.map(artist => (
          <ArtistsListItem key={artist.id} artist={artist} />
        ))}
      </ul>
    )
  }
}

export default ArtistsList
