import React,{useState} from 'react'
import "./cals.css"
export default function Calc() {

const [result,setResult]=useState("")

const clickHandler =(e)=>{
    setResult(result.concat(e.target.value))

}

const clear =()=>{
    setResult("");
}
const calculate =()=>{
    setResult(eval(result).toString()); 
}
const clear1=(e)=>{
     setResult(result.slice(0,-1));
   
}
  return (
    <div className="calc">
        <h2>Calculator</h2>
        <div className="calc2">
        <input type="text" placeholder='0' id='ans' value={result} />
        <input type="button" value="9" className='btncolour'onClick={clickHandler}/>
        <input type="button" value="8" className='btncolour'onClick={clickHandler}/>
        <input type="button" value="7" className='btncolour'onClick={clickHandler}/>
        <input type="button" value="/" className='btncolour'id="expression"onClick={clickHandler}/>
        <input type="button" value="6" className='btncolour'onClick={clickHandler}/>
        <input type="button" value="5" className='btncolour'onClick={clickHandler}/>
        <input type="button" value="4" className='btncolour'onClick={clickHandler}/>
        <input type="button" value="*" className='btncolour'id="expression"onClick={clickHandler}/>
        <input type="button" value="3" className='btncolour'onClick={clickHandler}/>
        <input type="button" value="2" className='btncolour'onClick={clickHandler}/>
        <input type="button" value="1" className='btncolour'onClick={clickHandler}/>
        <input type="button" value="+" className='btncolour'id="expression"onClick={clickHandler}/>
        <input type="button" value="0" className='btncolour'onClick={clickHandler}/>
        <input type="button" value="." className='btncolour'onClick={clickHandler}/>
        <input type="button" value="C" className='btncolour'id="expression3"onClick={clear1}/>
        <input type="button" value="-" className='btncolour'id="expression"onClick={clickHandler}/>
        <input type="button" value="=" className='btncolour btn1'id="expression1" onClick={calculate}/>
        <input type="button" value="AC"className='btncolour btn1'id="expression2" onClick={clear}/>
        </div>
    </div>
  )
}
