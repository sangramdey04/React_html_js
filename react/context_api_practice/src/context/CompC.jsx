import React from 'react'
import {FirstName}  from "../App"
export default function CompC() {
  return (
    <>
    <FirstName.Consumer>
      {(fname)=>{
         return <h2>My name is {fname} Dey</h2>
      }
      }
   
    </FirstName.Consumer>
    </>
  )
}
