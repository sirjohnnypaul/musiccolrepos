import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { bandsService } from '../services/bandsService';

class Bands extends Component {

  state = {
    bands: []
  }

  componentDidMount(){

    bandsService.getBandList().then(data => {
      const bands = data.data;
      this.setState({
        bands,
        filteredBands: bands
      });
    })
  }

  filterList(event){
    let updatedList = this.state.bands;
    
     if (event.target.value !== '') {
      updatedList = updatedList.filter(function(band){
        return band.name.toLowerCase().search(
          event.target.value.toLowerCase()) !== -1;
      });
    }
    
    this.setState({filteredBands: updatedList})
  }


  render() {
    return (
    this.state.bands.length > 0
    ?
    <div className="container m-auto page-load">

      <div className="ComponentTitle card-header mt-3 mb-3">
        <h2> 100 Best Bands Of All The Time </h2>
      </div>


           <div class="container p-3 mt-4 mb-4 bg-dark searchPanel">

          <h5 className="text-white mb-3">Search Here</h5>
          <div class="d-flex justify-content-center h-100">
            <div class="searchbar bg-light">

              <input class="search_input" type="text" name="" placeholder="Search..." onChange={this.filterList.bind(this)}/>
              <a href="#" class="search_icon"><i class="fas fa-search text-dark">&#x26B2;</i></a>
            </div>
          </div>
          </div>


        {this.state.filteredBands.map(band =>
            <div key={band.id} className="m-auto col-lg-5 col-sm-8 col-xs-12 p-2 d-lg-inline-block">
                <div class="card">
                    <img class="card-img-top imgBands" src={band.bandimageurl} alt="Card image cap"/>

                    <div class="card-body albumBody">
                      <h5 class="card-title">{band.name}</h5>
                      {band.bio.length > 300 ? 
                      (
                        <p class="card-text">{`${band.bio.substring(0,300)}...`}</p>
                      ) :
                      <p class="card-text">{band.bio}</p>
                      }
                      <Link to={'/banddetails/'+band.id+'/'+band.name}><h1 className="btn btn-outline-dark w-50 m-auto albumButton ">Band Details</h1></Link>
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

export default Bands;
