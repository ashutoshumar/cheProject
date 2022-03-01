import React from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'
export const NavBar = () => {
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
              <Link className='navbar_signin'  to="/login" >SignIn</Link>
              </li>
              <li>
              <Link className='navbar_upload'  to="/upload" >Upload Property</Link>
              </li>
          </div>

     </div>
  )
}
