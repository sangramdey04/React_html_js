import express from "express";
import cors from "cors";


const app = express();
app.use(cors());

app.get("/get",(req,res)=>{
    // console.log(res,1)
    console.log(req,"2")
    res.send("Hello from server again")
})

app.listen(8000,()=>console.log("Server Connectedd"));