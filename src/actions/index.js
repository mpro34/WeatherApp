import axios from 'axios';

const API_KEY='9b68a2e0e311ac23132363b828662b66';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`; //Static country of USA
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
