import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('artistsStore', 'artistInfoStore')
@observer
class SearchBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchedArtist: ''
    }
  }

  onInputChange = event => {
    const { artistsStore, artistInfoStore } = this.props

    this.setState({ searchedArtist: event.target.value })
    artistsStore.getArtist(this.state.searchedArtist)
    artistInfoStore.updateDisplayInfo(false)
  }

  render() {
    return (
      <div className="sb__input-container">
        <input
          className="sb__artist-input"
          type="text"
          name="artist"
          value={this.state.searchedArtist}
          onChange={this.onInputChange}
        />
      </div>
    )
  }
}

export default SearchBox
