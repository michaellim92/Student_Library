import React from 'react';
import Lamp from './Lamp.js'

{/*arguments are taken from home.js and passed into the navbar function */}
function NavBar({ onChangeInput, query, onSubmittedQuery }) {
    const getAndSetInput = (e) => {
        onChangeInput(e.target.value);
    }

    {/*- preventDefault stops the browser from performing a default refresh each time onsubmit is called
        - use preventDefault first, then call onSubmittedQuery to take in {query} value and set it into submittedQuery argument in home.js
        */}    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmittedQuery(query);
    }
    return(
        <div className="header">
            <div className="header-image">
                <Lamp  />
            </div>
            <div className="navBar">
                <form onSubmit={handleSubmit}>
                    {/*- 'event' refers html onChange event which contains the input value and .value lets javascript read the html input
                    - function getAndSetInput takes in the onChange event and reads the value and calls the onChangeInput function
                */}
                    <input type="text" id="searchbar" placeholder="Search.." onChange={getAndSetInput} value={query}></input>
                    <button type ="submit" className="search-button" id="search-button">Search</button>
                </form>

                <ul className='navUL'>
                    <li className='navLI'>Home</li>
                    <li className='navLI'>Saved Books</li>
                    <li className='navLI'>History</li>
                </ul>
                
            </div>
        </div>
    )
}

export default NavBar;