import React from 'react';
import '../Styles/Navbar.css';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { action } from '../Store/index';

function Navbar() {
    const dispatch = useDispatch();
    const { city, units } = bindActionCreators(action, dispatch);

    // const UpdateStates = () => {
    //     city(document.getElementById('myCity').value);
    //     units(document.querySelector('input[name="units"]:checked').value);
    //     // console.log(document.querySelector('input[name="units"]:checked').value);
    // }

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
                <div className='radioCont'>
                <label htmlFor="metric">Metric <input onClick={() => { units(document.querySelector('input[name="units"]:checked').value); }} className='mx-1' type="radio" name="units" value="metric" id="metric" defaultChecked /> </label>
                <label className='mx-1' htmlFor="imperial"> Imperial <input onClick={() => { units(document.querySelector('input[name="units"]:checked').value); }} className='mx-1' type="radio" name="units" value="imperial" id="imperial" /> </label>
                </div>
                <div className='inpCont'>
                <input type="text" id='myCity' name='myCity' placeholder='Enter your city' />
                <button className="btn btn-dark" onClick={() => { city(document.getElementById('myCity').value); }}><AiOutlineSearch /></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar