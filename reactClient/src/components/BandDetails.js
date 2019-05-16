import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { bandsService } from '../services/bandsService';
import { albumsService } from '../services/albumsService';
import Loading from './Loading';
import { NEWS_API_URL } from '../constants/urls';
import { newsService } from '../services/newsService';

class BandDetails extends Component {

    state = {
        band: null,
        albums: [],
        news: []
    }

    getKey(){
        return this.keyCount++;
    }

    componentDidMount() {
        let id = this.props.match.params.band_id;
        let name = this.props.match.params.band_name;

        this.keyCount = 0;

        bandsService.getBand(id).then(data => {
            this.setState({
                band: data.data
            })
         })

         albumsService.getAlbumListByBandId(id).then(data => {
            this.setState({
                albums: data.data
            })
         })

// dffffffffffffffffffffffffffffffff

         newsService.getEverything(name).then(data => {
            this.setState({
                news: data.articles
            })
         })
   
    }



  render() {
    return (
        this.state.band !== null
        ?
        <div class="card text-center page-load">

            <div class="card-header ComponentTitle">
            <h2>{this.state.band.name}</h2>
            </div>


                    <div className="w-100 d-lg-inline-block d-md-block">
                        <img className="bandCardBodyImage" src={this.state.band.bandimageurl} alt=""/>
                    </div>

                    <div className="w-100 d-lg-inline-block d-md-block">
                        <h3 class="card-title mt-5">About {this.state.band.name}</h3>
                        <p class="card-text p-5">{this.state.band.bio}</p>
                        <a href="#" class="btn btn-primary">Add To Collection</a>
                    </div>

                    <div class="card-header mt-5 ComponentTitle">
                    <h2>Albums By Band</h2>
                    </div>

                    <div className="w-100 d-lg-inline-block d-md-block">

                            
                    {this.state.albums.map(album =>
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
                        <button type="button" class="btn btn-outline-dark w-50 m-auto albumButton ">Add To Collection</button>
                      </div>
                      <div class="card-footer">
                        <small class="text-muted"></small>
                      </div>
                  </div>
              </div>  
          )}

                    </div>

                    <div class="card-header mt-5 ComponentTitle">
                    <h2>News About Band</h2>
                    </div>

                    <div className="w-100 d-lg-inline-block d-md-block">
                 
                            {this.state.news.map(news =>
                    <div key={this.getKey()} className="albumCardNews">
                        <div class="card">
                            <img class="card-img-top" src={news.urlToImage} alt="Card image cap"/>

                            <div class="card-body albumBody">
                                <h5 class="card-title">{news.title}</h5>
                                {news.content && news.content.length > 230 ? 
                                (
                                <p class="card-text">{`${news.content.substring(0,230)}...`}</p>
                                ) :
                                <p class="card-text">{news.content}</p>
                                }
                                <a href={news.url} target="_blank"><h1 className="btn btn-outline-dark w-50 m-auto albumButton ">Read Full Story</h1></a>
                            
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Published {news.publishedAt.substring(0,10)} | by {news.source.name}</small>
                            </div>
                        </div>
                    </div>  
                )}
                    </div>
            <div class="card-footer text-muted mt-5">
            <p class="card-text">See all albums by:</p>
            </div>
        </div>
        :
        <Loading />
    );
  }
}

export default BandDetails;
