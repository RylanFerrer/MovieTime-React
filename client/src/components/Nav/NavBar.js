import React from 'react';
import {Link} from 'react-router-dom'
import NavSearch from './NavSearch'
const NavBar = () => {
    return (
        <div className = "nav">
            <div className = "nav__left">
                <h2 className = "nav__brand">Movie<span className = "nav__brand-red">Time</span></h2>
            </div>
            <div className = "nav__right">
                <ul className = "nav__menu">
                   <Link className = "nav__menu-item" to ="/">Home</Link>
                   <Link className = "nav__menu-item" to = "/search">Search</Link>
                </ul>
            </div>
         
        </div>
    );
}

export default NavBar;
