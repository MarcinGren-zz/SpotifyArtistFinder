import React, { Component } from 'react'
import axios from 'axios'
import { observer } from 'mobx-react'

export default @observer class SearchBox extends Component {

  onInputChange = event => {
    const searchedArtist = event.target.value

    axios.get(`/api/artist/${searchedArtist}`)
      .then(response => {
        this.props.artistsStore.cleanArtists()
        response.data.artists.items.map(artist => {
        // Going to create action in store to handle this I think
          this.props.artistsStore.foundArtists.unshift({ //todo handle undefineds
            id: artist.id,
            name: artist.name,
            img: artist.images['0'].url
          })
        })
      })
  }

  render() {

    return (
      <div className="search-box__input-container">
          <input
            className="search-box__artist-input"
            type="text"
            name="artist"
            value={this.searchedArtist}
            onChange={this.onInputChange}
          />
      </div>
    )
  }
}
