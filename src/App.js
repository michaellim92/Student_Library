import React, { Components } from 'react';
import NavBar from './components/NavBar.js';

import './App.css';


class App extends Components {
  render() {
    return (
      <div className="App">
        
        <div className="navbar">
          {/*nav bar */}
          <NavBar />
        </div>
 
        <header className="App-header">
          <title>Honor Library</title>
        </header>
      </div>
    );
  }
}

export default App;
