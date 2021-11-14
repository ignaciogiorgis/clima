import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getMedellin } from '../../Actions';
import '../Styles/Fixed.css';


const FixedCard = () => {
      const [datos, setDatos] = useState(false)  

      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(getMedellin());
        
        setDatos(true)
      },[])
      
      const medellinFixed = useSelector(state => state.medellin)
      console.log('component',medellinFixed);
      
      
      return (
            <div className="Fixed-container">
              {datos ? ( 
              <div>
                  <h3>Current City</h3>
                  <h1>{medellinFixed?.name} </h1> 
                  <h3>Temp {Math.round(medellinFixed.main?.temp-273.15) } C° </h3>
                  <p>Temp Max {Math.round(medellinFixed.main?.temp_max-273.15)} C°</p>
                  <p>Temp Min {Math.round(medellinFixed.main?.temp_min-273.15)} C° </p>
                  <p>Feels like {Math.round(medellinFixed.main?.feels_like-273.15)} C° </p>
                  <p>Humidity {medellinFixed.main?.humidity} % </p>
              </div>): null }
              
            </div>
           );
     }
 
export default FixedCard;