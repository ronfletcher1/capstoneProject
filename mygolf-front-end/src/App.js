import React, { Component } from 'react';
import './App.css';
import './assets/devices.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
// import Wind from './components/Wind';
// import ZipCode from './components/ZipCode';
// import DistanceToHole from './components/DistanceToHole';
import Navbar from './components/Navbar'
// import Compass from 'react-Compass';
// import 'react-compass/dist/react-compass.css';
import MyGolfClubs from './components/MyGolfClubs'
import ProTips from './components/ProTips'
import './assets/devices.min.css'
import Contact from './components/Contact';
import rules from './rules';
import Accordion from './Accordion';
import Home from './Home';
import About from './components/About';
// import Compass from './components/compass';
// import video from './componnts/GolfCouse.mp4';
class App extends Component {
  constructor() {
    super()
    this.state = {
      zipcode: 0
    }
  }
  zipCode = (event) => {
    event.preventDefault()
    const zipcode = document.getElementById("searchTerm").value
    console.log(this.props)
    this.setState({
      zipcode: zipcode
    })
    console.log(this.state)
    console.log(this.props)
    this.props.history.push('/mygolfclubs')

  }
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          {/* <Route exact path="/navbar" component={Navbar} /> */}
          <Route exact path="/" component={Home} zipcode={this.state.zipcode} />
          <Route exact path="/mygolfclubs" component={MyGolfClubs} />
          <Route exact path="/protips" component={ProTips} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/main" component={Main} />
          {/* <Route exact path="/" render={<Home zipcode={this.zipcode} />} /> */}
          {/* <Accordion rules={rules} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
