import React, { Component } from 'react';
import './App.css';
import './assets/devices.min.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Main from './components/Main';
// import Wind from './components/Wind';
// import ZipCode from './components/ZipCode';
import DistanceToHole from './components/DistanceToHole';
import Navbar from './components/Navbar'
import Compass from 'react-Compass';
import 'react-compass/dist/react-compass.css';
import MyGolfClubs from './components/MyGolfClubs'
import ProTips from './components/ProTips'
// import video from './componnts/GolfCouse.mp4';
class App extends Component {
 render() {
   return (
     <Router>
<div>
     <div className="App">

         <Route exact path="/navbar" component={Navbar} />
         <Route path="/main" component={Main} />
         {/* <Route exact path="/wind" component={Wind} /> */}
         {/* <Route exact path="/zipcode" component={ZipCode} /> */}
         <Route exact path="/mygolfclubs" component={MyGolfClubs} />
         <Route exact path="/distancetohole" component={DistanceToHole} />
     </div>
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
</div>
     </Router>
   );
 }
}

export default App;
