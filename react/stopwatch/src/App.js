import './App.css';
import Stopwatch from './Components/Stopwatch';
import React, { useState } from "react";
 
import DisplayCont from "./Components/another/DisplayCont";
import BtnCont from "./Components/another/BtnCont"

function App() {
  const[time,setTime]=useState({ms:0,s:0,h:0,m:0});
const[interv,setInterv]=useState();
const [status,setStatus]=useState(0);
const [isPause,setIsPause]=useState(false);
const [isActive,setIsActive] = useState(false)

 var updatedMs = time.ms;var updatedS = time.s;var updatedH = time.h;var updatedM = time.m;

const start =()=>{
    run();
   setInterv(setInterval(run,10));
   setIsPause(true);
   setStatus(1);
   setIsActive(true);
    
   
}

const pause =()=>{
    clearInterval(interv);
    setIsPause(!isPause);
    
}
const resume =()=>{
    setIsPause(!isPause);
    setInterv(setInterval(run,10));
    
}
const reset =()=>{
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0,s:0,h:0,m:0});
    setIsActive(false);
   
}

const run=()=>{
    if(updatedM=== 60){
        updatedH++;
        updatedM =0;
    }
     if(updatedS=== 60){
        updatedM++;
        updatedS =0;
    }
     if(updatedMs=== 100){
        updatedS++;
        updatedMs =0;
    }
    updatedMs++;
    return setTime({ms:updatedMs,s:updatedS,h:updatedH,m:updatedM});
    
};

  return (
    // <div className="main-section">
    //   <div className="clock-holder">
    //     <div className="stopwatch">
    //         {/* <Stopwatch/> */}
            
    //     </div>
    //   </div>
     
    // </div>


    <div className="App">
    <DisplayCont time={time}/> <br /><br />
    <BtnCont status={status} isPause={isPause} resume={resume} pause={pause} start={start} reset ={reset} isActive={isActive}  />
</div>
  );
}

export default App;
