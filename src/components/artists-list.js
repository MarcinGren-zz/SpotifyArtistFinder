import React, { Component } from 'react'
import ArtistsStore from '../stores/artists-store'
import { observer } from 'mobx-react'

@observer
export class ArtistsList extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.artistsStore.foundArtists.map((artist) => (<li key={artist.id}>{artist.name}</li>))}
        </ul>
      </div>
    )
  }
}

export default ArtistsList
