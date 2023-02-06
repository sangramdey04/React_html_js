import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Login.css"
import Axios from "axios"
import { useNavigate } from 'react-router-dom';

export default function Login() {
  
const navigate = useNavigate();

  const [user,setUser]=useState({
    email:"",
    password:""
  })

  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    Axios.post ("http://localhost:8800/login",user).then((res)=>{
      console.log(res);
      if( !res.data.message){
        document.cookie = `id=${res?.data.data[0].id}`
        navigate("/");

      }
    })

  }

  return (
     <>
     <div className="login">
          
       <h2>Login</h2>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        <br />
<h6>Don't have any account? <b onClick={()=> navigate("/register")}>Register</b></h6>
    </div>
     </>
  )
}
