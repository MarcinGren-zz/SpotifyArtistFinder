import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('artistsStore', 'artistInfoStore')
@observer
class SearchBox extends Component {
  onInputChange = event => {
    const searchedArtist = event.target.value
    this.props.artistsStore.getArtist(searchedArtist)
    this.props.artistInfoStore.displayInfo = false
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
