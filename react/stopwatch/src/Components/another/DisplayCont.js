import React from 'react'

export default function DisplayCont(props) {
  return (
    <>
    <div className="name"> <h2> React Stopwatch </h2></div>
    <div className="time">
     <span> {(props.time.h)>=10? props.time.h : "0"+props.time.h }  </span> &nbsp;&nbsp;:&nbsp;
      <span> {(props.time.m)>=10? props.time.m : "0"+props.time.m }  </span> &nbsp;&nbsp;:&nbsp;
       <span> {(props.time.s)>=10? props.time.s : "0"+props.time.s }  </span>&nbsp;&nbsp;:&nbsp;
        <span> {(props.time.ms)>=10? props.time.ms : "0"+props.time.ms }  </span> &nbsp;
         
    </div>
    
    </>
  )
}