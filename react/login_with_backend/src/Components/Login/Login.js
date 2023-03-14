import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css" 
import Axios from "axios";
 

export default function Login() {
 const navigate = useNavigate();
    const [error,setError]=useState("")
    const [user,setUser] = useState({
      
        email:"",
        password:"",
       
    
    
    })
    const handleChange=(e)=>{
        const {name,value}= e.target;
        setUser({
            ...user,
            [name]:value
        })
    
    }

    const Login = async (e)=>{
      e.preventDefault();
      if(  !user.email ||  !user.password){
        alert("Fill the details");
    
      } 
       else{
        
        try{
         await Axios.post("http://localhost:8000/login",{
             
            email:user.email,
            password:user.password
             }).then((res)=>{
              console.log(res);
              if(res.data.length==0){
                return setError("Sorry no user exists 🤔")
              }else{
                // alert(" Successfullly loged in")
                    //  document.cookie = `userinfo=${JSON.stringify(res?.data[0])}`;
                localStorage.setItem("userinfo", `${JSON.stringify(res?.data[0])}`);
                navigate("/");
              }
             })
      
        }catch(err){
          console.log(err)
      
        }
      }
     
      
    
    }

    const signup =()=>{
      navigate("/register");

    }



  return (
    <>
    {
      error?(
        <div className='danger'>

           {error ?? <p >{error}</p>}
        </div>
      ):(
          <div className="formbody">
        <div className="formstyl">
    
        <Form>
          <h2>User Log In</h2> <br />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" value={user.email} placeholder="Enter email" onChange={handleChange}/>
           
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={user.password}  placeholder="Password" onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={Login}>
            Log In
          </Button>    
          <center><span> or </span></center>
          <Button variant="primary" type="submit" onClick={signup}>
            Sign Up
          </Button>
        </Form>
        </div>
        </div>
      )
    }
      
    
  
    
      

    </>
  );
}
