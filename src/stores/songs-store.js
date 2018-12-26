import { observable, action } from 'mobx'
import axios from 'axios'

class SongsStore {

  @observable albumTracks = []
  @observable displaySongs = false

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

const songsStore = new SongsStore()

export default songsStore