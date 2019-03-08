import React, { Component } from 'react';
// import ZipCode from './ZipCode';
import Wind from './Wind';
import DistanceToHole from './DistanceToHole';
<<<<<<< HEAD
import { Route } from "react-router-dom";
import Protips from './ProTips';
=======
import { Route }from "react-router-dom";
import ProTips from './ProTips';
>>>>>>> fd7002ba690f25e779eafa6eaa2b2b2cac442ea2



class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            speed: "",
            deg: "" ,
            gust: ""     
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
                {/* <ZipCode /> */}
                <DistanceToHole />
                <Wind />
                <Route exact path="/main/protips" component={ProTips} />
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