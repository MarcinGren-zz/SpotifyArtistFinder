import React, { Component } from 'react'
import { observer } from 'mobx-react'
import RelatedArtist from './related-artist'

@observer class RelatedArtists extends Component {
  render() {
    const { artistInfoStore } = this.props

    return(
      <ul className='aa__list'>
        {artistInfoStore.relatedArtists.map(artist =>  (
          <RelatedArtist
            key={artist.id}
            artist={artist}
          />) )}
      </ul>
    )
  }
}

export default RelatedArtists