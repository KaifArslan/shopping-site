import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import "./login.css" 


export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div >
      <form className='signUp-container' onSubmit={signUp}>
    <h1>Email</h1>
    <input type='email' onChange={(e)=> setEmail(e.target.value)} className='login-mail' name='email' />
    <h1>Password</h1>
    <input type="password" onChange={(e)=> setPassword(e.target.value)} name="password"  />
    <button>Sign In</button>
    </form>
    </div>

  )

}

export default SignUp