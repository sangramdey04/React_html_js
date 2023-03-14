import React from 'react'

export default function Square(props) {
  return (
    <div className="square-cont"  onClick={props.onclick} >
        <div className="square">
        <h2>{props.value}</h2>  

        </div>
    </div>
  )
}
