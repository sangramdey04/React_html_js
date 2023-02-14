import React,{useReducer} from 'react'


export default function Use_reducer_hook() {
    const ini_value = 0
    const reducer =(state,action)=>{
        switch(action.type){
            case "Increment": return state+1;
            case "Decrement": return state-1;
            default: return state;

        }

    }
   
    const[state,dispatch]= useReducer(reducer,ini_value);


  return (
    < >
        
        Use_reducer_hook

        <h2>  {state}  </h2>
        <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
        <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>







    </>
  )
}
