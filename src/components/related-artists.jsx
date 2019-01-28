import React, { Component } from 'react'
import { observer } from 'mobx-react'
import RelatedArtist from './related-artist'

@observer class RelatedArtists extends Component {
  render() {
    const { artistInfoStore } = this.props

    return(
      <div className='ra__field-name-container'>
        <span className='field-name'>Related Artists</span>
        <ul className='aa__list'>
          {artistInfoStore.relatedArtists.map(artist =>  (
            <RelatedArtist
              key={artist.id}
              artist={artist}
              artistInfoStore={artistInfoStore}
            />))}
        </ul>
      </div>
    )
  }
}

export default RelatedArtists