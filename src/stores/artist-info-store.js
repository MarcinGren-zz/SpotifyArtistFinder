import { observable, action } from 'mobx'
import axios from 'axios'
import artistsStore from './artists-store'

const notAvailableUrl = 'http://089a12354f66f8c089ca-2b0da8e65ee035845e5cc0511bab26ba.r78.cf1.rackcdn.com/global/imagelib/distancelearning/no-img-6c91ea01d3af4559c726afc209ddec79d965cac9.png'

class ArtistInfoStore {

  @observable displayInfo = false
  @observable clickedArtist = ''
  @observable artistInfo = {}
  @observable artistsAlbums = []
  @observable relatedArtists = []
  @observable albumTracks = []
  @observable displaySongs = false

  @action
  getArtistInfo(artistId) {
    this.artistInfo = artistsStore.getClickedArtist(artistId)
    // Want to display only 6 genres tops
    this.artistInfo.genres.length = 6
    return this.artistInfo
  }

  @action
  getSingleArtist(artistId) {
    axios
      .get(`/api/findartist/${artistId}`)
      .then(response => {
        console.log(JSON.stringify(response))
        this.artistInfo = {
          id: response.data.id,
          name: response.data.name,
          popularity: response.data.popularity,
          followers: response.data.followers.total,
          genres: response.data.genres,
          img: response.data.images['0'] ? response.data.images['0'].url : notAvailableUrl
        }
      })
  }

  @action
  getArtistAlbums(artistId) {
    axios
      .get(`/api/artistalbums/${artistId}`)
      .then(response => {
        this.artistsAlbums = response.data.items.map(album => ({
          id: album.id,
          name: album.name,
          releaseDate: album.release_date,
          type: album.album_type,
          img: album.images['0'] ? album.images['0'].url : notAvailableUrl
        }))
      })
  }

  @action
  getRelatedArtists(artistId) {
    axios
      .get(`/api/relatedartists/${artistId}`)
      .then(response => {
        console.log('response')
        console.log(response)
        this.relatedArtists = response.data.artists.map(artist => ({
          id: artist.id,
          name: artist.name,
          img: artist.images['0'] ? artist.images['0'].url : notAvailableUrl
        }))
        console.log(this.relatedArtists)
      })
  }

  @action
  getAlbumTracks(albumId) {
    axios
      .get(`/api/albumtracks/${albumId}`)
      .then(response => {
        this.albumTracks = response.data.items.map(track => ({
          id: track.id,
          name: track.name,
          previewUrl: track.preview_url
        }))
      })
  }
}

const artistInfoStore = new ArtistInfoStore()

export default artistInfoStore