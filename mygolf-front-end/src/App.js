import React, { Component } from 'react';
import './App.css';
import './assets/devices.min.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Main from './components/Main';
import Wind from './components/Wind';
import ZipCode from './components/ZipCode';
import DistanceToHole from './components/DistanceToHole';
import Navbar from './components/Navbar'
import MyGolfClubs from './components/MyGolfClubs'
// import video from './components/GolfCouse.mp4';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/navbar" componet={Navbar} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/distancetohole" component={DistanceToHole} />
        <Route exact path="/mygolfclubs" component={MyGolfClubs} />
        </div>
      </Router>
    );
  }
}

export default App;
