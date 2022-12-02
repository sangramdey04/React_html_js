 
import axios from'axios'
import "../Style/Pokemon.css"

 
 import React,{useEffect,useState} from 'react'
 
 export default function Pokemon() {
    const [myData,setMyData] = useState([]);
    const [error,setError]=useState("");

//using promises
// useEffect(()=>{
//     axios.get('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
//     // .then((res)=> console.log(res.data.results))
//     .then((res)=> setMyData(res.data.results))
//     .catch((e)=>setError(e.message));

// },[])

//using async and await

useEffect(()=>{
//  1.
 getApiData();
},[])


//*1.
const  getApiData = async()=>{
    try {
        const result = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
    setMyData(result.data.results)
        
    } catch (error) {

        setError(error.message)
    }
    
}




   return (
     <>
     <h1>Pokemon Fetching with Axios</h1>
     <br />
     <hr />
     {error!==""&& <h4>{error}</h4> }
     <div className="container">
     <div className="grid">
       
    {
        myData.map((poke)=>{
         const {name,url} = poke;
            return <div className="card"key={url}>
                <h2>{name.slice(0).toUpperCase()}</h2>
                <br />
                <p>{url}</p>
            </div>
        })
     }
     </div>
     </div>

     
     </>
   )
 }
 
