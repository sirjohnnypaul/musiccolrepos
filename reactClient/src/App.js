import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Albums from './components/Albums';
import AlbumDetails from './components/AlbumDetails';
import Tracks from './components/Tracks';
import Home from './components/Home';
import News from './components/News';
import Bands from './components/Bands';
import BandDetails from './components/BandDetails';
//import './App.css';

class App extends Component {

  render() {
    return (
           
      <BrowserRouter>

        <div className="App">
            <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/albums' component={Albums} />
                    <Route path='/details/:album_id' component={AlbumDetails} />
                    <Route path='/tracks' component={Tracks} />
                    <Route path='/news' component={News} />
                    <Route path='/bands' component={Bands} />
                    <Route path='/banddetails/:band_id/:band_name' component={BandDetails} />
                </Switch>  
        </div>

      </BrowserRouter>



    );
  }
}

export default App;
