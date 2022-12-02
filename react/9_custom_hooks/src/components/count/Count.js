import React,{useState} from 'react'
import useTitle from "../custom_hooks/useTitle"

export default function Count() {
    const [count,setCount]=useState(0);
    //custom hooks
    useTitle(count);

  return (
     <>

    <h2>Custom Hooks</h2>
    <p>Count On screen : {count}</p>
    <button onClick={()=>setCount(count+1)} >Click Here to Increase</button>
    &nbsp;
    <button onClick={()=>setCount(count-1)} >Click Here to Decrease</button>


     </>
  )
}
