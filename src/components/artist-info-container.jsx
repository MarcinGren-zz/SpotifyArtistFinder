import React, { Component } from 'react'
import { observer } from 'mobx-react'
import ArtistsList from './artists-list'
import ArtistInfo from './artist-info'
import ArtistAlbums from './artist-albums'
import RelatedArtists from './related-artists'

export default @observer class ArtistsContainer extends Component {

  render() {
    const { artistInfoStore } = this.props

    return (
      <div className='aic__container'>
        <div className='ai__container'>
          {artistInfoStore.displayInfo ? (
            <ArtistInfo
              artistsStore={this.props.artistsStore}
              artistInfoStore={this.props.artistInfoStore}
            />
          ) : null}
          {artistInfoStore.artistsAlbums.length > 0 ? (
            <ArtistAlbums
              artistInfoStore={this.props.artistInfoStore}
            />
          ) : null}
        </div>
        {artistInfoStore.relatedArtists.length > 0 ? (
          <RelatedArtists
            artistInfoStore={this.props.artistInfoStore}
          />
        ) : null}
      </div>
    )
  }
}
