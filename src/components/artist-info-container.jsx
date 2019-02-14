import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import ArtistsList from './artists-list'
import ArtistInfo from './artist-info'
import ArtistAlbums from './artist-albums'
import RelatedArtists from './related-artists'

@inject('artistInfoStore')
@observer class ArtistInfoContainer extends Component {

  componentDidUpdate() {
    document.getElementsByClassName('ai__container')[0].scrollIntoView({
      alignToTop: true,
      behavior: 'smooth',
      block: 'start'
    })
    console.log('scroll')
  }

  render() {
    const { artistInfoStore } = this.props

    return (
      <div className='aic__container'>
        <div className='ai__container'>
          {artistInfoStore.displayInfo ? (
            <ArtistInfo />
          ) : null}
          {artistInfoStore.artistsAlbums.length > 0 ? (
            <ArtistAlbums />
          ) : null}
        </div>
        {artistInfoStore.relatedArtists.length > 0 ? (
          <RelatedArtists />
        ) : null}
      </div>
    )
  }
  }

export default ArtistInfoContainer
