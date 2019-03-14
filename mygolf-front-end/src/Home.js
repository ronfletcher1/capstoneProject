import React, { Component } from 'react'; 
class Home extends Component{

    // zipCode = (event) => {
    //     event.preventDefault()
    //     const zipcode = document.getElementById("searchTerm").value
    //     console.log(this.props)
    //     this.setState({
    //       zipcode: zipcode
    //     })
    //     console.log(this.state)
    //     console.log(this.props)
    //     this.props.history.push('/mygolfclubs')
    // }

    // handleSubmit = (zip) => {
    //     zipCode().then( () =>
    //         this.props.history.push("/mygolfclubs")
    //         )
    // }


    render(){
        return(
            <div className="container">
            <form onSubmit={this.props.zipcode}>
              <h4>Where Are You Playing Today?</h4><br></br>
              {/* <input id="searchTerm" type="number" name="zipcode" /> */}
              <div className="zipHolder">
                <input id="searchTerm" type="number" name="zipcode" />
                <h4>Enter Zip Code</h4>
              </div>
              <div className="buttonHolder">
                <input type="submit" align="right" value="submit" /> 
              </div>
              
            </form>
          </div>
        )
    }
}

export default Home;
