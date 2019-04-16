import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return ( 
        // <div className="wrapper">
            <div className="header"> 
                 <h1 className="logo"><NavLink to="/">Restaurant</NavLink></h1>
                 <p><strong >API Documentation</strong></p>
            </div>
        // </div>
     );
}
 
export default Header;