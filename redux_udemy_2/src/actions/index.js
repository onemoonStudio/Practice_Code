import Axios from 'axios';
import config from '../../config';
const W_API_KEY = config.weatherAPI;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${W_API_KEY}`;
// template string

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Action Creator
// Always return an action with type property
export function fetchWeather(city){
    const tmp_url = `${ROOT_URL}&q=${city},kr`;
    const request = Axios.get( tmp_url );

    return {
        type : FETCH_WEATHER ,
        payload : request 
    }; 
}
