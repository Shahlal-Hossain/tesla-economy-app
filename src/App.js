import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import ModelS from './components/ModelS/ModelS';
import Model3 from './components/Model3/Model3';
import ModelY from './components/ModelY/ModelY';
import ModelX from './components/ModelX/ModelX';
import SolarRot from './components/SolarRot/SolarRot';
import SolarPanels from './components/SolarPanels/SolarPanels';


function App() {
  return (
    <div>
         <div>
           <BrowserRouter>

           <Navbar/>

           <Routes>
             <Route path='/' element={<Home/>}></Route>
             <Route path='/modelS' element={<ModelS></ModelS>}></Route>
             <Route path='/model3' element ={<Model3></Model3>}></Route>
             <Route path='/modelX' element={<ModelX></ModelX>}></Route>
             <Route path='/modelY' element={<ModelY></ModelY>}></Route>
             <Route path='/solarRoof' element={<SolarRot></SolarRot>}></Route>
             <Route path='/solarPanels' element={<SolarPanels></SolarPanels>}></Route>
           </Routes>
           </BrowserRouter>
         </div>
    </div>
  );
}

export default App;
