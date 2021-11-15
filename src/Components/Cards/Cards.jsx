import React from 'react';
import { useSelector } from 'react-redux';
import '../Styles/Cards.css';





const Cards = () => {
  
    const arrayCities = useSelector(state=> state.all);
    

    return( 
        <div className="Cards-container">
          {
                arrayCities.map((c, i)=>{
                  return    <div className="Cards-container-secundary" key={i}>
                        <p>{c.name} </p>
                        <p>{c.main.temp} </p>
                        <p>{c.weather[0].main}</p>
                        <img src={"http://openweathermap.org/img/wn/"+ c.weather[0].icon+"@2x.png"} width="80" height="80" alt="" />
                    </div>
                })
            } 
            
        </div>
      );  
     
      
    

        
        
     
      
    

    
    
}
 
export default Cards;