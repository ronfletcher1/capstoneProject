import React, { Component } from 'react';
import axios from 'axios';
import ZipCode from 'ZipCode'



class Wind extends Component {
	constructor(props) {
		super(props);
		this.state={
			icon: "",
			wind_speed: "",
			wind_direction: "",
			wind_gust: "",		
		}
	}

	componentDidMount() {
		var url = `http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=${zipCode},us&appid=482c145ce8edf1d69ea5168f9d06460c`;
        const axiosPromise = axios.get(url);
        axiosPromise.then((weatherData) =>{
			console.log(weatherData);
			
            
			this.setState({
				temp: weatherData.data.main.temp,
				wind_speed: weatherData.data.wind.speed,
				wind_direction: weatherData.data.wind.deg,
				wind_gust: weatherData.data.wind.gust,
			})
		});
	}
	windSearch(e){
		console.log(e)
	   	e.preventDefault();
	   	console.log("form submitted");
	   	const zipCode = document.getElementById("searchTerm").value;
	   	const url = `http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=${zipCode},us&appid=482c145ce8edf1d69ea5168f9d06460c`;
   }

	windDirection = (degree)=>{
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

	render(){
		let golfWind = this.windDirection(this.state.wind_direction)
		return(
			<div>
				<h1>Golf Conditions</h1>
				<h1>Current Temp<br></br>{this.state.temp}</h1>
				<h1>Wind Speed<br></br>{this.state.wind_speed}</h1>
				<h1>Wind Blowing From<br></br>{golfWind}</h1>
				<h1>Wind Gust<br></br>{this.state.wind_gust}</h1>
			</div>
		);
	}
}

export default Wind;
