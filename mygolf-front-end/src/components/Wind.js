import React, { Component } from 'react';
import axios from 'axios';
import Compass from './Compass';
import golfWindDirectionfunction from './GolfWindDirection'


class Wind extends Component {
	constructor(props) {
		super(props);
		this.state = {
			icon: "",
			wind_speed: "",
			wind_direction: "",
			wind_gust: "",
			zip_code:"",
			golfWind_direction:"",
			wind_shot: ""
		}
	}

	componentDidMount = () => {
		// getData = (zipCode) =>{
			let zipCode = this.props.zipcode
			console.log(zipCode)
			const url = `http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=${zipCode},us&appid=482c145ce8edf1d69ea5168f9d06460c`;
			const axiosPromise = axios.get(url)
			axiosPromise.then((weatherData) => {
				console.log('wind_direction:', weatherData.data.wind.deg)
				console.log(weatherData);
				this.setState({
					temp: weatherData.data.main.temp,
					wind_speed: weatherData.data.wind.speed,
					wind_direction: weatherData.data.wind.deg,
					wind_gust: weatherData.data.wind.gust,
				})
			
			});
	
			 
	 }


	// weather data api from openweather
	
	// // Zip code event used to get the value of the user input of the date
	// zipCode = (e)=>{
	// 	e.preventDefault()
	// 	console.log(e.target.zipcode.value)
	// 	this.setState({
	// 		zip_code: e.target.zipcode.value	
	// 	})
	// 	this.getData(e.target.zipcode.value)
	// }

	// wind shot calculates the the distance based on the wind speed,
	// wind direction, and distance to the hole
	
	windShot = (distance, golfWindDirection, speed) => {
		// let golfWindDirection = "headWind"
		// let distance = 145
		// this.setState({
		// 	wind_shot: windShot
		// })
		// let speed = this.state.wind_speed;
		console.log(distance)
		console.log(golfWindDirection)
		console.log(speed)

		// wind speed over 40 mph
		if (speed >= 40)
			return "GO HOME";
			
		// wind speed over 35 mph
		if ((speed >= 35) && (golfWindDirection === "tailWind"))
			return distance - (distance * .05);
		if ((speed >= 35) && (golfWindDirection === "headWind"))
			return distance + (distance * .1);
		if (((speed >= 35) && (golfWindDirection === "quarterWindLHW")) ||
		   ((speed >= 35) && (golfWindDirection === "quarterWindRHW")))
			return distance + (distance * .07);
		if (((speed >= 35) && (golfWindDirection === "quarterWindLTW")) ||
		   ((speed >= 35) && (golfWindDirection === "quarterWindRTW")))
			return distance - (distance * .035);
		console.log("step 1")

		// wind speed over 30 mph
		if ((speed >= 30) && (golfWindDirection === "tailWind"))
			return distance - (distance * .05);
		if ((speed >= 30) && (golfWindDirection === "headWind"))
			return distance + (distance * .1);
		if (((speed >= 30) && (golfWindDirection === "quarterWindLHW")) ||
		   ((speed >= 30) && (golfWindDirection === "quarterWindRHW")))
			return distance + (distance * .07);
		if (((speed >= 30) && (golfWindDirection === "quarterWindLTW")) ||
		   ((speed >= 30) && (golfWindDirection === "quarterWindRTW")))
			return distance - (distance * .035);
			console.log("step 2")

		// wind speed over 25 mph	
		if ((speed >= 25) && (golfWindDirection === "tailWind"))
			return distance - (distance * .05);
		if ((speed >= 25) && (golfWindDirection === "headWind"))
			return distance + (distance * .1);
		if (((speed >= 25) && (golfWindDirection === "quarterWindLHW")) ||
		   ((speed >= 25) && (golfWindDirection === "quarterWindRHW")))
			return distance + (distance * .07);
		if (((speed >= 25) && (golfWindDirection === "quarterWindLTW")) ||
		   ((speed >= 25) && (golfWindDirection === "quarterWindRTW")))
			return distance - (distance * .035);
			console.log("step 3")

	   // wind speed over 20 mph
		if ((speed >= 20) && (golfWindDirection === "headWind"))
			return distance + (distance * .1);
		if ((speed >= 20) && (golfWindDirection === "tailWind"))
			return distance - (distance * .05);
		if (((speed >= 20) && (golfWindDirection === "quarterWindLHW")) ||
		   ((speed >= 20) && (golfWindDirection === "quarterWindRHW")))
			return distance + (distance * .07);
		if (((speed >= 20) && (golfWindDirection === "quarterWindLTW")) ||
		   ((speed >= 20) && (golfWindDirection === "quarterWindRTW")))
			return distance - (distance * .035);	
			console.log("step 4")

		// wind speed over 15 mph
		if ((speed >= 15) && (golfWindDirection === "tailWind"))
			return distance - (distance * .05);
		if ((speed >= 15) && (golfWindDirection === "headWind"))
			return distance + (distance * .1);
		if (((speed >= 15) && (golfWindDirection === "quarterWindLHW")) ||
		   ((speed >= 15) && (golfWindDirection === "quarterWindRHW")))
			return distance + (distance * .07);
		if (((speed >= 15) && (golfWindDirection === "quarterWindLTW")) ||
		   ((speed >= 15) && (golfWindDirection === "quarterWindRTW")))
			return distance - (distance * .035);
		console.log("step 5")

		// wind speed over 10 mph
		if ((speed >= 10) && (golfWindDirection === "tailWind"))
			return distance - (distance * .05);
		if ((speed >= 10) && (golfWindDirection === "headWind"))
			return distance + (distance * .1);
		if (((speed >= 10) && (golfWindDirection === "quarterWindLHW")) ||
		   ((speed >= 10) && (golfWindDirection === "quarterWindRHW")))
			return distance + (distance * .07);
		if (((speed >= 10) && (golfWindDirection === "quarterWindLTW")) ||
		   ((speed >= 10) && (golfWindDirection === "quarterWindRTW")))
			return distance - (distance * .035);
			console.log("step 6")

		// wind speed over 5 mph
		if ((speed >= 5) && (golfWindDirection === "tailWind")){
		console.log(distance - (distance * .05))
			return distance - (distance * .05);
		}
		if ((speed >= 5) && (golfWindDirection === "headWind"))
			return distance + (distance * .1);
		if (((speed >= 5) && (golfWindDirection === "quarterWindLHW")) ||
		   ((speed >= 5) && (golfWindDirection === "quarterWindRHW")))
			return distance + (distance * .07);
		if (((speed >= 5) && (golfWindDirection === "quarterWindLTW")) ||
			((speed >= 5) && (golfWindDirection === "quarterWindRTW"))){
				console.log(distance - (distance * .035))
				return (distance - (distance * .035));
			}
				
			console.log("step 7")
		// wind speed over 2.5 mph
		if ((speed >= 2.5) && (golfWindDirection === "tailWind"))
			return distance - (distance * .05);
		if ((speed >= 2.5) && (golfWindDirection === "headWind"))
			return distance + (distance * .1);
		if (((speed >= 2.5) && (golfWindDirection === "quarterWindLHW")) ||
		   ((speed >= 2.5) && (golfWindDirection === "quarterWindRHW")))
			return distance + (distance * .07);		
		if (((speed >= 2.5) && (golfWindDirection === "quarterWindLTW")) ||
		   ((speed >= 2.5) && (golfWindDirection === "quarterWindRTW")))
			return distance - (distance * .035);
		// if (((speed >= 35) && (golfWindDirection === "crossWindL")) ||
		//    ((speed >= 35) && (golfWindDirection === "crossWindR")))
		// 	return distance + (distance * .035);
		return distance
	}

	// wind Direction converts the wind degree into 8 directional 
	// coordinates (N, NE, E, SE, S, SW, W, NW)
	windDirection = (degree) => {
		console.log(degree)
		if ((degree >= 340 && degree <= 360) ||
			(degree >= 0 && degree <= 20))
			return "N";
		if (degree > 20 && degree <= 70)
			return "NE";
		if (degree > 70 && degree <= 110)
			return "E"
		if (degree > 110 && degree <= 160)
			return "SE"
		if (degree > 160 && degree <= 200)
			return "S"
		if (degree > 200 && degree <= 250)
			return "SW"
		if (degree > 250 && degree <= 290)
			return "W"
		if (degree > 290 && degree <= 340)
			return "NW"		
  		}
// facing direction is the direction you are facing towards the hole
// expressed in degrees 
	
  facingDirection = (faceDegree) => {
	// let faceDegree = 360;
	console.log(faceDegree)
		if ((faceDegree >= 340 && faceDegree <= 360) ||
			(faceDegree >= 0 && faceDegree <= 20))
			return "N";
		if (faceDegree > 20 && faceDegree <= 70)
			return "NE";
		if (faceDegree > 70 && faceDegree <= 110)
			return "E"
		if (faceDegree > 110 && faceDegree <= 160)
			return "SE"
		if (faceDegree > 160 && faceDegree <= 200)
			return "S"
		if (faceDegree > 200 && faceDegree <= 250)
			return "SW"
		if (faceDegree > 250 && faceDegree <= 290)
			return "W"
		if (faceDegree > 290 && faceDegree <= 340)
			return "NW"
		}
		

	render() {
		// let speed = 14.1;
		// let distance = 145;
		console.log(this.props)
		let golfWind = this.windDirection(this.state.wind_direction)
		console.log(golfWind)
		let golfWindDirection = golfWindDirectionfunction(golfWind, this.facingDirection(360))
		console.log(golfWindDirection)
		let windFactor = this.windShot(Number(this.props.distance), golfWindDirection, this.state.wind_speed)
		console.log(windFactor)
		const divStyle ={
			color: 'blue',
			backgrundImage: 'url("https://i.pinimg.com/originals/f2/56/fa/f256fa53f4a71faeafdc7d83ece05548.jpg")',
		}
		return (
			<div>
				

			<div className="container">

				{/* <div className="zipcode">
					<form onSubmit={this.zipCode}>
						<h4>Zip Code</h4>
						<input id="searchTerm" align="right" type="number" name="zipcode"/>
					</form>
            </div> */}

				<div className="container">
					<div className="jumbotron" style={divStyle}>
						<Compass windBlowing={this.state.wind_direction}/>
					</div>
				</div>

			</div>
			<br></br>
			<br></br>
				
				<div className="container">
					
					<div className="jumbotron">
					<h1>Golf Conditions</h1>
					<div className="container-fluid">
						<div className="row-fluid">

						<div className="col-md-2">
							<h1>Current Temp<br></br>{this.state.temp}</h1>
						</div>
						<div className="col-md-2">
							<h1>Wind Speed<br></br>{this.state.wind_speed}</h1>
						</div>
						<div className="col-md-2">
							<h1>Wind Gust<br></br>{this.state.wind_gust}</h1>
						</div>
						<div className="col-md-2">
							<h1>Wind Blowing From<br></br>{golfWind}</h1>
						</div>
						<div className="col-md-2">
							<h1>Golf Wind Type<br></br>{golfWindDirection}</h1>
						</div>
						<div className="col-md-2">
							<h1>Plays Like<br></br>{windFactor}</h1>
						</div>
						</div>
						</div>
					</div>
				</div>
						{/* <h1>Wind Adjuster<br></br>{windFactor}</h1> */}
			</div>
			);
		}
}
	
export default Wind;
			