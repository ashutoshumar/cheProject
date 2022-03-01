import React from 'react'
import { NavBar } from '../NavBar/NavBar'
import { Login } from '../Login_Signup/Login'
import { Signup } from '../Login_Signup/Signup'
import { LandingScreen } from './LandingScreen'

export const HomeScreen = () => {
  return (
    <div>
       <NavBar/>  
      <LandingScreen/>
    </div>
  )
}
