import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY






export const GET_CITY = "GET_CITY";
export const GET_MEDELLIN = "GET_MEDELLIN";

export function getCity(cities) {
    
    
    return async function (dispatch) {
      try {
        let json = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cities}&APPID=${API_KEY}`);
        return dispatch({
          type: GET_CITY,
          payload: json.data,
        });
      } catch (err) {
        console.log(err);
      }
      
    };
  }

  export function getMedellin() {
    return async function (dispatch) {
      try {
        let resultado = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=medellin&APPID=${API_KEY}`);
        return dispatch({
          type: GET_MEDELLIN,
          payload: resultado.data,
        });
      } catch (err) {
        console.log(err);
      }
      
    };
  }

