import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, 
Route } from 'react-router-dom';
import Main from './components/Main';
import Wind from './components/Wind';
// import DistanceToHole from './components/DistanceToHole';
// import ZipCode from './components/ZipCode';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

          <Route exact path="/main" component={Main} />
          <Route exact path="/weather" component={Wind} />
          {/* <Route exact path="/distancetohole" component={DistanceToHole} /> */}
          {/* <Route exact path="/zipcode" component={ZipCode} /> */}
      </div>
      </Router>
    );
  }
}

export default App;
