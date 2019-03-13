import React, { Component } from 'react';

import Wind from './Wind'

// golf club set up; max distance and type
const myGolfClubs = {
    240: "Driver",
    200: "Hybrid",
    190: "Two Iron",
    185: "Three Iron",
    180: "Four Iron",
    170: "Five Iron",
    160: "Six Iron",
    150: "Seven Iron",
    140: "Eight Iron",
    130: "Nine Iron",
    125: "Pitching Wedge",
    115: "Gap Wedge",
    95:  "Sand Wedge"
};

class MyGolfClubs extends Component {
	constructor() {
		super();
        this.state = {
            golfClubs: {},
            shot_distance: ""
        }
    }
    
    componentDidMount() {
        setTimeout(()=>{
            this.setState({golfClubs: myGolfClubs});
        }, 1000);
        console.log(myGolfClubs);
    }

    distance = (e)=>{
		e.preventDefault()
		console.log(e.target.distance.value)
		this.setState({
			shot_distance: e.target.distance.value	
        })

    }
    // calculates the club to use for the distance entered
    distanceToHole = (distance)=>{
        console.log(distance)
        
        if (distance > 225) {
        return myGolfClubs['240']; 
        } else if (distance > 190) { 
        return myGolfClubs['200']; 
        } else if (distance > 185) { 
        return myGolfClubs['190']; 
        } else if (distance > 180) { 
        return myGolfClubs['185']; 
        } else if (distance > 170) { 
        return myGolfClubs['180']; 
        } else if (distance > 160) { 
        return myGolfClubs['170']; 
        } else if (distance > 150) { 
        return myGolfClubs['160']; 
        } else if (distance > 140) { 
        return myGolfClubs['150']; 
        } else if (distance > 130) { 
        return myGolfClubs['140']; 
        } else if (distance > 125) { 
        return myGolfClubs['130']; 
        } else if (distance > 115) { 
        return myGolfClubs['125']; 
        } else if (distance > 95) { 
        return myGolfClubs['115']; 
        } else if (distance > 10) { 
        return myGolfClubs['95']; 
        } 
    }
    
    render() {
        let golfShot = this.distanceToHole(this.state.shot_distance)
        console.log(golfShot)
		return (
			<div>
                < Wind distance={this.state.shot_distance} />
			<div>
                <form onSubmit={this.distance}>
                    <h4>Distance</h4>
                    <input id="searchTerm" type="number" name="distance"/>
                </form>
            </div>
            <div>
				{/* <h4>Golf Clubs</h4> */}
				{/* <h1>Wind Adjuster<br></br>{this.state.temp}</h1> */}
				<h1>Distance<br></br>{golfShot}</h1>
				<h1>Distance to Hole<br></br>{golfShot}</h1>
				<h1>Club Selection<br></br>{golfShot}</h1>
			</div>
            </div>
		);
    }
} 
export default MyGolfClubs;



