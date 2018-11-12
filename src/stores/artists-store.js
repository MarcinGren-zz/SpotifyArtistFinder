import { autorun, observable } from 'mobx'

class ArtistsStore {
  @observable searchedArtist = ''
  @observable foundArtists = []
}

const artistsStore = new ArtistsStore()

export default artistsStore

autorun(() => {
  if (artistsStore.foundArtists.length > 5) {
    artistsStore.foundArtists.length = 5
  }
})
