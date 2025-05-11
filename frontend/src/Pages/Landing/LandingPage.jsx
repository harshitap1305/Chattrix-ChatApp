import React from 'react'
import { NavLink } from "react-router-dom";
import cover from '../../assets/cover.png'
import logo from '../../assets/logo.png'
import './LandingPage.css'
const LandingPage = () => {
  return (
    <>
       <div className='navbar'>
          <div className='logo'>
            <img src={logo} alt="logo" />
            <h1>Chattrix</h1>
          </div>
          <div className='nav-items'>
            <ul>
                <li>
                   <NavLink 
                    to="/login" 
                    className="nav-link">
                    Login
                   </NavLink>
                </li>
                <li>
                 <NavLink 
                   to="/register" 
                   className="nav-link">
                   Register
                 </NavLink>
               </li>
            </ul>
          </div>
       </div>

       <div className='body'>
  <div className='left'>
    <h1 className='title'>Welcome to Chattrix</h1>
    <h2 className='subtitle'>Connect with your friends and the world around you.</h2>
    <p className='description'>Chat smarter. Connect faster. Your privacy-first chat solution.</p>
    <button className='get-started'>Get Started</button>
  </div>
  <img src={cover} alt="cover" />
</div>


       <footer className='footer'>
            <div className='footer-content'>
                <p>&copy; 2025 Chattrix. All rights reserved.</p>
            </div>
            <div className='social-media'>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
            </div>
        </footer>
    </>
  )
}

export default LandingPage