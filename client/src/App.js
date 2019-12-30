import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Movie from './components/Movie'
import Television from './components/Television'
import "./styles/main.css"
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/app"/>
        <Route path = "/movie/:id"  exact component = {Movie}/>
        <Route path = "/tv/:id" exact component = {Television}/>
      </Switch>
    </div>
  );
}

export default App;
