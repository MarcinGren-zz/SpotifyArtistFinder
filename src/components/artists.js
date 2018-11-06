import React, {Component} from 'react'
import axios from 'axios'
import authenticateSpotify from '../../server/spotify-connector'
import ArtistsStore from '../stores/artists-store'
import { observer } from 'mobx-react'
import { action } from 'mobx'

const URL = 'https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj'

@observer 
export default class Artists extends Component {

  componentDidMount() {
    axios.get('/api')
    .then((response) => {
      // response.data.artists.forEach((el, i, arr) => {
      //   console.log(el)
      // })
      response.data.artists.map(artist => {
        this.props.artistsStore.artists.push(JSON.stringify(artist.name))
      })
    })
    .catch((error)  => {
      console.log(error)
    })
  }

    getArtist() {
      axios.get('/api')
    }

    @action
    addArtist() {
      this.props.artistsStore.artists.push('task from artists')
    }

    render() {
      const artistsStore = this.props.artistsStore
      
      if (artistsStore.artists.length === 0) {
        return <div onClick={() => this.props.artistsStore.artists.push('task from artists')}>No artists added</div>
      }

        return (
            <div onClick={() => this.props.artistsStore.artists.push('task from artists')}>
              react comp
              {artistsStore.artists}
            </div>
        )
    }
}
