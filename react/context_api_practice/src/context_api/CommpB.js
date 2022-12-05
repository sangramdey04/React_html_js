import React ,{useContext}from 'react'
import { FirstName } from '../App'
export default function CommpB() {

  const fname = useContext(FirstName)
  return (
   <>

      <h2>I am From {fname}</h2>
   </>
  )
}
