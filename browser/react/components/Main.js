import React, { Component } from 'react';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import { HashRouter, Route } from 'react-router-dom';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';


export default class Main extends Component {

 render () {
   return (
    <HashRouter>
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar deselectAlbum={this.deselectAlbum} />
        </div>
        <div className="col-xs-10">

            <div>
                <Route exact path="/albums" component={AllAlbums} />
                <Route path="/albums/:albumId" component={SingleAlbum} />
                <Route exact path="/artists" component={AllArtists} />
                <Route path="/artists/:artistsId" component={SingleArtist} />
                <Route exact path="/" component={AllAlbums} /> 
            </div>
        </div>
        <Player />
      </div>
     </HashRouter>
   );
 }
}

//NOTE: Always remember all routes will be defined in Main.js which is the main component
// and the component name like AllAlbums or SingleAlbum must be given correctly in routes.

//NOTE:  <Route exact path="/albums" component={AllAlbums} />  here we are writing 
//exact in the route so that we can get the exact output that is only the specific 
//one and no all the other albums.