// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import flowLogo from '../assets/logo-navbar.PNG';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function Navbar({toggleSidebar}) {
    return (
        <header className="navbar-container">
            {/* 1. Zona Izquierda: Logo */}
            <div className="navbar-left">
                <Link to="/" className="navbar-logo-link">
                    <img src={flowLogo} alt="FlowUnique Logo" className="navbar-logo" />
                </Link>
            </div>

            {/* 2. Zona Central: Enlaces Principales */}
            <nav className="navbar-center">
                <ul className="navbar-menu">

                    <li><Link to="/dashboard/shop">Shop</Link></li>
                    <li><Link to="/dashboard/artists">Artists</Link></li>
                    <li><Link to="/dashboard">Home</Link></li>
                    <li><Link to="/dashboard/news">News</Link></li>
                    <li><Link to="/dashboard/contact">Contact Us</Link></li>
                </ul>
            </nav>

            <div className="navbar-right">
                <button
                    className="navbar-profile-link"
                    onClick={toggleSidebar}
                >
                    <FontAwesomeIcon icon={faUser} style={{color: "#FFFFFF" }} className={"btn-icon"}  />
                </button>
            </div>


        </header>
    );
}

export default Navbar;