import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase.js";
import "./login.css" 
// this next import will change
import SignUp from './signUp.jsx'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div >
      Sign In
      <form className='login-container' onSubmit={signIn}>
    <h1>Email</h1>
    <input type='email' onChange={(e)=> setEmail(e.target.value)} className='login-mail' name='email' />
    <h1>Password</h1>
    <input type="password" onChange={(e)=> setPassword(e.target.value)} name="password"  />
    <button>Sign In</button>
    </form>
    OR Sign Up
    < SignUp />
    </div>

  )

}

export default Login