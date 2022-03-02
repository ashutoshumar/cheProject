import React from 'react'
import axios from 'axios';
import "./navbar.scss"
import { Link } from 'react-router-dom'
export const NavBar = () => {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Methods": "GET,PUT"
    }
  };
  const handle =()=>{
    axios.get('https://p8538od7cc.execute-api.ap-south-1.amazonaws.com/dev/auth/google/url',config)
    .then(response => {console.log(response)})
    .catch(err=>{
      console.log(err)
    });
  }
  return (
    
     <div className='navbar'>
          <div >
         
              <ul>
              <li>
              <Link className='navbar_link' to="/">Home</Link>
              </li>
              <li>
              <Link  className='navbar_link' to="/about">About</Link>
              </li>
              <li>
              <Link className='navbar_link' to="/contact">Contact</Link>
              </li>
                        
              </ul>
              <li>
              <button className='navbar_signin'  onClick={()=>{handle()}} >SignIn</button>
              </li>
              <li>
              <Link className='navbar_upload'  to="/upload" >Upload Property</Link>
              </li>
          </div>

     </div>
  )
}
