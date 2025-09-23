import React from 'react';
import Nav from './Nav';
import {Link, Outlet } from "react-router-dom";
const Produnct = () => {
    return (
        <div>
            <Nav/>
            
            <h1>This is a produnt</h1>
            <ul>
                <li>
                    <Link to = "category">Category</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default Produnct;