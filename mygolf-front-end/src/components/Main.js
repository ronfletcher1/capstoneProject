import React, { Component } from 'react';


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            speed: "",
            deg: ""      
        }
    }

    windSearch(e){
        console.log(e)
        e.preventDefault();
        console.log("form submitted")
    }

    render(){
        return (
            <div>
                <form onSubmit={this.windSearch}>
                    <input type="number" name="zipcode"/>
                    <input type="submit"/>
                </form>
            </div>
        )
        
    };
}


export default Main;


// const apiKey = '4f07010379e47f6a469c0dd30c83d3a6';

// const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=4f07010379e47f6a469c0dd30c83d3a6&zip="30328"`;
// function fetchWeather(){
//     fetch(weatherUrl)
//     .then(r => r.json())
//     console.log(r)
//     .then(windData)
//     .then(displayData)
// };

// function windData(wind) {
//     console.log(wind)
// }

