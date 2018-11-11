import React, { Component } from 'react'
import ArtistsStore from '../stores/artists-store'
import { observer } from 'mobx-react'

@observer
export default class ArtistsList extends Component {

  render() {
    console.log('ARTISTSLIST RENDERED')
    return (
      <div>
        <ul className='artists-list__list'>
          {this.props.artistsStore.foundArtists.map(artist => {
            return (
            <li key={artist.id} className='artists-list__list-item'>
              <figure className='artists-list__item-figure'>
                <figcaption className='artists-list__item-caption'>{artist.name}</figcaption>
                <img src={artist.img} className='artists-list__item-image'/>
             </figure>
            </li>
          )})}
        </ul>
      </div>
    )
  }
}
