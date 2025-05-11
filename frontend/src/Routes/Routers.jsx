import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {SignIn} from '@clerk/clerk-react'
import { SignUp } from '@clerk/clerk-react'
const Routers = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<SignIn />} />
    <Route path="/register" element={<SignUp />} />
  </Routes>
  )
}

export default Routers