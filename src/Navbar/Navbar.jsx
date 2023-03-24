 import React from "react";
import './Navbar.css'
import {NavLink} from 'react-router-dom'

const Navbar=()=>{

    return(<div className="navbar">
        <div>
            <h2 id="logo">LogoBlock</h2>
        </div>
        <div className="ul">
            <ul id="ul">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                <li><NavLink to="/signup">SignUp</NavLink></li>
                <li><NavLink to="/login">LogIn</NavLink></li>
            </ul>
        </div>
    </div>
    )

}
export default Navbar