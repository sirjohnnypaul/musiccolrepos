import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { albumsService } from '../services/albumsService';
import { tracksService } from '../services/tracksService';

class AlbumDetails extends Component {

    state = {
        album: null,
        tracks: []
      }

    componentDidMount() {
        let id = this.props.match.params.album_id
        
        albumsService.getAlbum(id).then(data => {
            this.setState({
                album: data.data
            })
        });
    
         tracksService.getTrackListByAlbumId(id).then(data => {
             this.setState({
                 tracks: data.data
             })     
         })

         
    }


  render() {
    return (
        this.state.album !== null
        ?
        <div class="card text-center page-load">

            <div class="card-header mb-5 ComponentTitle">
                <h2>{this.state.album.title}</h2>
            </div>

                <div className="col-lg-10 align-center m-auto">
                    
                    <img className="m-0 col-lg-4 col-md-5 col-sm-6 d-lg-inline-block d-xs-block float-lg-left align-text-top mb-4" src={this.state.album.albumcoverurl} alt=""/>

                    <div className="col-lg-7 d-lg-inline-block d-xs-block">
                        <h3 class="card-title text-light bg-dark p-3">About {this.state.album.title}</h3>
                        <p class="card-text lead mt-3">{this.state.album.body}</p>
                        {/* <a href="#" class="btn btn-primary">Add To Collection</a> */}
                    </div>
                </div>


                    <div class="card-header mt-5 mb-5 ComponentTitle bg-dark text-white">
                        <h2>Tracks ({this.state.tracks.length})</h2>
                    </div>

                    <div className=" col-xs-12 col-md-8 d-block m-auto">

                        {this.state.tracks.map(track =>
                            <div key={track.id} className=" m-auto col-xl-8 col-xs-12 p-2">
                                <div class="card tracksCard">
                                    <div class="card-body d-sm-inline-block d-xs-block float-left">
                                        <img src={this.state.album.albumcoverurl} class="imageTrack col-xl-5 col-lg-4 col-md-4 col-sm-4 float-left mb-xs-2"/>
                                        
                                        <div className="mx-auto">
                                            <h5 className="">&#x266B;</h5>
                                            <h5 class="card-title">{track.title}</h5>
                                            <p class="card-text">{track.time}</p>
                                            <a href={track.youtubeurl} target="_blank" class="btn btn-danger mr-2">Play</a>
                                            <Link to={'/details/'+track.album_id}> <button class="btn btn-danger ml-2">See Album</button></Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

            <div class="card-footer text-muted mt-5">
                <p class="card-text">See all albums by: {this.state.album.bandname}</p>
            </div>
        </div>
        :
        <Loading />
    );
  }
}

export default AlbumDetails;
