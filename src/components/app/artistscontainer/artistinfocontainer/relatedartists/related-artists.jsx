import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import RelatedArtist from './relatedartist/related-artist'

@inject('artistInfoStore')
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
            />))}
        </ul>
      </div>
    )
  }
}

export default RelatedArtists