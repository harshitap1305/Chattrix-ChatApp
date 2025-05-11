import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton} from '@clerk/clerk-react';
import LandingPage from '../Pages/Landing/LandingPage';
import SignIn from '../Pages/Auth/Login'
import SignUp from '../Pages/Auth/Register'
const Routers = () => {
  return (
   <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/login" element={<SignIn/>} />
    <Route path="/register" element={<SignUp/>} />
  </Routes>
  )
}

export default Routers