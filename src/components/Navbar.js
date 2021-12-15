import React from 'react';
import '../Styles/Navbar.css';
import { FaCloudSunRain } from 'react-icons/fa';

function Navbar() {
    return (
        <div className="nav">
            <span className="logoCont">
                <FaCloudSunRain />
            </span>
            <h4 className="appName">
                Weather App
            </h4>
        </div>
    )
}

export default Navbar