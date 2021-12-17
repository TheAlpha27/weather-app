import { combineReducers } from 'redux';

const cityReducer = (state = 'Mumbai', action) => {
    if (action.type === 'changeCity') {
        return action.payload;
    }
    else {
        return state;
    }
};
const unitReducer = (state = 'metric', action) => {
    if (action.type === 'changeUnit') {
        return action.payload;
    }
    else {
        return state;
    }
};
const cityNameReducer = (state = null, action) => {
    if (action.type === 'cityName') {
        return action.payload;
    }
    else {
        return state;
    }
};
const currTempReducer = (state = null, action) => {
    if (action.type === 'currTemp') {
        return action.payload;
    }
    else {
        return state;
    }
};
const minTempReducer = (state = null, action) => {
    if (action.type === 'minTemp') {
        return action.payload;
    }
    else {
        return state;
    }
};
const maxTempReducer = (state = null, action) => {
    if (action.type === 'maxTemp') {
        return action.payload;
    }
    else {
        return state;
    }
};
const currDateReducer = (state = null, action) => {
    if (action.type === 'currDate') {
        return action.payload;
    }
    else {
        return state;
    }
};
const humidityReducer = (state = null, action) => {
    if (action.type === 'humidity') {
        return action.payload;
    }
    else {
        return state;
    }
};
const pressureReducer = (state = null, action) => {
    if (action.type === 'pressure') {
        return action.payload;
    }
    else {
        return state;
    }
};
const speedReducer = (state = null, action) => {
    if (action.type === 'speed') {
        return action.payload;
    }
    else {
        return state;
    }
};
const weatherReducer = (state = null, action) => {
    if (action.type === 'weather') {
        return action.payload;
    }
    else {
        return state;
    }
};
const weatherDescReducer = (state = null, action) => {
    if (action.type === 'weatherDesc') {
        return action.payload;
    }
    else {
        return state;
    }
};
const reducers = combineReducers({
    city: cityReducer,
    unit: unitReducer,
    cityName: cityNameReducer,
    currTemp: currTempReducer,
    minTemp: minTempReducer,
    maxTemp: maxTempReducer,
    currDate: currDateReducer,
    humidity: humidityReducer,
    pressure: pressureReducer,
    speed: speedReducer,
    weather: weatherReducer,
    weatherDesc: weatherDescReducer
});

export default reducers;