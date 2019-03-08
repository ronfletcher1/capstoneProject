<<<<<<< HEAD
import React, { Component } from 'react';
import DeviceOrientation from 'react-device-orientation';

import './compass.css';

class Compass extends Component {
=======
import React from 'react';
// import { render } from 'react-dom';
import 'react-compass/dist/react-compass.css';
 
class Compass extends React.Component {
    render() {
        return (
            <Compass direction={this.state.newDirection} />
        );
    }
}
>>>>>>> fd7002ba690f25e779eafa6eaa2b2b2cac442ea2

  constructor(props) {
		super(props);
		this.state = {
			wind_direction: 0
		}
	}

  componentDidUpdate = () => {
    if(this.props.windBlowing !== this.state.wind_direction){
    this.setState({
			wind_direction: this.props.windBlowing
		})}
  }
  render() {
    return (
      <div>
        <DeviceOrientation>
          {({ absolute, alpha, beta, gamma }) => (
            <div>
              {`Absolute: ${absolute}`}
              {`Alpha: ${alpha}`}
              {`Beta: ${beta}`}
              {`Gamma: ${gamma}`}

              <div
                className="compass-circle"
                style={{ transform: `rotate(${alpha}deg)` }}
              >
                <div className="compass-arrow" />
              <div className="wind-arrow"
              style={{ transform: `rotate(${this.state.wind_direction}deg)` }} />
              </div>
            </div>
          )}
        </DeviceOrientation>
      </div>
    );
  }
}

export default Compass;