import React, {Component} from 'react';

class NavBar extends Component {
   render () { 
        return(
            <div className="header">
                <img src="../../assets/images/featherlogo.jpg" alt="Honors Library Logo" />
            </div>
            <div className="navBar">
                <ul>
                    <li>Home</li>
                    <li>Saved Books</li>
                    <li>History</li>
                </ul>

                <input type="text" id="searchbar" placeholder="Search.."></input>
                <button type ="submit" className="search" id="search-button">Search</button>
            </div>
        )
    }
}

export default NavBar;