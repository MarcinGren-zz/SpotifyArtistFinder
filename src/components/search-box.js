import React, { Component } from 'react'
import axios from 'axios'
import ArtistsStore from '../stores/artists-store'
import { observer } from 'mobx-react'

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
              // Make request then map 5 artists id, name, img to store
              onSubmit={axios.get(`/api/artist/${this.props.artistsStore.searchedArtist}`)
              .then((response) => {
                console.log(response)
                console.log('datares')
                console.log(response.data)
                // Applied limit on query itself so might remove this later
                response.data.artists.items.slice(0, 5).map(artist => {
                  this.props.artistsStore.foundArtists.unshift({id: JSON.stringify(artist.id), name: JSON.stringify(artist.name), img: JSON.stringify(artist.images['0'].url)})}
                )})
              }
              />
              value: {this.props.artistsStore.foundArtists}
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
