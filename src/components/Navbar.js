import React from 'react';
import '../Styles/Navbar.css';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import {AiOutlineSearch} from 'react-icons/ai';

function Navbar() {
    return (
        <div className="nav">
            <div className="left">
            <span className="logoCont">
                <BsFillLightningChargeFill />
            </span>
            <h2 className="appName">
                Weather App
            </h2>
            </div>
            <div className="right">
                <input type="text" placeholder='Enter your city' />
                <button className="btn btn-dark"><AiOutlineSearch/></button>
            </div>
        </div>
    )
}

export default Navbar