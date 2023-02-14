import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useState} from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const [success,setSuccess]=useState("")
const [user,setUser] = useState({
    name:"",
    email:"",
    password:"",
    conf_password:""


})
// console.log(user.password == user.conf_password)
const handleChange=(e)=>{
    const {name,value}= e.target;
    setUser({
        ...user,
        [name]:value
    })

}
const register = async (e)=>{
  e.preventDefault();
  if(!user.name || !user.email ||  !user.password ||  !user.conf_password){
    alert("Fill the details");

  }else if(user.password !== user.conf_password){
    alert("password didn't match")
    
  } else{
    
    try{
     await Axios.post("http://localhost:8000/register",{
        name:user.name,
        
        email:user.email,
        password:user.password
         }).then((res)=>{
          console.log(res);
          if(res.data.code === "ER_DUP_ENTRY"){
            alert("User already exists")
          }else{
            console.log("Registered Success-fully");
            setSuccess("Registered Success-fully");
            // document.cookie = `id=${res?.data.data[0].id}`;
            navigate("/login")
          }
         })

    }catch(err){
      console.log(err)
  
    }
  }
 
  

}
const login =()=>{

  navigate("/login");
}


  return (
    <>
    
    <div className="formstyl_reg">
   <div>  {success} </div>

        {/* {
            console.log("userdata",user)
        } */}
      <Form>
        <h2>User Registration</h2> <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={user.name} placeholder=" Enter Name"  onChange={handleChange}/>
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" value={user.email} placeholder="Enter email"onChange={handleChange} />
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"name="password" value={user.password}  placeholder="Password" onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> Confirm Password</Form.Label>
          <Form.Control type="password" name="conf_password" value={user.conf_password} placeholder=" Re-Enter Password" onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={register}>
          Register
        </Button>
        <span> or </span>
        <Button variant="primary" type="submit" onClick={login}>
          Log In
        </Button>
      </Form>
      </div>
    </>
  );
}
