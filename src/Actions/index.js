import axios from "axios";


export const GET_CITY = "GET_CITY";
export const GET_MEDELLIN = "GET_MEDELLIN";

export function getCity(cities) {
    
    
    return async function (dispatch) {
      try {
        let json = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cities}&APPID=2bd6d4631caa66965bec173759c72185`);
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
        let resultado = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=medellin&APPID=2bd6d4631caa66965bec173759c72185`);
        console.log('acition1', resultado.data)
        return dispatch({
          type: GET_MEDELLIN,
          payload: resultado.data,
        });
      } catch (err) {
        console.log(err);
      }
      
    };
  }

