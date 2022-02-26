
import './App.css';
import {Error } from './Error';
import { HomeScreen } from './Screen/HomeScreen/HomeScreen';
import { Login } from './Screen/Login_Signup/Login';
import { Signup } from './Screen/Login_Signup/Signup';
import { Route, Routes, Navigate,Link, Redirect, Switch} from "react-router-dom"
function App() {
  return <>

         <Routes>
        <Route exact path="/" element={ <HomeScreen/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route exact path="/error" element={ <Error/>} />
         </Routes>

     
  
  </>
}

export default App;
