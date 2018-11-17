import React, { Component } from 'react'
import { observer } from 'mobx-react'
import artistInfoStore from '../stores/artist-info-store'
import artistsStore from '../stores/artists-store';

export default @observer class ArtistInfo extends Component {


  render() {

    return (
      <div>
      <div>
        {artistInfoStore.clickedArtist}
      artist info
      </div>
      <div>
        {JSON.stringify(artistsStore.getArtistInfo(artistInfoStore.clickedArtist))}
      </div>
      </div>
    )
  }
}