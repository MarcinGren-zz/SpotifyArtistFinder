import React, { Component } from 'react'
import { observer } from 'mobx-react'

export default @observer class SearchBox extends Component {

  onInputChange = event => {
    const searchedArtist = event.target.value
    this.props.artistsStore.getArtist(searchedArtist)
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
