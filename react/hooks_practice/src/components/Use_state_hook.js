import React,{useState} from 'react'

export default function Use_state_hook() {
    const [count,setCount]= useState(0);
    const Incre =()=>{
     
        // setCount(count=>count+10);  // this will return the sum of all incremnets
        // setCount(count=>count+10);
        // setCount(count=>count+10);


        // setCount( count+10);         // this will only execute the last value
                                        // as setcount works as a an asynchronous
        // setCount( count+10);
        // setCount( count+20);

        setCount(count=>count+1)
       
        
    }
    const Decre =()=>{
        if(count!==0){     

            setCount(count=>count-1)
        }

    }

  return (
    <>
        <h1> Count:{count}  </h1>
        <button onClick={Incre}> Increment  </button> <br />
        <button onClick={Decre}> Decrement  </button> <br />






    </>
    
  )
}
