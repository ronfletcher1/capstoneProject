import React, { Component } from 'react';
import DeviceOrientation from 'react-device-orientation';
import './compass.css';

class Compass extends Component {

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
              {`${absolute}`}
              {`${alpha}`}
              {`${beta}`}
              {`${gamma}`}

              <div
                className="compass-circle"
                style={{ transform: `rotate(${alpha}deg)` }}
              >
                <div className="compass-arrow" />
              <div className="wind-arrow"
              style={{ transform: `rotate(${this.state.wind_direction + 100}deg)` }} />
              </div>
            </div>
          )}
        </DeviceOrientation>
      </div>
    );
  }
}

export default Compass;