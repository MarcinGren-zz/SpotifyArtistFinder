import { observable, action, computed } from 'mobx'
import axios from 'axios'

class SongsStore {

  @observable albumTracks = []
  @observable displaySongs = false
  @observable clickedSong = ''
  @observable songToDisplay = {}

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
  getClickedSong() {
    this.songToDisplay = this.albumTracks.find(song => song.id === this.clickedSong)
    console.log(this.songToDisplay)
    console.log(this.songToDisplay.previewUrl)
  }
}

const songsStore = new SongsStore()

export default songsStore