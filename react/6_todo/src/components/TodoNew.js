import React,{useState} from 'react'
import './Style_todo/TodoNew.css'
export default function TodoNew() {

    const [data,setData] = useState('');
    const [items,setItems] = useState([]);
   const[strike,setStrike]=useState(false);

    const addItems = ()=>{
        if(!data){
            alert("please put data");
        }else{
            setItems([...items,data]);
            setData('');
        }
        
    }


    const crossItem=event=>{
        // event.target.style.textDecoration='line-through'
        // console.log(event.target.previousElementSibling);
        if(strike){
            event.target.previousElementSibling.style.textDecoration='none'
        }else{
            event.target.previousElementSibling.style.textDecoration='line-through'
        }
        setStrike(!strike)
    }


  return (
     <>
     <div className="main-div">
        <div className="child-div">
            <figure id='fig'>
                <h3>Todo List</h3>
                <figcaption>&nbsp;Add your list✌️</figcaption>
            </figure>
            <div className="additems">
                <input type="text" placeholder='Add Items..' value={data} 
                onChange={(e)=>setData(e.target.value)} />
                <span className="material-icons"onClick={addItems}>add</span>
            </div>

            <div className="showitems">
            {
                    items.map((ele,ind)=>{
                        return(
                            <div className="eachitem" key={ind}>
                            <h3> {ele} </h3>
                            <span className="material-icons" onClick={crossItem}>clear</span>
        
                        </div>
                        )
                    })

            }

                
            </div>
        </div>
     </div>
     </>
  )
}
