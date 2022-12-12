import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const[count,setCount]= useState(0);
    const[item,setItem]= useState(10);

    //without memo

    // function multCount(){
    //     console.log("I am function"); //this function also get called when clicked updateitem button in normal case 
    //                                 // (see console)
    //                                  //so to prevent this we need to use  memo
    //         return count*2;
    // }


    //using memo we can prevent this

    const memoMultiCount = useMemo(  function multCount(){
        console.warn("I am function"); //this function don't get called when clicked updateitem button
                                    // (see console)
                                     
            return count*2;
    },[count])
    


  return (
    <>
     <div>UseMemo</div>
    <h2>Count:{count}</h2>
    <h2>Item:{item}</h2>

    {/* {without memo} */}
    {/* <h3>Multiply Count with 2 :- {multCount()}</h3> */}

    {/* {with memo} */}
    <h3>Multiply Count with 2 :- {memoMultiCount}</h3>


    <button onClick={()=>setCount(count+1)}>Update Count</button>
    <button onClick={()=>setItem(item+10)}>Update Item</button>

    </>
   
  )
}
