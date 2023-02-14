import React, { useEffect, useState } from 'react'
import Axios from "axios";

export default function Fetch() {
    const [data,setData] = useState("");
    const getData = async()=>{
        const result = await Axios.get("http://localhost:8000/get");
        console.log(result);
        setData(result.data);

    }
    useEffect(()=>{
        getData();
    },[])


  return (
    <>

    <h2> {data} </h2>
    <h3>Hii</h3>
    </>
  )
}
