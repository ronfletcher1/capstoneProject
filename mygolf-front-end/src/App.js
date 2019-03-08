import React, { Component } from 'react';
import './App.css';
import './assets/devices.min.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Main from './components/Main';
// import Wind from './components/Wind';
// import ZipCode from './components/ZipCode';
import DistanceToHole from './components/DistanceToHole';
import Navbar from './components/Navbar'
// import Compass from 'react-Compass';
// import 'react-compass/dist/react-compass.css';
import MyGolfClubs from './components/MyGolfClubs'
import ProTips from './components/ProTips'
import './assets/devices.min.css'
import AboutMgc from './components/AboutMgc';
import Contact from './components/Contact';
// import Compass from './components/compass';
// import video from './componnts/GolfCouse.mp4';
class App extends Component {
 render() {
   return (
     <Router>
    <div>
     <div className="marvel-device iphone5s green">
      <div className="screen">
          <Route exact path="/navbar" component={Navbar} />
          <Route path="/main" component={Main} />
          {/* <Route exact path="/wind" component={Wind} /> */}
          {/* <Route exact path="/zipcode" component={ZipCode} /> */}
          <Route exact path="/mygolfclubs" component={MyGolfClubs} />
          <Route exact path="/distancetohole" component={DistanceToHole} />
          <Route exact path="/protips" component={ProTips} />
          <Route exact path="/aboutmgc" component={AboutMgc} />
          <Route exact path="/contact" component={Contact} />
      </div>
      </div>
      <div className="marvel-device iphone5s green">
        <div className="top-bar"></div>
        <div className="sleep"></div>
        <div className="volume"></div>
        <div className="camera"></div>
        <div className="sensor"></div>
        <div className="speaker"></div>
        </div>
      <div className="home"></div>
      <div className="bottom-bar"></div>
    </div>
     </Router>
   );
 }
}

export default App;
