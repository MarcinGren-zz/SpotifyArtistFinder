import React, { Component } from 'react'
import ArtistsStore from '../stores/artists-store'
import { observer } from 'mobx-react'

@observer
export default class ArtistsList extends Component {

  render() {
    console.log('ARTISTSLIST RENDERED')
    return (
      <div>
        <ul>
          {this.props.artistsStore.foundArtists.map(artist => {
            return (
            <li key={artist.id}>
              <figure>
                <figcaption>{artist.name}</figcaption>
                <img src={artist.img} height='100' width='100'/>
             </figure>
            </li>
          )})}
        </ul>

      </div>
    )
  }
}
