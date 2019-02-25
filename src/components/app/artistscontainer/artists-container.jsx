import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import ArtistsList from './artistslist/artists-list'
import ArtistInfoContainer from './artistinfocontainer/artist-info-container'

@inject('artistInfoStore')
@observer
class ArtistsContainer extends Component {
  render() {
    const { artistInfoStore } = this.props

    return (
      <div className="results">
        <ArtistsList />
        {artistInfoStore.displayInfo ? <ArtistInfoContainer /> : null}
      </div>
    )
  }
}

export default ArtistsContainer
