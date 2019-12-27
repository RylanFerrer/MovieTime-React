import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import "./styles/main.css"
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route to = "/" exact component = {Home}/>
      </Switch>
    </div>
  );
}

export default App;
