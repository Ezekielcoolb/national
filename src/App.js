import './App.css';
import { BrowserRouter } from "react-router-dom"
import Routers from './Routes';
import { GeneralProgress } from './component/custom/generalLayout';
import { useEffect, useState } from 'react';


function App() {

  return (
   
     
    <div className="">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
   
    </div>
    
  );
}

export default App;
