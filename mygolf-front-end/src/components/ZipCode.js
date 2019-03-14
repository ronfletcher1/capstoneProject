import React from 'react';

export default function() {     
    return(    
        <div>
            <form onSubmit={this.props.zipcode}>
                <h4>Zip Code</h4>

                <input id="searchTerm" align="right" type="number" name="zipcode"/>

                <div className="buttonHolder">
                    <input type="submit" align="right" value="submit" /> 
                </div>
                
            </form>
        </div>
        )
   }
