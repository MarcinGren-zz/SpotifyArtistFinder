import { observable, action, computed } from 'mobx'
import axios from 'axios'
import artistsStore from './artists-store'

class ArtistInfoStore {

  @observable displayInfo = false
  @observable clickedArtist = ''
  @observable artistInfo = {}

  @action
  getArtistInfo() {
    console.log('here')
    this.artistInfo = artistsStore.getClickedArtist(this.clickedArtist)
    console.log(this.artistInfo)
    return this.artistInfo
  }


  // axios.get(`/api/artistinfo/${artistId}`)
  // .then(response => {
  //   // console.log(response)
  // })

  // @action
  // getArtistInfo(searchTerm) {
  //   if (searchTerm === '') {
  //     artistsStore.foundArtists = []
  //   } else {
  //     axios
  //       .get(`/api/artist/${searchTerm}`)
  //       .then(response => {
  //         artistsStore.foundArtists = response.data.artists.items.map(artist => ({
  //           id: artist.id,
  //           name: artist.name,
  //           img: artist.images['0'] ? artist.images['0'].url : notAvailableUrl
  //         }))
  //       })
  //   }
  // }

}

const artistInfoStore = new ArtistInfoStore()

export default artistInfoStore