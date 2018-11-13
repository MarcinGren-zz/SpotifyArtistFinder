import React, { Component } from 'react'
import axios from 'axios'
import { observer } from 'mobx-react'

export default @observer class SearchBox extends Component {
  onInputChange = event => {
    this.props.artistsStore.searchedArtist = event.target.value
  }

  getArtists(store) {axios
    .get(`/api/artist/${store.searchedArtist}`)
    .then(response => {
      store.cleanArtists()
      response.data.artists.items.map(artist => {
      // Going to create action in store to handle this I think
        store.foundArtists.unshift({ //todo handle undefineds
          id: artist.id,
          name: artist.name,
          img: artist.images['0'].url
        })
      })
    })
  }

  render() {
    const { artistsStore } = this.props

    return (
      <div className="search-box__input-container">
        <span className="search-box__artist-input-wrapper">
          <input
            className="search-box__artist-input"
            type="text"
            name="artist"
            value={artistsStore.searchedArtist}
            onChange={this.onInputChange}
            // Applied with each typed letter
            onSubmit={this.getArtists(artistsStore)}
          />
          <span />
        </span>
      </div>
    )
  }
}
