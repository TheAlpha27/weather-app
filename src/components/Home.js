import React from 'react'
import { useEffect } from 'react';
import '../Styles/Home.css'
import sunny from '../Images/Sunny.png';
import axios from 'axios';

function Home() {
    // useEffect(() => {
    //     console.log('inside useeffect');
    //     const fetchData = async ()=> {
    //         const res = await axios.get(
    //             `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=a8aa5613babf07197c33fc2de09dd864`
    //             );
    //         console.log(res.data);
    //     }
    //     fetchData();
    // }, []);
    return (
        <div className="container-fluid bg">
            <div className="container-fluid main">
                <div className="container contentBox">
                    <div className="upperhalf">
                        <div className="upleft">
                            <h1 className='city'>Jhansi</h1>
                            <h4 className='date'>December 15, 2021</h4>
                            <div className="weather">
                                <img src={sunny} alt="Weather" />
                                <span>Sunny</span>
                            </div>
                        </div>
                        <div className="upright">
                            <div className="currTemp">
                                <span>26&#176;</span>   
                            </div>
                            <div className="minmax">
                                <span className='min'>18&#176;</span>/<span className='max'>28&#176;</span>
                            </div>
                            <div className="description">
                                Clear Sky
                            </div>
                        </div>
                    </div>
                    <div className="lowerhalf">
                            <div className="humidity">
                                <h3>Humidity: </h3><span>100</span>
                            </div>
                            <div className="pressure">
                                <h3>Pressure: </h3><span>1023</span>
                            </div>
                            <div className="speed">
                                <h3>Speed: </h3><span>1.5</span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
