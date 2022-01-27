import React from 'react'
import { useEffect } from 'react';
import '../Styles/Home.css'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { action } from '../Store/index';
import NotFound from './NotFound';
import clear from '../Images/Clear.jpg';
import clouds from '../Images/Clouds.jpg';
import drizzle from '../Images/Drizzle.jpg';
import other from '../Images/Other.jpg';
import snow from '../Images/Snow.jpg';
import thunderstorm from '../Images/Thunderstorm.jpg';


function Home() {
    const dispatch = useDispatch();
    const { cityName, currTemp, minTemp, maxTemp, currDate, humidity, pressure, speed, weather, weatherDesc, weatherBG, weatherIcon } = bindActionCreators(action, dispatch);

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
    const weatherBGState = useSelector(state => state.weatherBG);
    const weatherIconState = useSelector(state => state.weatherIcon);

    const API_KEY = process.env.REACT_APP_WEATHER_API;

    // console.log(cityNameState, currTempState, minTempState, maxTempState, currDateState, humidityState, pressureState, speedState, weatherState, weatherDescState);

    useEffect(() => {
        // console.log('inside useeffect');
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${cityState}&units=${unitState}&appid=${API_KEY}`
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
                weatherIcon(`http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`);
            } catch (err) {
                cityName(null);
            }
        };
        fetchData();

    }, [cityState, unitState]);

    if (weatherState === 'Thunderstorm') {
        // weatherBG('https://c4.wallpaperflare.com/wallpaper/809/963/715/rain-harry-potter-art-harry-potter-the-shower-hd-wallpaper-preview.jpg');
        weatherBG(thunderstorm);
    }
    else if (weatherState === 'Drizzle' || weatherState === 'Rain') {
        // weatherBG('https://images3.alphacoders.com/556/thumb-1920-556432.jpg');
        weatherBG(drizzle);
    }
    else if (weatherState === 'Snow') {
        // weatherBG('https://wallpaperaccess.com/full/195088.jpg');
        weatherBG(snow);
    }
    else if (weatherState === 'Clear') {
        // weatherBG('https://foreveramber.co.uk/wp-content/uploads/2012/07/wizarding-world-of-harry-potter.jpg');
        weatherBG(clear);
    }
    else if (weatherState === 'Clouds') {
        // weatherBG('https://data.whicdn.com/images/261261409/original.jpg');
        weatherBG(clouds);
    }
    else {
        // weatherBG('https://data.whicdn.com/images/308248727/original.jpg');
        weatherBG(other);
    }
    let bgElem = document.getElementById('bgIMG');

    if (bgElem !== null) {
        document.getElementById('bgIMG').style.backgroundImage = `url(${weatherBGState})`;
    }

    return (
        <div className="container-fluid bg" id='bgIMG'>
            <div className="container-fluid main">

                {cityNameState === null ?
                    <NotFound />
                    :
                    (<div className="container contentBox">
                        <div className="upperhalf">
                            <div className="upleft">
                                <h1 className='city'>{cityNameState}</h1>
                                <h4 className='date'>{currDateState}</h4>
                                <div className="weather">
                                    <img src={weatherIconState} alt="Weather" />
                                    <span>Status: {weatherState}</span>
                                </div>
                            </div>
                            <div className="upright">
                                <div className="currTemp">
                                    <span>{currTempState}{unitState === "metric" ? '\xB0C' : 'F'}</span>
                                </div>
                                <div className="minmax">
                                    <span className='min'>{minTempState}{unitState === "metric" ? '\xB0C' : 'F'}</span>/<span className='max'>{maxTempState}{unitState === "metric" ? '\xB0C' : 'F'}</span>
                                </div>
                                <div className="description">
                                    Description: {weatherDescState}
                                </div>
                            </div>
                        </div>
                        <div className="lowerhalf">
                            <div className="humidity">
                                <h3>Humidity: </h3><span>{humidityState}%</span>
                            </div>
                            <div className="pressure">
                                <h3>Pressure: </h3><span>{pressureState} hPa</span>
                            </div>
                            <div className="speed">
                                <h3>Speed: </h3><span>{speedState}{unitState === "metric" ? ' meter/sec' : ' miles/hour'}</span>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Home
