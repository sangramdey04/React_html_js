import React from 'react'

export default function BtnCont(props){
    return (
        <>
        <div className="buttons">
        {
         (props.status===0)?
        
         (  <button onClick={props.start} className="start"> Start </button> )
           
          :((props.status===1 && props.isPause)?(
            <button onClick={props.pause} className="pause" > Pause </button>)
            :
           (<button onClick={props.resume} className="resume"> Resume </button> 
           ))
           
       }
        <button onClick={props.reset} disabled={!props.isActive} className='reset' > Reset </button>
    </div>
        
        
      
        
        </>
    )
}