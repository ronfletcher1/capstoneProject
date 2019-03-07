import React, { Component } from 'react';
import './App.css';
import './assets/devices.min.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
// import Main from './components/Main';
// import Wind from './components/Wind';
// import ZipCode from './components/ZipCode';
// import DistanceToHole from './components/DistanceToHole';
// import Navbar from './components/Navbar';
// import video from './components/GolfCouse.mp4';

class App extends Component {
  render() {
    return (
      <Router>
      <div class="marvel-device iphone5s green">
        <div class="top-bar"></div>
        <div class="sleep"></div>
        <div class="volume"></div>
        <div class="camera"></div>
        <div class="sensor"></div>
        <div class="speaker"></div>
        <div class="screen">
          <Navbar/>
        </div>
      <div class="home"></div>
      <div class="bottom-bar"></div>
    </div>
      </Router>
    );
  }
}

export default App;
