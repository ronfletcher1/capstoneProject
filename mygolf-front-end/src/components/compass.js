import React from 'react';
// import { render } from 'react-dom';
import 'react-compass/dist/react-compass.css';
 
class Compass extends React.Component {
    render() {
        return (
            <Compass direction={this.state.newDirection} />
        );
    }
}


export default Compass;