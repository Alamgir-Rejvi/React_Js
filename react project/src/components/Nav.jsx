import React from 'react';
import { Link } from "react-router-dom";

// import { Link } from "react-router";
const Nav = () => {
    return (
        <div>
            <ul>
                <li> <Link to = "/">Home</Link></li>
                <li> <Link to = "/about-us">About Us</Link></li>
                <li> <Link to = "/contact-us">Contact Us</Link></li>
                <li> <Link to = "/product">Product</Link></li>
                
            </ul>
        </div>
    );
};

export default Nav;