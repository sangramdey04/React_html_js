import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
 
import { incNum,decNum,multNum,devideNum } from '../action/action'
 

export default function Counter() {
  const plusMinus = useSelector(state=>state.countNumber) 
  const MultNum = useSelector(state=>state.MultNumber) 
  const dispatch = useDispatch()
  const increment =()=>{
    
    dispatch(incNum(1))
  }
  const decrement =()=>{
    if(plusMinus>0)
    
    dispatch(decNum(1))
  }
  return (
    <>
        <h2>Increment and Decrement</h2>
        <input type="text" value={plusMinus} /> <br /> <br />
        <button style={{height:"50px",width:"80px"}} onClick={increment}> <span >+ 😀</span></button> <span></span>
        <button style={{height:"50px",width:"80px"}} onClick={decrement }>- 😒</button>



        <h2>Devide and Multiply</h2>
        <input type="text" value={MultNum} /> <br /> <br />
        <button style={{height:"50px",width:"80px"}} onClick={()=>dispatch(multNum(10))}>*</button> <span></span>
        <button style={{height:"50px",width:"80px"}} onClick={()=>dispatch(devideNum(5))}>/</button>
    </>
  )
}
