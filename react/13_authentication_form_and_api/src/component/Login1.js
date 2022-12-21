import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {  useNavigate } from "react-router-dom";
import { loginUser } from '../thunk';
 
export const Login1 = () => {

const navigate = useNavigate();
 const dispatch =useDispatch();

const [loginData,setLoginData]= useState({email:"",password:""})

const handleChange=(e)=>{
    setLoginData({...loginData,[e.target.name]:e.target.value})
}

const onLogIn =async(e)=>{
    e.preventDefault();
console.log(loginData);
if(loginData.email && loginData.password){

    const user = await dispatch(loginUser(loginData))
    console.log(user)
    if(user){
        navigate('/login')
    }else{
        alert("Invalid")
    }
}

}
 
 
    return (
    < >
    <form>
        <h2>LogIn From</h2> <br />
   <div className="elements">
   <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={loginData.email}
            onChange={handleChange}
          />
 
   </div>

   <div className="elements">
   <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            autoComplete='off'
            value={loginData.password}
            onChange={handleChange}
          />
   </div>
   <button id='lgn_btn' onClick={onLogIn}>Log In </button>
   </form>
    </ >
  )
}
