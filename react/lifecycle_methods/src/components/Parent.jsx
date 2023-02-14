import React, { Component } from 'react'
import Child from './Child';

export default class Parent extends Component {
    constructor(props){
        super(props);
         
        this.state={
            name:"Parent"
        }
    }
    // static getDerivedStateFromProps(props,state){
    //     console.log("getDerivedStateFromProps called right before the render")
    //     return {name:props.pname}

    // }
    componentDidMount(){
        
        console.log("componentDidMount called")
        setTimeout(()=>{
            this.setState({name:"updated after render by componentDidMount"})
            console.log("updated.")
        },3000)
    }
    // componentDidUpdate(){
    //     console.log("componentDidUpdate called")
    //     // setTimeout(()=>{
    //     //     this.setState({name:"updated after render by componentDidMount"})
    //     // },3000)
    // }
changeName=()=>{
    this.setState({name:"Changed from parent component"})
}
// componentWillUnmount(){  // in function based it also can be used as cleanup function 
//     console.log("Component removed")
// }
  render() {
    
    // console.log(this.state.name,99)
    return (
      <div>
     
        {/* <h2> I am {this.state.name}</h2> */}

        <Child num={this.state.name}/>
        <button onClick={this.changeName}>Change name</button>



      </div>
    )
  }
}
