import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { albumsService }  from '../services/albumsService';

class Tracks extends Component {

  state = {
    tracks: [],
    filteredTracks: [],
  }

  componentDidMount(){
    albumsService.getAlbumList().then(data => {
      var albums = data;
      var tracks = [];
      albums.forEach(album => {
        album.tracks.forEach(track => {
          track.albumcoverurl = album.albumcoverurl;
          tracks.push(track);
        });
      });
      this.setState({
        tracks,
        filteredTracks: tracks
      });
    })

  }

  filterList(event){
    let updatedList = this.state.tracks;
    
     if (event.target.value !== '') {
      updatedList = updatedList.filter(function(track){
        return track.title.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });
    }
    
    this.setState({filteredTracks: updatedList})
  }

  render() {
    return (
      this.state.tracks.length > 0
      ?
      <div className="container m-auto page-load">

        <div className="ComponentTitle mb-5 card-header mt-3">
          <h2> 100 Best Tracks Of All The Time </h2>
        </div>

          <div class="container col-xl-8 col-xs-12 p-3 mb-2 bg-dark searchPanel">

          <h5 className="text-white mb-3">Search Here</h5>
          <div class="d-flex justify-content-center h-100">
            <div class="searchbar bg-light">

              <input class="search_input text-dark" type="text" name="" placeholder="Search..." onChange={this.filterList.bind(this)}/>
              <a href="#" class="search_icon"><i class="fas fa-search text-dark">&#x26B2;</i></a>
            </div>
          </div>
          </div>

        <div className=" col-xs-12 col-md-8 d-block m-auto">

          {this.state.filteredTracks.map(track =>
              <div key={track.id} className=" m-auto col-xl-8 col-xs-12 p-2">


                  <div class="card tracksCard">
                  <div class="card-body d-sm-inline-block d-xs-block float-left">
                      <img src={track.albumcoverurl} class="imageTrack col-xl-5 col-lg-4 col-md-4 col-sm-4 float-left mb-xs-2"/>
                      <h5 className="">&#x266B;</h5>
                        <h5 class="card-title mt-1">{track.title}</h5>
                        <p class="card-text">{track.time}</p>
                        <a href={track.youtubeurl} target="_blank" class="btn btn-danger mr-2">Play</a>
                        <Link to={'/details/'+track.album_id}> <button class="btn btn-danger ml-2">See Album</button></Link>
                      </div>
                  </div>
              </div>
          )}
          </div>
      </div>
      :
      <Loading />
    );
  }
}

export default Tracks;
