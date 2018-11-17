import React, { Component } from 'react'
import { observer } from 'mobx-react'
import artistInfoStore from '../stores/artist-info-store'
import artistsStore from '../stores/artists-store'

export default @observer class ArtistInfo extends Component {


  render() {

    return (
      <div>
        <div>
          {artistInfoStore.artistInfo.name}
        </div>
        <div>
          {artistInfoStore.artistInfo.popularity}
        </div>
        <div>
          {artistInfoStore.artistInfo.followers}
        </div>
        <div>
          {artistInfoStore.artistInfo.genres}
        </div>
      </div>
    )
  }
}