import React, { Component } from 'react'
import { observer } from 'mobx-react'
import ArtistsList from './artists-list'
import ArtistInfo from './artist-info'
import artistInfoStore from '../stores/artist-info-store'

export default @observer class ArtistsContainer extends Component {
  render() {
    return (
      <div>
        <ArtistsList
          artistsStore={this.props.artistsStore}
          artistInfoStore={this.props.artistInfoStore}
        />
        {artistInfoStore.displayInfo ? (
          <ArtistInfo
            artistsStore={this.props.artistsStore}
            artistInfoStore={this.props.artistInfoStore}
          />
        ) : null}
      </div>
    )
  }
}
