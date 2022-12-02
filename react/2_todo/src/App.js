 import React, { Component } from 'react';
 import ListItem from './ListItem';
 
 export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }

    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text:e.target.value,
        key:e.target.value
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem =this.state.currentItem;
    
    console.log(30,newItem);
    if(newItem.text!==""){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }
  // strikeItem(key){
    
  // }

   render=() => (
    // <div className="container-fluid">
    //       <div className="row">
    //         <div className="col-12">
    //           <h2 className="bg-primary text-white text-center mt-4">
    //             ToDo List
    //           </h2>
    //           <button className="btn btn-success m-2" onClick={this.changeData}>
                 
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    <div className="todo-box">
        <header>
      <form id="to-do-form"onSubmit={this.addItem}>
        <p><center><h3>ToDo List</h3></center></p>
        <input type="text" placeholder='enter text' 
        value={this.state.currentItem.text}
        onChange={this.handleInput}/>
        <button type="submit">Add</button>
      </form>
    </header>
     
    <ListItem items={this.state.items}>
    {/* strikeItem={this.strikeItem} */}
    </ListItem>
   
    
    </div>
  

   );
     
}
 
 