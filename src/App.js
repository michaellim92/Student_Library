import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login.js';
import Home from './pages/Home.js';

import './App.css';

function App() {
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

    </div>
  )
}


export default App;
