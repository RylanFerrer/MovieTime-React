import React from 'react';
import {Route, Switch} from 'react-router-dom'
import SearchPage from './components/Search/SearchPage'
import Home from './components/Home'
import Actor from './components/Media Pages/Actor'
import Movie from './components/Media Pages/Movie'
import Television from './components/Media Pages/Television'
import NavBar from './components/Nav/NavBar'
import "./styles/main.css"
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/app"/>
        <Route path = "/movie/:id"  exact component = {Movie}/>
        <Route path = "/tv/:id" exact component = {Television}/>
        <Route path = "/actor/:id" exact component = {Actor}/>
        <Route path = "/search" exact component = {SearchPage}/>
      </Switch>
    </div>
  );
}

export default App;
