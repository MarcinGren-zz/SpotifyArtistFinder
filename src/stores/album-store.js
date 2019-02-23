import { observable, action } from 'mobx'
import axios from 'axios'

class AlbumStore {

  @observable albumTracks = []
  @observable clickedAlbum = ''
  @observable clickedSong = ''
  @observable songToDisplay = {}

  @action
  updateAlbumTracks(value) {
    this.albumTracks = value
  }

  @action
  updateClickedAlbum(value) {
    this.clickedAlbum = value
  }

  @action
  updateClickedSong(value) {
    this.clickedSong = value
  }    

  @action
  updateSongToDisplay(value) {
    this.songToDisplay = value
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

  @action
  getSongAudioFeatures(songId) {
    axios
      .get(`/api/songaudiofeatures/${songId}`)
      .then(response => {
        const { acousticness, danceability, energy, instrumentalness, liveness, speechiness, valence } = response.data
        Object.assign(this.songToDisplay, { acousticness, danceability, energy, instrumentalness, liveness, speechiness, valence })
      })
  }

  @action
  clearalbumStore() {
    this.updateClickedAlbum('')
    this.updateAlbumTracks([])
    this.updateClickedSong('')
    this.updateSongToDisplay({})
  }

  @action
  getClickedSong() {
    this.songToDisplay = this.albumTracks.find(song => song.id === this.clickedSong)
  }
}

const albumStore = new AlbumStore()

export default albumStore