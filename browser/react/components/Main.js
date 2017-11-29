import React, { Component } from 'react';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

export default class Main extends Component {

  // constructor (props) {
  //   super(props);
  // }

  render () {
    return (
      <Router>
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar />
        </div>
        <div className="col-xs-10">
          <Switch>
            <Route exact path='/albums' render={(props)=> <AllAlbums {...props} /> }/>
            <Route exact path = '/albums/:albumId' component={SingleAlbum} />
            <Route exact path = '/artists' component={AllArtists} />
            <Route exact path = '/artists/:artistId' component={SingleArtist} />
            <Route exact path = '/' component = {AllAlbums} />
          </Switch>
        </div>

        <Player />
      </div>
      </Router>
    );
  }
}
