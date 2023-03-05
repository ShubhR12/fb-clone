import React from 'react'
import "../css/Login.css"
import {auth, provider} from "./firebase"
import {useStateValue} from "../Stateprovider"



const Login = () => {
  const [{}, dispatch]=useStateValue();
const signIn=()=>{
  auth.signInWithPopup(provider).then(result=>{
   var credential=result.credential;
   const photoURl=`${result.user.photoURL}?access_token=${credential.accessToken}`;
   
   dispatch({
    type:"SET_USER",
    user:{
      displayName:result.user.displayName,
      photoURl:photoURl
    }
   })

  }).catch(error=>console.log(error))
}

  
  return (
    <div className='login'>
        <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/zfYvmRWJSyz.png'></img>
      <div className='login-form'>
        <h2>Sign in with Facebook</h2>
        <form className='form-item'>
            <input type="text" placeholder='Enter Email Or Mobile Number'></input>
            <input type="password" placeholder='Enter Your Password'></input>
        </form>
        <button className='btn' onClick={signIn}>login with facebook</button>
        </div>
    </div>
  )
}

export default Login