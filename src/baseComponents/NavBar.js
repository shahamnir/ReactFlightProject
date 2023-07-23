import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {

    return(
        <div className="navbar">
        <ul id="login">
            <li><a href="/sign-up"> Sign Up</a></li>
            <li><Link to='/login'> Login</Link></li>
        </ul>
        <ul id="main">
            <li><a href="/flights"> Flights</a></li>
            <li><a href="/airlines"> Airlines</a></li>
            <li><Link to='/countries'> Countries</Link></li>
            <li><a href="/admin"> Admin</a></li> 
        </ul>
        </div>
    );
};

export default NavBar;