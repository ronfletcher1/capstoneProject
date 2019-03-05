import React, { Component } from 'react';
import axios from 'axios';


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
		var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30328,us&appid=482c145ce8edf1d69ea5168f9d06460c';
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

	render(){
		return(
			<div>
				<h1>Golf Conditions</h1>
				<h1>Current Temp<br></br>{this.state.temp}</h1>
				<h1>Wind Speed<br></br>{this.state.wind_speed}</h1>
				<h1>Wind Direction<br></br>{this.state.wind_direction}</h1>
				<h1>Wind Gust<br></br>{this.state.wind_gust}</h1>
			</div>
		);
	}
}

export default Wind;
