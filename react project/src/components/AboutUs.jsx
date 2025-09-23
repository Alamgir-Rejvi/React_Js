import React from 'react';
import Nav from './Nav'
import { Link, Outlet } from 'react-router-dom';
const AboutUs = () => {
    return (
        <div>
            <Nav/>
            <h1>This is about us page</h1>
            <ul>
                <li>
                    {/* <Link to="/product">Product</Link> */}
                    {/* <Link to = "product"> Product</Link> */}
                </li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default AboutUs;


