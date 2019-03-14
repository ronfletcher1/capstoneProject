import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'

class Navbar extends Component{
   constructor(){
     super();
     this.state={
       showItem: true,
     }
   }

   render(){
     return(
      <div>
       <nav>
                {/* <Post />  to simplify app.js */}
                <div className="nav-wrapper black">
                    <Link to="/" className="brand-logo center">MyGolfConditions</Link>
                    <ul className="left hide-on-med-and-down miniNav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/mygolfclubs">GolfClubs</Link></li>
                        <li><Link to="/protips">Pro Tips</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
          </nav>
      </div>
      // <Link to="/" className="mygolfconditions">MyGolfConditions</Link>
     )
   }
 }
 export default Navbar;
