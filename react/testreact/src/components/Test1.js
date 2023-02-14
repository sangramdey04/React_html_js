// import React from "react";

// class SomeClass extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         isBtnClicked: false,
//         // color:"red"
//       };
//     //1.

//     // this.handleClick=this.handleClick.bind(this)
//     }
    
//     // handleClick(e) {
//     //   this.setState({ isBtnClicked: true }); //to handle this problem we have to
//     //                                         // use either 1 or 2 no. methods
      
//     // }

//     //2. 
//      handleClick=(e)=> {
//       this.setState( {isBtnClicked:true});
      
//     }
  
    
//     render() {
//       return (
//         <>
//           {this.state.isBtnClicked ? "Btn Clicked" : "Btn Didn't Clicked"}
//           <br />
//           <button onClick={this.handleClick}>click me</button>
//         {console.log(this.state.isBtnClicked)}


//         {/* <h2>The colour is {this.state.color}</h2> */}

//         </>
//       );
//     }
//    }
//    export default SomeClass;

   

// import React,{useState,useEffect} from 'react'

// export default function Test1() {

// const [count,setCount]=useState(0);

// const increment=()=>{
//    setCount(prev => count+1)
//    setCount(count+1)
//    setCount(count+1)
//    setCount(count+1)
//    setCount(count+1)
//    setCount(count+1)
// }
// const decrement=()=>{
//   setCount(count-1)
// }
//   return (
//      <>
//     <h2>count:{count}</h2>
//     <button onClick={increment}>+</button>
//     <button onClick={decrement}>-</button>
     
//      </>
//   )
// }

// useEffect(()=>{
//   let time = setTimeout(()=>{

//   },3000)
//   return()=>{
//     clearTimeout(time)
//   }
// },[])


import React from "react"


class SomeClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBtnClicked: false,
    };
  }
 
 
  handleClick (e) {
    this.setState({ isBtnClicked: true });
  }
 
 
  render() {
    return (
      <>
        {this.state.isBtnClicked ? 'Btn Clicked' : "Btn Didn't Clicked"}
        <button onClick={this.handleClick}>click me</button>
      </>
    );
  }
 }

 export default SomeClass;









