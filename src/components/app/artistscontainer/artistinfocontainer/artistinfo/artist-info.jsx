import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('artistInfoStore')
@observer
class ArtistInfo extends Component {
  render() {
    const {
      name,
      popularity,
      followers,
      genres
    } = this.props.artistInfoStore.artistInfo

    return (
      <div className="field-name-container">
        <span className="field-name">Info</span>
        <div className="ai__artists-grid">
          <div className="ai__name">
            <span>{name}</span>
          </div>
          <div className="ai__popularity">
            <span>Popularity: </span>
            <span>{popularity}</span>
          </div>
          <div className="ai__followers">
            <span>Followers: </span>
            <span>{followers}</span>
          </div>
          <div className="ai__genres">
            {genres.map(genre => (
              <div key={genre} className="ai__genre">
                {genre}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ArtistInfo
