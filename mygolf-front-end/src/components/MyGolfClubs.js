import React, { Component } from 'react';
// import axios from 'axios';
import Wind from './Wind'

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
        } else if (distance > 80) { 
        return myGolfClubs['95']; 
        } 
    }
    
    render() {
        let golfShot = this.distanceToHole(this.state.shot_distance)
        console.log(golfShot)
		return (
			<div>
                < Wind />
			<div>
                <form onSubmit={this.distance}>
                    <h1>Distance</h1>
                    <input id="searchTerm" type="number" name="distance"/>
                    <button type="submit"className="btn"/>
                </form>
            </div>
            <div>
				<h1>Golf Clubs</h1>
				{/* <h1>Wind Adjuster<br></br>{this.state.temp}</h1> */}
				<h1>Distance<br></br>{this.distanceToHole}</h1>
				<h1>Distance to Hole<br></br>{golfShot}</h1>
				<h1>Club Selection<br></br>{this.state.distanceToHole}</h1>
			</div>
            </div>
		);
    }
} 
export default MyGolfClubs;



{/* // this function adjust club max distances based on the difference in 
// in elevation from the base elevation
// let currentElevation = 1093
// let newElevation = 4000
// function clubAdjust(elevation){
//     if (newElevation > currentElevation)
//     return myGolgclubs + 10;
// };
// console.log(myGolfClubs)

// this function calculates the new distance based on the wind direction
// and wind speed
// let windDirection = x;
// let windSpeed = z;
// function windDistance(windDirection, windSpeed){
//     if(windDirection = N && windSpeed > 3)
//     return windDistance;
// }

// console.log(windDirection(300))

// this function selects the appropriate club to use based on the new
// distance
// let windDistance = 10
// function clubSelector(windDistance){
//     if(windDistance >= 5)
//     return myGolfClubs + 5
//     if(windDistance >= 10)
//     return myGolfClubs + 10
//     if(windDistance >= 15)
//     return myGolfClubs + 15
//     if(windDistance >= 20)
//     return myGolfClubs + 20
//     if(windDistance >= 25)
//     return myGolfClubs + 25
//     if(windDistance >= 30)
//     return myGolfClubs + 30
//     if(windDistance >= 35)
//     return myGolfClubs + 35
// }

 */}
