import React from 'react'
import { useEffect } from 'react';
import '../Styles/Home.css'
import sunny from '../Images/Sunny.png';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { action } from '../Store/index';

function Home() {
    const dispatch = useDispatch();
    const { cityName, currTemp, minTemp, maxTemp, currDate, humidity, pressure, speed, weather, weatherDesc } = bindActionCreators(action, dispatch);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const cityState = useSelector(state => state.city);
    const unitState = useSelector(state => state.unit);
    const cityNameState = useSelector(state => state.cityName);
    const currTempState = useSelector(state => state.currTemp);
    const minTempState = useSelector(state => state.minTemp);
    const maxTempState = useSelector(state => state.maxTemp);
    const currDateState = useSelector(state => state.currDate);
    const humidityState = useSelector(state => state.humidity);
    const pressureState = useSelector(state => state.pressure);
    const speedState = useSelector(state => state.speed);
    const weatherState = useSelector(state => state.weather);
    const weatherDescState = useSelector(state => state.weatherDesc);
    // console.log(cityNameState, currTempState, minTempState, maxTempState, currDateState, humidityState, pressureState, speedState, weatherState, weatherDescState);

    useEffect(() => {
        // console.log('inside useeffect');
        const fetchData = async () => {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityState}&units=${unitState}&appid=a8aa5613babf07197c33fc2de09dd864`
            );
            cityName(res.data.name);
            currTemp(res.data.main.temp);
            minTemp(res.data.main.temp_min);
            maxTemp(res.data.main.temp_max);
            let date = new Date((res.data.dt - res.data.timezone) * 1000);
            let day = date.getDate();
            let month = months[date.getMonth()];
            let year = date.getFullYear();
            let dateString = month + " " + day + ", " + year;
            currDate(dateString);
            humidity(res.data.main.humidity);
            pressure(res.data.main.pressure);
            speed(res.data.wind.speed);
            weather(res.data.weather[0].main);
            weatherDesc(res.data.weather[0].description);
        };
        fetchData();
        
    }, [cityState, unitState]);

    return (
        <div className="container-fluid bg">
            <div className="container-fluid main">
                <div className="container contentBox">
                    <div className="upperhalf">
                        <div className="upleft">
                            <h1 className='city'>{cityNameState}</h1>
                            <h4 className='date'>{currDateState}</h4>
                            <div className="weather">
                                <img src={sunny} alt="Weather" />
                                <span>{weatherState}</span>
                            </div>
                        </div>
                        <div className="upright">
                            <div className="currTemp">
                                <span>{currTempState}{unitState==="metric"?'\xB0C':'F'}</span>
                            </div>
                            <div className="minmax">
                                <span className='min'>{minTempState}{unitState==="metric"?'\xB0C':'F'}</span>/<span className='max'>{maxTempState}{unitState==="metric"?'\xB0C':'F'}</span>
                            </div>
                            <div className="description">
                                {weatherDescState}
                            </div>
                        </div>
                    </div>
                    <div className="lowerhalf">
                        <div className="humidity">
                            <h3>Humidity: </h3><span>{humidityState}%</span>
                        </div>
                        <div className="pressure">
                            <h3>Pressure: </h3><span>{pressureState}hPa</span>
                        </div>
                        <div className="speed">
                            <h3>Speed: </h3><span>{speedState}{unitState==="metric"?'meter/sec':'miles/hour'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
