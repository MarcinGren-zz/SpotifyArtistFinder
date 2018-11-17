import { observable, action } from 'mobx'
import axios from 'axios'

class ArtistInfoStore {

  @observable displayInfo = false
  @observable clickedArtist = ''


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