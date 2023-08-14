import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='login'>
    <h1>Email</h1>
    <input type='email' class='login-mail' name='email' />
    <h1>Password</h1>
    <input type="password" name="password"  />
    <button>Sign In</button>
    </div>
  )

}

export default Login