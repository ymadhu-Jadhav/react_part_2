import React, {Component} from 'react';
import axios from 'axios';
import Bluebird from 'bluebird';

export default class SingleArtist extends Component {
    constructor(props){
                super(props);
                this.state = {
                  selectedArtist: {}
                }
              }
    componentDidMount () {
        const artistId = this.props.match.params.artistId;
        const gettingArtist = axios.get(`api/artists/${this.props.match.params.artistId}`);
        const gettingArtistAlbums = axios.get(`api/artists/${this.props.match.params.artistId}/albums`);
        const gettingArtistSongs = axios.get(`api/artists/${this.props.match.params.artistId}/songs`);
        Bluebird.all([gettingArtist,gettingArtistAlbums,gettingArtistSongs])
            .then(resArray => resArray.map(res => res.data))
            // .then(data =>{
            //         this.setState({
            //             artist: data[0],
            //             artistAlbums: data[1],
            //             artistSongs: data[2]
            //         })
            //     } //NOTE: you can use 'spread' instead as under.For that U will need to import bluebird as well.
            .spread((artist,albums,songs) => {
                artist.albums = albums;
                artist.songs = songs;
                this.setState({
                    selectedArtist: artist
                })
            })
    }
    render() {
        console.log('artist', this.state.selectedArtist);
        return(
            <div>
                <h3>ARTIST NAME</h3>
                <h4>ALBUMS</h4>
                <h4>SONGS</h4>
            </div>
        )
    }

}




//import { Link } from 'react-router-dom';

// export default class SingleArtist extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//           artist: {},
//           artistAlbum: [],
//           artistSongs: []
//         }
//       }
//       componentDidMount () {
//         const artist = axios.get(`api/artists/${this.props.match.params.artistId}`);
//         const artistAlbums = axios.get(`api/artists/${this.props.match.params.artistId}/albums`);
//         const artistSongs = axios.get(`api/artists/${this.props.match.params.artistId}/songs`);
//         Promise.All([artist,artistAlbums,artistSongs])
//             .then(res => {
//                 //console.log(res);
//                 return res.map(elem =>{
//                     return ele.data;
//                 })
//             })
//             .then(data =>{
//                 this.setState({
//                     artist: data[0],
//                     artistAlbums: data[1],
//                     artistSongs: data[2]
//                 })
//             })
//         }   
     
        
//     render() {
//         return (
//             <div>
//                 <h3>ARTIST NAME</h3>
//                 <h4>ALBUMS</h4>
//                 <h4>SONGS</h4>
//             </div>

//         )
//     }
// }
/*<div>
        <h3>Albums</h3>
        <div className="row">
        {
          albums.map(album => (
            <div className="col-xs-4" key={ album.id }>
              
              <Link to={`/albums/${album.id}`}className="thumbnail"> 
                <img src={ album.imageUrl } />
                <div className="caption">
                  <h5>
                    <span>{ album.name }</span>
                  </h5>
                  <small>{ album.songs.length } songs</small>
                </div>
              </Link>
            </div>
          ))
        }
        </div>
      </div> */



//NOTE: when you are putting variable i.e. artistID or albumId into a string, then you use back ticks 
// as per ES6.
//NOTE: this.props.match.params.artistId;