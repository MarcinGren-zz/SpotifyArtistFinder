import { observable, action } from 'mobx'
import axios from 'axios'

class ArtistsStore {
  @observable foundArtists = []

  @action
  getArtist(searchTerm) {axios
    .get(`/api/artist/${searchTerm}`)
    .then(response => {
      artistsStore.foundArtists = response.data.artists.items.map(artist => ({
        id: artist.id,
        name: artist.name,
        // url hardcoded for now, going to change later
        img: artist.images['0'] ? artist.images['0'].url : 'http://089a12354f66f8c089ca-2b0da8e65ee035845e5cc0511bab26ba.r78.cf1.rackcdn.com/global/imagelib/distancelearning/no-img-6c91ea01d3af4559c726afc209ddec79d965cac9.png'
      }))
    })
  }
}

const artistsStore = new ArtistsStore()

export default artistsStore
