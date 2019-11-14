import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login.js';
import Home from './pages/Home.js';

import './App.css';

function App() {
  const x = async () => {
    const data = await fetch('/login');
    const res = await data.json();
    console.log(res);
  };
  x();
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
