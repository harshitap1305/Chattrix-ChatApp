import React from 'react'
import { SignIn } from '@clerk/clerk-react'
const Login = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
      <SignIn path="/login" routing="path" />
    </div>
  )
}

export default Login