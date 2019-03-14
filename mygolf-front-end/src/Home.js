import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

// import {withRouter} from 'react-router-dom';



class Home extends Component{

  // constructor() {
	// 	super();
  //       // this.state = {
  //       //     zip_code: ""
  //       // }
  //   }

   // Zip code event used to get the value of the user input of the date
	zipCode = (e)=>{
		e.preventDefault()
		// console.log(e.target.zipcode.value)
      this.setState({
        zipcode: e.target.zipcode.value	
      })
      console.log(this.props)
      this.props.history.push('/mygolfclubs'); 
    // this.getData(e.target.zipcode.value)
	} 

    


    render(){
        return(
            <div className="container">
            <form onSubmit={this.zipCode}>
              <h4>Where Are You Playing Today?</h4><br></br>
              <Link to="/myGolfClubs">Click here...</Link>
              {/* <input id="searchTerm" type="number" name="zipcode" /> */}
              <div className="zipHolder">
                <input id="searchTerm" type="number" name="zipcode" />
                <h4>Enter Zip Code</h4>
              </div>
              <div className="buttonHolder">
                <input 
                  type="submit" 
                  align="right" 
                  value="submit" 
                  // onClick={this.handleSubmit} 
                  // zipcode={this.zipCode}
                /> 
              </div>
              
            </form>
          </div>
        )
    }
}

export default Home;
