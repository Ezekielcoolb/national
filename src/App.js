import './App.css';
import { BrowserRouter } from "react-router-dom"
import Routers from './Routes';
import { GeneralProgress } from './component/custom/generalLayout';
import { useEffect, useState } from 'react';
import { AppProvider } from './Context/Context';


function App() {

  return (
   
     <>
     <AppProvider>
    <div className="">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
      
    </div>
    </AppProvider>
    </>
  );
}

export default App;
