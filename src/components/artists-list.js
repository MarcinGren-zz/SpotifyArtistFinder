import React, { Component } from 'react'
import ArtistsStore from '../stores/artists-store'
import { observer } from 'mobx-react'

@observer
export default class ArtistsList extends Component {

  render() {
    console.log('ARTISTSLIST RENDERED')
    return (
      <div>
        <ul className='list'>
          {this.props.artistsStore.foundArtists.map(artist => {
            return (
            <li key={artist.id} className='list-item'>
              <figure className='item-figure'>
                <figcaption className='item-caption'>{artist.name}</figcaption>
                <img src={artist.img} className='item-image'/>
             </figure>
            </li>
          )})}
        </ul>

      </div>
    )
  }
}
