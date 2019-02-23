import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import ArtistInfo from './artistinfo/artist-info'
import ArtistAlbums from './artistalbums/artist-albums'
import RelatedArtists from './relatedartists/related-artists'

@inject('artistInfoStore')
@observer
class ArtistInfoContainer extends Component {
  constructor(props) {
    super(props)

    this.artistInfoRef = React.createRef()
  }

  componentDidUpdate() {
    this.artistInfoRef.current.scrollIntoView({
      alignToTop: true,
      behavior: 'smooth',
      block: 'start'
    })
  }

  render() {
    const { artistInfoStore } = this.props

    return (
      <div className="aic__container">
        <div ref={this.artistInfoRef} className="ai__container">
          {artistInfoStore.displayInfo ? <ArtistInfo /> : null}
          {artistInfoStore.artistsAlbums.length > 0 ? <ArtistAlbums /> : null}
        </div>
        {artistInfoStore.relatedArtists.length > 0 ? <RelatedArtists /> : null}
      </div>
    )
  }
}

export default ArtistInfoContainer
