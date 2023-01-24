import React, { useState } from 'react'
 

export default function Counter({initial} ) {

const[count,setCount]=useState(initial);

const increment =()=>{
    setCount(count=>count+1)

}
const decrement =()=>{
    
    setCount(count=>count-1)

}
  return (
    <>
   Count:<h3 data-testid="count"> {count}</h3>

    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>
  )
}
