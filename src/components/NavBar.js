import React, {Component} from 'react';

class NavBar extends Component {
   render () { 
        return(
            <div className="navBar">
                <ul>
                    <li>Home</li>
                    <li>Saved Books</li>
                    <li>History</li>
                </ul>
            </div>
        )
    }
}

export default NavBar;