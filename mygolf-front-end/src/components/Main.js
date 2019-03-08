import React, { Component } from 'react';
// import ZipCode from './ZipCode';
import Wind from './Wind';
import DistanceToHole from './DistanceToHole';
<<<<<<< HEAD
import { Route } from "react-router-dom";
=======
import { Route }from "react-router-dom";
>>>>>>> 6866bfc3fd458ae16f2bc1421e488145cf22c775
import Protips from './ProTips';



class Main extends Component {
<<<<<<< HEAD
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
               <Route exact path="/main/protips" component={Protips} />
           </div>
       )

   };
=======
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
                <Route exact path="/main/protips" component={Protips} />
            </div>
        )
        
    };
>>>>>>> 6866bfc3fd458ae16f2bc1421e488145cf22c775
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