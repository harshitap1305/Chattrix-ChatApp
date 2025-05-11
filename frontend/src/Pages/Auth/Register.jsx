import React from 'react'
import { SignUp } from '@clerk/clerk-react'
const Register = () => {
  return (
     <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
      <SignUp path="/register" routing="path" />
    </div>
  )
}

export default Register