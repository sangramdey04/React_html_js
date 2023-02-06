import React,{useEffect} from 'react'
import Sidebar from '../../components/side_menu/Sidebar'
import { useNavigate } from 'react-router-dom';
import Post from '../../components/Post/Post';
 import "./Home.css"
 
export default function Home() {
    const navigate = useNavigate()
    useEffect(()=>{
        const x = document.cookie;
           console.log(x);
        if(x){
            navigate("/")
        }else{
            navigate("/login")
        }

    },[])
  
  return (
    <>
     <div className="home">
    <Sidebar/>
    <div className="homecontainer">
    <Post/>

    </div>

     </div>
    
    </>
    
  )
}
