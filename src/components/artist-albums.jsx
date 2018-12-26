import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ArtistAlbum from './artist-album'
import AlbumSongList from './album-song-list';

@observer class AritstAlbums extends Component {
  render() {
    const { artistInfoStore } = this.props

    return(
      <Router>
        <div>
          <Route
            path='/'
            component={props => (
              <ul className='aa__list'>
                {artistInfoStore.artistsAlbums.map(album => (
                  <Link to={`/album/${album.id}`} className='link' key={album.id}>
                    <ArtistAlbum 
                      album={album}
                      artistInfoStore={artistInfoStore}
                      {...props}
                    />
                  </Link>
                ))}
              </ul>
            )}
          />
          <Route
            path='/album/:id'
            component={props => <AlbumSongList {...props} />}
          />
        </div>
      </Router>
    )
  }
}

export default AritstAlbums