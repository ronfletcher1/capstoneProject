import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Main from './components/Main';
import Wind from './components/Wind';
import ZipCode from './components/ZipCode';
import DistanceToHole from './components/DistanceToHole';
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="iphone">
          <div className="iphone-top"></div>
          <div className="top-bar">
            <div className="iphone-screen">
              <Route exact path="/navbar" componet={Navbar} />
              <Route exact path="/main" component={Main} />
              <Route exact path="/wind" component={Wind} />
              <Route exact path="/zipcode" component={ZipCode} />
              <Route exact path="/distancetohole" component={DistanceToHole} />
            </div>
          </div>
          <div className="bottom-bar"></div>
          <div className="iphone-bottom"></div>
        </div>
      </Router>
    );
  }
}

export default App;
