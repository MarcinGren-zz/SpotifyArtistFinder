import { autorun, observable, action, computed } from 'mobx'

class ArtistsStore {
  @observable artists = []
  @observable searchedArtist = ''
  @observable foundArtists = []

  addArtist(artist) {
    this.artists.push({
      artist: artist,
    })
  }

  @action
  updateSearchedArtist(searchedArtist) {
    this.searchedArtist = searchedArtist
  }

  // Not yet used, to be further explored
  @computed
  foundArtistsKeyValue() {
    return foundArtists.map((artist) => <li key={artist.name}></li>)
  }
}

const artistsStore = new ArtistsStore()

export default artistsStore

autorun(() => {
  console.log('artist store searchedArtist is ' + artistsStore.searchedArtist)
  console.log('artist store foundArtists is ' + JSON.stringify(artistsStore.foundArtists))
  console.log('artist store foundArtist length is ' + artistsStore.foundArtists.length)
  
  if (artistsStore.foundArtists.length > 5) { 
    artistsStore.foundArtists.length = 5
  }
})