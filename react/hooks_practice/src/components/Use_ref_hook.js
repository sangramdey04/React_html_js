import React, { useEffect, useRef, useState } from 'react'

export default function Use_ref_hook() {
    const [ count,setCount]= useState(0)
    const prevnum = useRef(0);

    useEffect(()=>{
        prevnum.current = count
    },[count])

const increment =()=>{
   
    setCount(count=>count+1);
}
const decrement =()=>{
 
    if(count!==0){     

        setCount(count=>count-1);
    }
}



  return (
    <div> 
        <h2>Count:{count}</h2>
        <h4>  Previous Number: { prevnum.current}  </h4>
        <button  onClick={increment} > Increment </button>
        <button  onClick={decrement} > Decrement </button>
    </div>
  )
}
