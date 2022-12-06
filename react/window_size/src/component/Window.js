 import React,{useState,useEffect} from 'react'
 import "./window.css"
 
 export default function Window() {

  const [size,setSize] = useState([window.innerHeight,window.innerWidth]);
  useEffect(()=>{
   
    window.addEventListener("resize",handleSize);
    // console.log(size);
 
  })
  function handleSize(){
    return setSize([window.innerHeight,window.innerWidth])
     
  }


  const [height,width] = size;
   return (
     <>
     <div className="info">
     Height: {height},
      Width: {width}
      </div>
    
     </>
   )
 }
 
