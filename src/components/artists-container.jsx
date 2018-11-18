import React, { Component } from 'react'
import { observer } from 'mobx-react'
import ArtistsList from './artists-list'
import ArtistInfo from './artist-info'

export default @observer class ArtistsContainer extends Component {

  render() {
    const { artistInfoStore } = this.props

    return (
      <div className="results">
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
