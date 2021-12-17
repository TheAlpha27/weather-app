export const city = (city) => {
    return (dispatch) => {
        dispatch({
            type: 'changeCity',
            payload: city
        })
    }
};
export const units = (unit) => {
    return (dispatch) => {
        dispatch({
            type: 'changeUnit',
            payload: unit
        })
    }
};
export const cityName = (cityName) =>{
    return (dispatch) => {
        dispatch({
            type: 'cityName',
            payload: cityName
        })
    }
};
export const currTemp = (currTemp) =>{
    return (dispatch) => {
        dispatch({
            type: 'currTemp',
            payload: currTemp
        })
    }
};
export const minTemp = (minTemp) =>{
    return (dispatch) => {
        dispatch({
            type: 'minTemp',
            payload: minTemp
        })
    }
};
export const maxTemp = (maxTemp) =>{
    return (dispatch) => {
        dispatch({
            type: 'maxTemp',
            payload: maxTemp
        })
    }
};
export const currDate = (currDate) =>{
    return (dispatch) => {
        dispatch({
            type: 'currDate',
            payload: currDate
        })
    }
};
export const humidity = (humidity) =>{
    return (dispatch) => {
        dispatch({
            type: 'humidity',
            payload: humidity
        })
    }
};
export const pressure = (pressure) =>{
    return (dispatch) => {
        dispatch({
            type: 'pressure',
            payload: pressure
        })
    }
};
export const speed = (speed) =>{
    return (dispatch) => {
        dispatch({
            type: 'speed',
            payload: speed
        })
    }
};
export const weather = (weather) =>{
    return (dispatch) => {
        dispatch({
            type: 'weather',
            payload: weather
        })
    }
};
export const weatherDesc = (weatherDesc) =>{
    return (dispatch) => {
        dispatch({
            type: 'weatherDesc',
            payload: weatherDesc
        })
    }
};