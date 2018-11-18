import { observable, action } from 'mobx'
import artistsStore from './artists-store'

class ArtistInfoStore {

  @observable displayInfo = false
  @observable clickedArtist = ''
  @observable artistInfo = {}

  @action
  getArtistInfo() {
    this.artistInfo = artistsStore.getClickedArtist(this.clickedArtist)
    // Want to display only 6 genres tops
    console.log(JSON.stringify(this.artistInfo.genres))
    this.artistInfo.genres.length = 6
    console.log(JSON.stringify(this.artistInfo.genres))
    return this.artistInfo
  }
}

const artistInfoStore = new ArtistInfoStore()

export default artistInfoStore