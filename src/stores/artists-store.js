import { autorun, observable, action } from 'mobx'

class ArtistsStore {
  @observable artists = []
  @observable searchedArtist = 'asd'

  addArtist(artist) {
    this.artists.push({
      artist: artist,
    })
  }

  @action
  updateSearchedArtist(searchedArtist) {
    this.searchedArtist = searchedArtist
  }
}

const artistsStore = new ArtistsStore()

export default artistsStore

autorun(() => {
  console.log('artist store is ' + artistsStore.searchedArtist)
})