import React from 'react';

export default function() {     
    return(    
        <div>
            <form onSubmit={this.props.zipcode}>
                <h4>Zip Code</h4>
                <input id="searchTerm" type="number" name="zipcode"/>
            </form>
        </div>
        )
   }


