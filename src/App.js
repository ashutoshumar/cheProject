

import {Error } from './Error';
import { HomeScreen } from './Screen/HomeScreen/HomeScreen';
import { Login } from './Screen/Login_Signup/Login';
import { Signup } from './Screen/Login_Signup/Signup';
import { PropertyType } from './Upload/PropertyType';
import CommercialSpace from './Upload/CommercialSpace/CommercialSpace';
import { Route, Routes, Navigate,Link, Redirect, Switch} from "react-router-dom"
function App() {
  return <>

         <Routes>
        <Route exact path="/" element={ <HomeScreen/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/upload" element={<PropertyType />} />
        <Route exact path="/error" element={ <Error/>} />
        <Route exact path='/commercialspace' element={<CommercialSpace/>}/>
         </Routes>

     
  
  </>
}

export default App;
