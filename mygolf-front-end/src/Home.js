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
              <h4>Enter Your Playing Location</h4>
              <input id="searchTerm" type="number" name="zipcode" />
              <input type="submit" value="submit" /> 
            </form>
          </div>
        )
    }
}

export default Home;
