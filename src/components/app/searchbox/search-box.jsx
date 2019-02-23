import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('artistsStore', 'artistInfoStore')
@observer
class SearchBox extends Component {
  onInputChange = event => {
    const { artistsStore, artistInfoStore } = this.props

    const searchedArtist = event.target.value
    artistsStore.getArtist(searchedArtist)
    artistInfoStore.updateDisplayInfo(false)
  }

  render() {
    return (
      <div className="sb__input-container">
        <input
          className="sb__artist-input"
          type="text"
          name="artist"
          value={this.searchedArtist}
          onChange={this.onInputChange}
        />
      </div>
    )
  }
}

export default SearchBox
