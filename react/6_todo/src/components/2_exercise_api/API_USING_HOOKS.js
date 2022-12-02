import React,{useEffect, useState} from 'react'

export default function Api_using_hooks() {

    const [post,setPost] = useState([]);
    useEffect(()=>{
        const url ='https://jsonplaceholder.typicode.com/posts'
        fetch(url).then(resp=>resp.json())
        .then(resp=>setPost(resp))

    },[])


  return (
     <>
     <div className="total" align="center">
        <h3  >Api-Call using hooks</h3>
        {
            post.map(p=> <div><p>{`${p.id}. ${p.title}`}</p></div>  )
        }
     </div>
     </>
  )
}
