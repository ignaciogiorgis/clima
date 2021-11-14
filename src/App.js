import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Cards from './Components/Cards/Cards';
import FixedCard from './Components/FixedCard/FixedCard'
import SearchBar from './Components/SearchaBar/SearchBar';
import './App.css';



function App() {
  return (
  <div className="App-container">
    <div className="search-container">  
       
        <div > 
          <Routes>
              <Route path="/*" element={<SearchBar />} />
          </Routes>
        </div>
        <div>
          <Cards />
        </div>
      </div>
      <div>
        <FixedCard />
      </div> 
      
        
  </div>

  );
}

export default App;



