import React, { Component } from 'react';
import './Navbar.css';
import ProTips from './ProTips';
import { Link } from 'react-router-dom'

 class Navbar extends Component{
   constructor(){
     super();
     this.state={
       isCollapsed: true
     }
   }
   openMenu = e => {
     this.setState({
       isCollapsed: !this.state.isCollapsed
     })
   }
   render(){
     return(
       <nav className="navbar navbar-inverse black">
              <div className="container-fluid">
                <div className="navbar-header center">
                  <a className="navbar-brand" href="#">MyGolfConditions</a>
           <button onClick={this.openMenu}><i className="fa fa-bars"></i></button>
                </div>
                <ul className={`nav navbar-nav
             ${(this.state.isCollapsed)?'collapsed':''}
           `} >
                  <li className="active"><a href="#">Home</a></li>
           <li className="active"><a href="#">MyGolfClubs</a></li>
           <li className="active"><a href="#">Pro Tips</a>
            <div className="col-sm-4">
              <Link to="/main/protips"><button className="btn btn-warning">Pro Tips</button></Link>
            </div>
           </li>

           <li className="active"><a href="#">About MGC</a></li>
           <li className="active"><a href="#">Contact</a></li>
                </ul>
              </div>
            </nav>
     )
   }
 }
 export default Navbar;
