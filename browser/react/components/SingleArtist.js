import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios'
import Bluebird from 'bluebird'

  // /:artistId/albums
  // /:albumId/songs/

export default class SingleAlbum extends Component {
  constructor(){
    super()
    this.state = {
      selectedArtist: {},
      albums: [],
      artistSongs: []
    }
  }

  componentDidMount() {
      const artistData = axios.get(`/api/artists/${this.props.match.params.artistId}`)
      .then(res => res.data);

      const albumData = axios.get(`/api/artists/${this.props.match.params.artistId}/albums`)
      .then(res => res.data);

      const songData = axios.get(`/api/artists/${this.props.match.params.artistId}/songs`)
      .then(res => res.data);

      Promise.all([artistData, albumData, songData])
      .then(values => {
        const artist = values[0];
        const albums = values[1];
        const artistSongs = values[2];
        this.setState({
          selectedArtist: artist,
          albums: albums,
          artistSongs: artistSongs
        })
      })
  }

  render () {
    const artist = this.state.selectedArtist;
    const albums = this.state.albums;
    const artistSongs = this.state.artistSongs;
    console.log('artistSongs (array?)', artistSongs);
    console.log('this.state.songs', this.state.songs);
    console.log('artist', artist);
    console.log('albums', albums);

    return (
      <div>
        <h3>{artist.name}</h3>
        <h4>ALL ALBUMS HERE</h4>
        <h4><Songs songs={artistSongs} /></h4>
      </div>
    );
  }
}
