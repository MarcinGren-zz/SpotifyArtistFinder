import React, { Component } from 'react'
import axios from 'axios'
import ArtistsStore from '../stores/artists-store'
import { observer } from 'mobx-react';

@observer
export default class SearchBox extends Component {

  render() {
    return (
      <div>
        <form>
          <label>
            Artist:
            <input 
              type='text' 
              name='artist' 
              value={this.props.artistsStore.searchedArtist}
              onChange={this.onInputChange}
              // onSubmit={event => this.props.artistsStore.updateSearchedArtist(event.target.value)}
              // onSubmit={event => this.props.artistsStore.searchedArtist = event.target.value} 
              />
              value: {this.props.artistsStore.searchedArtist}
          </label>
          <input 
            type='submit' />
        </form>
      </div>
    )
  }

onInputChange = event => {
  this.props.artistsStore.searchedArtist = event.target.value
}

}
