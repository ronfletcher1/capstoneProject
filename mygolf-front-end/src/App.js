import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, 
Route } from 'react-router-dom';
import Main from './components/Main';
import Wind from './components/Wind';
import ZipCode from './components/ZipCode';
import DistanceToHole from './components/DistanceToHole';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

          <Route exact path="/main" component={Main} />
          <Route exact path="/wind" component={Wind} />
          <Route exact path="/zipcode" component={ZipCode} />
          <Route exact path="/distancetohole" component={DistanceToHole} />
      </div>
      </Router>
    );
  }
}

export default App;
