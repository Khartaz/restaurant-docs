import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import '../styles/Footer.css'

const Footer = () => {
    return ( 
        // <div className="wrapper">
            <div className="footer">
                <p className="top">Copyright &copy; <NavLink to="/">API Restaurant Documentation</NavLink> - All Rights Reserved</p>
             </div>
        // </div>
     );
}
 
export default Footer;