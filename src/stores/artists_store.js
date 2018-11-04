import { autorun, observable } from 'mobx'

class ArtistsStore {
  @observable artists = []

  addArtist(artist) {
    this.artists.push({
      artist: artist,
    })
  }
}

const store = new ArtistsStore()

export default store

autorun(() => {
  console.log('artist store is ' + store.artists)
})