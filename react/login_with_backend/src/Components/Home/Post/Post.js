import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Nav_bar from '../Nav_bar'
 import "./Post.css"
export default function Post() {

    const navigate=useNavigate();
    const[info,setInfo]=useState({
        title:"",
        about:"",

    });



    const handleChange=(e)=>{
        const {name,value}= e.target;
        setInfo({
            ...info,
            [name]:value
        })
        // console.log(info)

    }

    const postItem =async (e)=>{
        e.preventDefault();
        if(!info.title || !info.about){
            alert("Fill Required Field")
        }else{
            await axios.post("http://localhost:8000/post",{
                title:info.title,
                about:info.about
            }).then((res)=>{
                // console.log("1",res);
                navigate("/")
                
            })


        }

    }
  return (
      <>
      <Nav_bar  />
      <div className="mainbody">
      <div className="postbody">
        <h2> Create your post</h2> <br />
        <label htmlFor="">Title : </label> <br />
        <input type="text" name="title" id="" value={info.title} placeholder='Enter Title Here' onChange={ handleChange}/> <br />
        <label htmlFor="">About : </label> <br />
         <textarea name="about" id="" cols="30" rows="5" value={info.about} placeholder='Enter Description Here' onChange={handleChange}></textarea> <br />
        <button onClick={postItem}> Submit</button>
       
      </div>
      </div>
     </>
  )
}
