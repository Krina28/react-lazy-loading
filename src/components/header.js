import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/careers">Careers</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">ContactUs</Link>
                </li>
                <li>
                    <i className="material-icons sun-icon">wb_sunny</i>
                    <i className="material-icons sun-icon">nights_stay</i>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
