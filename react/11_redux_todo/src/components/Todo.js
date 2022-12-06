import React,{useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {addTodo,deleteTodo,removeTodo} from "../actions/index"
import "./Todo.css"
export const Todo = () => {

    const [inputData,setInputData]= useState("");
    const list = useSelector((state)=>state.todoReducers.list) 
    const dispatch = useDispatch();
  return (
     <>
     <div className="main-div">
        <div className="child-div">
            <figure>
                <figcaption> <h2>To-Do List</h2><br/></figcaption>
            </figure>
            <div className="addItems">
                <input type="text" placeholder='📝 Add here..' 
                value={inputData}
                onChange={(e)=>setInputData(e.target.value)}

                />
                <span className="material-symbols-outlined" title='Add Item' onClick={()=>dispatch(addTodo(inputData),setInputData(""))} >add</span> 
            </div>

            <div className="showItems">

                {
                    list.map((ele)=>{
                        return (
                            <div className="eachItem" key ={ele.id}>
                            <h3>{ele.data}</h3>
                            <span className="material-symbols-outlined" title='Delete Item' onClick={()=>dispatch(deleteTodo(ele.id))}>delete</span>
                            
                        </div>
                        )
                  
                        
                    })
                }
               
                 
            </div>

            <div className="remove">
                <button onClick={()=>dispatch(removeTodo())}>Clear All</button>
            </div>
        </div>
     </div>
     </>
  )
}
