import { observable, action } from 'mobx'
import artistsStore from './artists-store'
import axios from 'axios'

const notAvailableUrl = 'http://089a12354f66f8c089ca-2b0da8e65ee035845e5cc0511bab26ba.r78.cf1.rackcdn.com/global/imagelib/distancelearning/no-img-6c91ea01d3af4559c726afc209ddec79d965cac9.png'

class ArtistInfoStore {

  @observable displayInfo = false
  @observable clickedArtist = ''
  @observable artistInfo = {}
  @observable artistsAlbums = []

  @action
  getArtistInfo() {
    this.artistInfo = artistsStore.getClickedArtist(this.clickedArtist)
    // Want to display only 6 genres tops
    console.log(JSON.stringify(this.artistInfo.genres))
    this.artistInfo.genres.length = 6
    console.log(JSON.stringify(this.artistInfo.genres))
    return this.artistInfo
  }

  @action
  getArtistAlbums(artistId) {
    axios
      .get(`/api/artistalbums/${artistId}`)
      .then(response => {
        console.log('artistinfostore')
        console.log(this.artistsAlbums)
        console.log('data')
        console.log(response.data)
        this.artistsAlbums = response.data.items.map(album => ({
          id: album.id,
          name: album.name,
          releaseDate: album.release_date,
          img: album.images['0'] ? album.images['0'].url : notAvailableUrl
        }))
        console.log('aftermap')
        console.log(this.artistsAlbums)

      })
  }
}

const artistInfoStore = new ArtistInfoStore()

export default artistInfoStore