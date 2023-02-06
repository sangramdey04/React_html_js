import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Register.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
 



export default function Register() {
const [userName,setUserName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const navigate = useNavigate();
const register =async(e)=>{
  e.preventDefault();
  try{
    await axios.post ("http://localhost:8800/register",{
      username:userName,
      email:email,
      password:password
    }).then((res)=>{
      console.log(res?.data);
      document.cookie = `id=${res?.data.data[0].id}`
      navigate("/");
    }) 
  } catch(err){
    console.log(err)
  }

}

  return (
     <>
     <div className="register">
          
       <h2>Create an account</h2> <br />
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter username" 
        onChange={(e)=>{
            setUserName(e.target.value)
        }}
        />
        <br />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        onChange={(e)=>{
          setEmail(e.target.value)
      }} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        onChange={(e)=>{
          setPassword(e.target.value)
      }}/>
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={register}>
        Create
      </Button>
    </Form>
        <br />
 
    </div>
     </>
  )
}
