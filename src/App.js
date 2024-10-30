import './App.css';
import { BrowserRouter } from "react-router-dom"
import Routers from './Routes';


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
