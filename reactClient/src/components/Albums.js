import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Loading from './Loading';

import { albumsService } from '../services/albumsService';

class Albums extends Component {


  state = {
    albums: [],
    filteredAlbums: [],
    bands:[]
  }

  componentDidMount(){
    albumsService.getAlbumList().then(data => {
      const albums = data.data;
      this.setState({
        albums,
        filteredAlbums: albums
      });
    })
  }

  filterList(event){
    let updatedList = this.state.albums;
    
     if (event.target.value !== '') {
      updatedList = updatedList.filter(function(album){
        return album.title.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });
    }
    
    this.setState({filteredAlbums: updatedList})
  }



  render() {
    return (
      this.state.albums.length > 0
      ?
      <div className="container m-auto page-load">



        <div className="ComponentTitle p-3 mt-3 mb-3">
          <h2> 100 Best Albums Of All The Time </h2>
        </div>
        
          <div class="container p-3 mt-4 bg-dark searchPanel">

            <h5 className="text-white mb-3">Search Here</h5>
            <div class="d-flex justify-content-center h-100">
              <div class="searchbar bg-light">

                <input class="search_input" type="text" name="" placeholder="Search..." onChange={this.filterList.bind(this)}/>
                <a href="#" class="search_icon"><i class="fas fa-search text-dark">&#x26B2;</i></a>
              </div>
            </div>
          </div>

          {this.state.filteredAlbums.map(album =>
                <div key={album.id} className="albumCard p-md-3 pd-xs-1 mt-4 d-md-inline-block d-sm-block col-lg-4 col-md-6 col-xs-12">
                    <div class="card">
                        <img class="card-img-top" src={album.albumcoverurl} alt="Card image cap"/>

                        <div class="card-body albumBody">
                          <h5 class="card-title">{album.title}</h5>
                          {album.body.length > 230 ? 
                          (
                            <p class="card-text">{`${album.body.substring(0,230)}...`}</p>
                          ) :
                          <p class="card-text">{album.body}</p>
                          }
                          <Link to={'/details/'+album.id}><h1 className="btn btn-outline-dark w-50 m-auto albumButton ">Read More</h1></Link>
                          {/* <button type="button" class="btn btn-outline-dark w-50 m-auto albumButton ">Add To Collection</button> */}
                        </div>
                        <div class="card-footer">
                          <small class="text-muted"></small>
                        </div>
                    </div>
                </div>  
            )}
      </div>
      :
      <Loading />
    );
  }
}

export default Albums;
