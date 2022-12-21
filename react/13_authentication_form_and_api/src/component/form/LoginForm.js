import React from 'react';
import { useSelector } from 'react-redux';
import {  useNavigate } from "react-router-dom";
 
// import "../formStyle/FormStyle.css";
 
 
 


export default function LoginForm() {
  let user = useSelector((state)=>state.authReducer.user.userData)

  user = JSON.parse(user);
  console.log(user,30)
   
const navigate = useNavigate();
 

return (
   <>
        
            <h2>Hi! <span id="login">{user.Username},</span> You have successfully registered</h2>

            <button onClick={()=>{
             
                
                navigate("/")
                
             
            }}> Log Out</button>
        
   </>
  
  )
}

