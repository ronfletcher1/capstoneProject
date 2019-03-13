import React, {Component} from 'react';

class About extends Component{
    render(){
        
        return(
    <div className="about">
        <div className="container">
            <header>About</header>
               <li><h4>MyColfConditions</h4></li>
                <br></br>MyColfConditions is an app that provides the user with updated 
                weather data and then suggest the club to use based on the  
                weather conditions.<br></br>

                <br></br>Users must first set up their clubs and max distances before playing.
                Next, the user will input the zip code for the course they will be
                playing.<br></br>  
                
                <br></br>After entering the zip code, MyGolfConditions will display the current weather 
                conditions during your round as follows:<br></br>
                <li>Current Temperature</li>
                <li>Wind Speed</li>
                <li>Wind Gust Speed</li>
                <li>Direction the wind is blowing from</li>
                <ol>Golf wind type:</ol>
                    <li>Headwind - wind is blowing in your face </li>
                    <li>Tailwind - wind is blowing the direction you are facing</li>
                    <li>Crosswind - wind is blowing from left to rignt or right to left</li>
                    <li>Quarterwind - wind is blowing in your face or away from you 
                    at 45 or 315 degrees</li><br></br>

                <br></br>During the round, on the approch shot or a par 3 hole, the user may
                input the distance to the hole.  The app will calculate what the distance
                is playing like based on the wind speed and golf wind type.  The app
                will suggest the best club to use based on the what the shot is playing
                like.
        </div>
    </div>
        )
    }
}

export default About;




