import React, { Component } from 'react'

export default class Child extends Component {

    getSnapshotBeforeUpdate(prevState,prevProps){
     return console.log("Prev name was:"+prevState.num)

    }
    componentDidUpdate(){
        return console.log("Current name :"+this.props.num)
    }

  render() {
    return (
      <div>  <h2> I am {this.props.num}</h2></div>
    )
  }
}
