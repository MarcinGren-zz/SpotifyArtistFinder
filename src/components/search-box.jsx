import React, { Component } from 'react'
import axios from 'axios'
import { observer } from 'mobx-react'

export default @observer class SearchBox extends Component {
  onInputChange = event => {
    this.props.artistsStore.searchedArtist = event.target.value
  }

  render() {
    const { artistsStore } = this.props

    return (
      <div>
        <div className="search-box__input-container">
          <span className="search-box__artist-input-wrapper">
            <input
              className="search-search-box__artist-input"
              type="text"
              name="artist"
              value={artistsStore.searchedArtist}
              onChange={this.onInputChange}
              // Applied with each typed letter
              onSubmit={axios
                .get(`/api/artist/${artistsStore.searchedArtist}`)
                .then(response => {
                  // Bug: Artist might be listed twice which results in more than 5 items listed
                  // Type in 'Avicii' -> Hit backspace 3 times -> Avicii listed more than
                  // once and more listing than 5

                  response.data.artists.items.map(artist => {
                    artistsStore.foundArtists.unshift({
                      id: artist.id,
                      name: artist.name,
                      img: artist.images['0'].url
                    })
                  })
                })}
            />
            <span />
          </span>
        </div>
      </div>
    )
  }
}
