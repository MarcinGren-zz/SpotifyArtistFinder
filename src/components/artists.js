import React, {Component} from 'react'
import axios from 'axios'
import authenticateSpotify from '../../server/spotify-connector'
import ArtistsStore from '../stores/artists_store'
import { observer } from 'mobx-react'

const URL = 'https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj'

@observer 
export default class Artists extends Component {

  componentDidMount() {
    axios.get('/api')
    .then((response) => {
      //  let reqBody = response.request.body.toString
      //  reqBody = JSON.parse(reqBody)
      console.log(JSON.stringify(response.data))
       this.props.store.artists.push(JSON.stringify(response))
    })
    .catch((error)  => {
      console.log(error)
    })
  }

    getArtist() {
      axios.get('/api')
    }

    addArtist() {
      this.props.store.artists.push('task from artists')
    }

    render() {
      const store = this.props.store
      
      if (store.artists.length === 0) {
        return <div onClick={() => this.props.store.artists.push('task from artists')}>No artists added</div>
      }

        return (
            <div onClick={() => this.props.store.artists.push('task from artists')}>
              react comp
              {store.artists[0]}
            </div>
        )
    }
}
