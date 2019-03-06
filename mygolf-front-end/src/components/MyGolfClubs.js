import React, { Component } from 'react';
import axios from 'axios';


const myGolfClubs = {
    driver: 240,
    hybrid: 200,
    twoIron: 190,
    threeIron: 185,
    fourIron: 180,
    fiveIron: 170,
    sixIron: 160,
    sevenIron: 150,
    eightIron: 140,
    nineIron: 130,
    pw:     125,
    gw:     115,
    sw:   95,
    Putter: null  
};

class MyGolfClubs extends Component {
	constructor() {
		super();
		this.state = {golfClubs: {}}
    }
    
    componentDidMount() {
        setTimeout(()=>{
            this.setState({golfClubs: myGolfClubs});
        }, 1000);
        console.log(myGolfClubs);
    }

    distanceToHole = (distance)=>{
        if (distance > 225) 
        return myGolfClubs.driver; 
        if (distance > 190) 
        return myGolfClubs.hybrid; 
        if (distance > 185) 
        return myGolfClubs.twoIron; 
        if (distance > 180) 
        return myGolfClubs.threeIron; 
        if (distance > 175) 
        return myGolfClubs.fourIron; 
        if (distance > 165) 
        return myGolfClubs.fiveIron; 
        if (distance > 155) 
        return myGolfClubs.sixIron; 
        if (distance > 145) 
        return myGolfClubs.sevenIron; 
        if (distance > 135) 
        return myGolfClubs.eightIron; 
        if (distance > 125) 
        return myGolfClubs.nineIron; 
        if (distance > 120) 
        return myGolfClubs.pw; 
        if (distance > 95) 
        return myGolfClubs.gw; 
        if (distance > 85) 
        return myGolfClubs.sw;  
    }
    
    render() {
		let golfShot = this.distanceToHole(this.distance)
		return (
			<div>
				<div>
                <form onSubmit={this.distance}>
                    <h1>Distance</h1>
                    <input id="searchTerm" type="number" name="zipcode"/>
                    <button type="submit"className="btn"/>
                </form>
            </div>
				<h1>Golf Clubs</h1>
				<h1>Wind Adjuster<br></br>{this.state.temp}</h1>
				<h1>Aim<br></br>{this.distance}</h1>
				<h1>Distance to Hole<br></br>{this.state.driver}</h1>
				<h1>Club Selection<br></br>{this.state.nineIron}</h1>
			</div>
		);
    }
} 
    export default MyGolfClubs;

// const myGolfClubs = {
//     driver: 240,
//     hybrid: 200,
//     twoIron: 190,
//     threeIron: 185,
//     fourIron: 180,
//     fiveIron: 170,
//     sixIron: 160,
//     sevenIron: 150,
//     eightIron: 140,
//     nineIron: 130,
//     pw:     125,
//     gw:     115,
//     sw:   95,
//     Putter: null  
// };
// console.log(myGolfClubs);

// this function adjust club max distances based on the difference in 
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


