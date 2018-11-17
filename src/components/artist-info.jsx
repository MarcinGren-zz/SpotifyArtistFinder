import React, { Component } from 'react'
import { observer } from 'mobx-react'
import artistInfoStore from '../stores/artist-info-store'
import artistsStore from '../stores/artists-store'

export default @observer class ArtistInfo extends Component {


  render() {

    return (
      <div className='ai__artists-grid'>
        <div className='ai__name'>
          <span>Name: </span><span>{artistInfoStore.artistInfo.name}</span>
        </div>
        <div className='ai__popularity'>
          <span>Popularity: </span><span>{artistInfoStore.artistInfo.popularity}</span>
        </div>
        <div className='ai__followers'>
          <span>Followers: </span><span>{artistInfoStore.artistInfo.followers}</span>
        </div>
        <div className='ai__genres'>
          <div className='ai__genre-one'>{artistInfoStore.artistInfo.genres[0]}</div>
          <div className='ai__genre-two'>{artistInfoStore.artistInfo.genres[1]}</div>
          <div className='ai__genre-three'>{artistInfoStore.artistInfo.genres[2]}</div>
          <div className='ai__genre-four'>{artistInfoStore.artistInfo.genres[3]}</div>
        </div>
      </div>
      
    )
  }
}