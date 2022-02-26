import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
export const NavBar = () => {
  return (
     <div className='navbar'>
          <div >
         
              <ul>
              <li>
              <Link className='link' to="/">Home</Link>
              </li>
              <li>
              <Link  className='link' to="/about">About</Link>
              </li>
              <li>
              <Link className='link' to="/contact">Contact</Link>
              </li>
                        
              </ul>
              <li>
              <Link className='btn_link_signin'  to="/login" >SignIn</Link>
              </li>
              <li>
              <Link className='btn_link_upload'  to="/" >Upload Property</Link>
              </li>
          </div>
     </div>
  )
}
