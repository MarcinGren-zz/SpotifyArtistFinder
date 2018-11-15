import { observable, action } from 'mobx'
import axios from 'axios'

const notAvailableUrl = 'http://089a12354f66f8c089ca-2b0da8e65ee035845e5cc0511bab26ba.r78.cf1.rackcdn.com/global/imagelib/distancelearning/no-img-6c91ea01d3af4559c726afc209ddec79d965cac9.png'

class ArtistsStore {

  @observable foundArtists = []

  @action
  getArtist(searchTerm) {
    if (searchTerm === '') {
      artistsStore.foundArtists = []
    } else {
      axios
        .get(`/api/artist/${searchTerm}`)
        .then(response => {
          artistsStore.foundArtists = response.data.artists.items.map(artist => ({
            id: artist.id,
            name: artist.name,
            img: artist.images['0'] ? artist.images['0'].url : notAvailableUrl
          }))
        })
    }
  }
}

const artistsStore = new ArtistsStore()

export default artistsStore
