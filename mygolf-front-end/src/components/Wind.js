import React, { Component } from 'react';
import axios from 'axios';
import Compass from './Compass';

class Wind extends Component {
	constructor(props) {
		super(props);
		this.state = {
			icon: "",
			wind_speed: "",
			wind_direction: 10,
			wind_gust: "",
			zip_code:""
		}
	}
  
	getData = zipCode=>{
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

	// componentDidMount() {
	// 	const zipCode = 
	// 	let url = `http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=${zipCode},us&appid=482c145ce8edf1d69ea5168f9d06460c`;
    //     const axiosPromise = axios.get(url);
    //     axiosPromise.then((weatherData) =>{
	// 		console.log(weatherData);
	// 		this.setState({
	// 			temp: weatherData.data.main.temp,
	// 			wind_speed: weatherData.data.wind.speed,
	// 			wind_direction: weatherData.data.wind.deg,
	// 			wind_gust: weatherData.data.wind.gust,
	// 		})
	// 	});
	// }
	zipCode = (e)=>{
		e.preventDefault()
		console.log(e.target.zipcode.value)
		this.setState({
			zip_code: e.target.zipcode.value	
		})
		this.getData(e.target.zipcode.value)
	}

	windDirection = (degree) => {
		console.log(degree)
		if ((degree >= 350 && degree <= 360) ||
			(degree >= 0 && degree <= 10))
			return "N";
		if (degree >= 20 && degree <= 30)
			return "NNE";
		if (degree >= 40 && degree <= 50)
			return "NE"
		if (degree >= 60 && degree <= 70)
			return "ENE"
		if (degree >= 80 && degree <= 100)
			return "E"
		if (degree >= 110 && degree <= 120)
			return "ESE"
		if (degree >= 130 && degree <= 140)
			return "SE"
		if (degree >= 150 && degree <= 160)
			return "SSE"
		if (degree >= 170 && degree <= 190)
			return "S"
		if (degree >= 200 && degree <= 210)
			return "SSW"
		if (degree >= 220 && degree <= 230)
			return "SW"
		if (degree >= 240 && degree <= 250)
			return "WSW"
		if (degree >= 260 && degree <= 280)
			return "W"
		if (degree >= 290 && degree <= 300)
			return "WNW"
		if (degree >= 310 && degree <= 320)
			return "NW"
		if (degree >= 330 && degree <= 340)
			return "NNW"
  }
  
  facingDirection = (faceDegree) => {
	console.log(faceDegree)
	if ((faceDegree >= 350 && faceDegree <= 360) ||
		(faceDegree >= 0 && faceDegree <= 10))
		return "N";
	if (faceDegree >= 20 && faceDegree <= 30)
		return "NNE";
	if (faceDegree >= 40 && faceDegree <= 50)
		return "NE"
	if (faceDegree >= 60 && faceDegree <= 70)
		return "ENE"
	if (faceDegree >= 80 && faceDegree <= 100)
		return "E"
	if (faceDegree >= 110 && faceDegree <= 120)
		return "ESE"
	if (faceDegree >= 130 && faceDegree <= 140)
		return "SE"
	if (faceDegree >= 150 && faceDegree <= 160)
		return "SSE"
	if (faceDegree >= 170 && faceDegree <= 190)
		return "S"
	if (faceDegree >= 200 && faceDegree <= 210)
		return "SSW"
	if (faceDegree >= 220 && faceDegree <= 230)
		return "SW"
	if (faceDegree >= 240 && faceDegree <= 250)
		return "WSW"
	if (faceDegree >= 260 && faceDegree <= 280)
		return "W"
	if (faceDegree >= 290 && faceDegree <= 300)
		return "WNW"
	if (faceDegree >= 310 && faceDegree <= 320)
		return "NW"
	if (faceDegree >= 330 && faceDegree <= 340)
		return "NNW"
}
	
	golfWindDirection = (windDirection, faceDegree)=>{
			console.log(windDirection)
		if (windDirection === faceDegree)
			return "tailWind"
		}
	

	render() {
		let golfWind = this.windDirection(this.state.wind_direction)
		let golfWindDirection = this.golfWindDirection(golfWind, "SSE")
		return (
			<div>
				<Compass windBlowing={this.state.wind_direction}/>
				<div>
                <form onSubmit={this.zipCode}>
                    <h4>Zip Code</h4>
                    <input id="searchTerm" type="number" name="zipcode"/>
                </form>
            </div>
				<h1>Golf Conditions</h1>
				<h1>Current Temp<br></br>{this.state.temp}</h1>
				<h1>Wind Speed<br></br>{this.state.wind_speed}</h1>
				<h1>Wind Blowing From<br></br>{golfWind}</h1>
				<h1>Golf Wind Type<br></br>{golfWindDirection}</h1>
				<h1>Wind Gust<br></br>{this.state.wind_gust}</h1>
			</div>
		);
	}

}

export default Wind;
