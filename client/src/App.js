import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Actor from './components/Media Pages/Actor'
import Movie from './components/Media Pages/Movie'
import Television from './components/Media Pages/Television'
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
        <Route path = "/actor/:id" exact component = {Actor}/>
      </Switch>
    </div>
  );
}

export default App;
