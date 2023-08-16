import React from 'react'
import './login.css'

const Login = () => {
  return (
    <>
    <div className='login'>
    <h1>Email</h1>
    <input type='email' className='login-mail' name='email' />
    <h1>Password</h1>
    <input type="password" name="password"  />
    <button>Sign In</button>
    </div>
    <div className='register'>
    <h1>Email</h1>
    <input type='email' className='register-mail' name='email' />
    <h1>Password</h1>
    <input type="password" className="password-register" name='password-register' />
    <button>Sign In</button>
    </div>
    </>
  )

}

export default Login