import { observable, action, computed } from 'mobx'
import axios from 'axios'

class SongsStore {

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
        // this.songToDisplay.acousticness = response.data.acousticness,
        // this.songToDisplay.danceability = response.data.danceability,
        // this.songToDisplay.energy = response.data.energy,
        // this.songToDisplay.instrumentalness = response.data.instrumentalness,
        // this.songToDisplay.liveness = response.data.liveness,
        // this.songToDisplay.speechiness = response.data.speechiness,
        // this.songToDisplay.valence = response.data.valence

        // console.log(this.songToDisplay)
      })
  }

  @action
  getClickedSong() {
    this.songToDisplay = this.albumTracks.find(song => song.id === this.clickedSong)
    console.log('in songsstore.js getclickedsong')
    console.log(this.songToDisplay)
  }
}

const songsStore = new SongsStore()

export default songsStore