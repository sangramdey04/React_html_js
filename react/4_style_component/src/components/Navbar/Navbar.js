import React, { Component } from 'react'
import { Navbarsty } from '../Styled/Navbarsty'
export default class Navbar extends Component {
  render() {
    return (
       <>
       <Navbarsty>
       <div className="container">
        <div className="logo"><h2>TextUtil</h2></div>
        <div className="list">
            <ul id='items'>
                <li> <a href="/">Home</a> </li>
                <li> <a href="/">About</a> </li>
                <li> <a href="/">Contact Us</a> </li>
                <li> <a href="/">Help</a> </li>
                 
            </ul>
        </div>
        </div>
        </Navbarsty>
       </>
    )
  }
}
