import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {getCity}  from '../../Actions/index'; 
import '../Styles/Search.css';



const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchCity,setSearchCity] = useState('');
    const handleChange = (e)=>{
        setSearchCity(e.target.value);
    }
    //Funcion de busqueda para cada ciudad
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(getCity(searchCity));
        setSearchCity('');
   }
   
   return (
        <div className="search">
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleChange} value={searchCity} placeholder="Ciudad..."  />      
          </form>   
        </div>
      );
}
 
export default SearchBar;