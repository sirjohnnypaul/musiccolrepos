import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { newsService } from '../services/newsService';

class News extends Component {

  state = {
    news: [],
    filteredNews: []
  }

  componentDidMount(){

    newsService.getTopHeadlines().then(data => {
        this.setState({
            news: data.articles,
        })
     })
  }




  render() {
    return (
      this.state.news.length > 0
      ?
        <div className="page-load col-12 m-auto col-xs-12">

          <div className="ComponentTitle card-header mt-3 mb-3">
            <h2> Check out the news</h2>
          </div>


          {this.state.news.map(news =>
              <div className="m-auto col-md-4 col-xs-12 p-2 d-md-inline-block">
                  <div class="card">
                      <img class="card-img-top imgBands" src={news.urlToImage} alt="Card image cap"/>

                      <div class="card-body newsBody">
                        <h5 class="card-title">{news.title}</h5>
                        <p class="card-text">{news.content}</p>
                        <a href={news.url} target="_blank"><h1 className="btn btn-outline-dark w-50 m-auto albumButton ">Read Full</h1></a>
                      </div>
                      <div class="card-footer">
                        <small class="text-muted">Published At: {news.publishedAt.substring(0,10)} by | {news.source.name}</small>
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

export default News;
