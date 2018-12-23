import React, { Component } from 'react'
import { observer } from 'mobx-react'
import ArtistsList from './artists-list'
import ArtistInfo from './artist-info'
import ArtistAlbums from './artist-albums'

export default @observer class ArtistsContainer extends Component {

  render() {
    const { artistInfoStore } = this.props

    return (
      <div className='aic__container'>
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
    )
  }
}
