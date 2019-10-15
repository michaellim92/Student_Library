import React, { Component } from 'react';
import { Route, Switch } from react-router-dom;
import NavBar from './components/NavBar.js';

import Login from './components/login';
import Home from '../public/index.html';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          {/*route paths between login and home */}
          <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route path='/home' component={Home}></Route>
          </Switch>
        </div>
 
        <header className="App-header">
          <title>Honor Library</title>
        </header>

        <div className="navbar">
          {/*nav bar */}
          <NavBar />
        </div>
      </div>

    );
  }
}

export default App;
