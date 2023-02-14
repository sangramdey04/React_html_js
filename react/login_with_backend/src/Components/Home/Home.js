import React, { useEffect,useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
 
export default function Home(props) {
  const[name,setName]=useState("");


  const navigate = useNavigate();
  useEffect(()=>{
    const doc = localStorage.getItem("userinfo") ;
    console.log(doc);
    // console.log(JSON.parse(doc).name)
    
    // console.log(doc.split("="));
    // const userName=doc.split("=");
    // console.log(userName[1])
    if(doc){
      navigate("/")
      setName(JSON.parse(doc).name)
      }else{
        navigate("/login");
      }

  },[])

const logout=(e)=>{
  e.preventDefault();
  // document.cookie = "userinfo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
  localStorage.clear();
  navigate("/login")
}


  return (
    <div className='home'>
             
        <h2>   Welcome {name} !🙋‍♂️ </h2> <br />

        <Button variant="outline-danger" onClick={logout}>Log Out</Button>


    </div>
  )
}
