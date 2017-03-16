import React, { Component } from 'react';
import axios from 'axios';
import Albums from './Albums';
import Album from './Album';
import Sidebar from './Sidebar';
import Player from './Player';
import { convertAlbum, convertAlbums } from '../utils';

export default class Main extends Component {

  constructor (props) {
    super(props);
    this.state = {
      albums: [],
      selectedAlbum: {}
    };
    this.selectAlbum = this.selectAlbum.bind(this);
    this.deselectAlbum = this.deselectAlbum.bind(this);
  }

  componentDidMount () {
    axios.get('/api/albums/')
      .then(res => res.data)
      .then(albums => {
        this.setState({ albums: convertAlbums(albums) })
      });
  }

  selectAlbum (albumId) {
    axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => this.setState({
        selectedAlbum: convertAlbum(album)
      }));
  }

  deselectAlbum () {
    this.setState({ selectedAlbum: {}});
  }

  render () {
    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar deselectAlbum={this.deselectAlbum} />
        </div>
        <div className="col-xs-10">
        {
          this.state.selectedAlbum.id ?
          <Album album={this.state.selectedAlbum} /> :
          <Albums albums={this.state.albums} selectAlbum={this.selectAlbum} />
        }
        </div>
        <Player />
      </div>
    );
  }
}
