import React, { useEffect,useState } from 'react'
// import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import  Post_comp from './card/Post_comp';
import Nav_bar from './Nav_bar';
//  import Post from './Post/Post';
 import "./Home.css"
export default function Home() {
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
      console.log(name);
      }else{
        navigate("/login");
      }

  },[])




  return (
    <>
    <Nav_bar/>
    <div className='home'>
        {/* <h2>   Welcome  !🙋‍♂️ </h2> <br /> */}
        <div className="postcontainer">

          <Post_comp/>
        </div>
    
          

        {/* <Button variant="outline-danger" onClick={logout}>Log Out</Button> */}


    </div>
    </>
  )
}
