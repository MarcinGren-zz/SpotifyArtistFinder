import { observable, action } from 'mobx'

class ArtistsStore {
  @observable searchedArtist = ''
  @observable foundArtists = []
  @observable artistsInfo

  @action
  cleanArtists() {
    this.foundArtists = []
  }
}

const artistsStore = new ArtistsStore()

export default artistsStore
