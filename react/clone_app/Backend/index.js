import express from "express"
import mysql from "mysql"
import cors from "cors"
const app = express();
const db = mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"insta_db"
})
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{ 
    res.json("hello this is the backend of insta ")
})  

app.get("/users",(req,res)=>{
    const q = "SELECT * FROM users"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.get("/posts",(req,res)=>{
    const q = "SELECT * FROM post"
    db.query(q,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

// app.post("/users",(req,res)=>{
//     const q ="INSERT INTO users (`username`,`email`,`password`) VALUES(?)"
//     const values =[ 
//         req.body.username,
//         req.body.email,
//         req.body.password
    
//     ]
//     db.query(q,[values],(err,data)=>{
//         if(err) return res.json(err);
//         return res.json("user has been created succesfully");
//     })
// })
app.post("/register",(req,res)=>{
    console.log(res);
    const q ="INSERT INTO users (`username`,`email`,`password`) VALUES(?)"
    const login="SELECT * from users where email=? and password =?"
    const values =[ 
        req.body.username,
        req.body.email,
        req.body.password
    ]



    db.query(q,[values],(err)=>{
        // console.log(data);
        if(err) return res.json(err);
        
            // console.log(data);
            // return res.send({data});
        } )
        const email= req.body.email;
        const password = req.body.password;
    
        db.query(login,[email,password],(err,data)=>{
            if(err){
                return res.json(err)
            }
            else if(data.length >0){
                return res.send({data});
            }else{
                return res.send({message:"invalid login"})
            }
        })
    })
 

app.post("/login",(req,res)=>{
    const q = "SELECT * from users where email=? and password =?"
    const email= req.body.email;
    const password = req.body.password;

    db.query(q,[email,password],(err,data)=>{
        if(err){
            return res.json(err)
        }
        else if(data.length >0){
            return res.send({data});
        }else{
            return res.send({message:"invalid login"})
        }
    })

})

app.post("/createpost",(req,res)=>{
    const q = "INSERT INTO post (`post_image`,`post_desc`,`post_time`) VALUES(?)"
    console.log(req);
    const values=[
        req.body.url,
        req.body.Description,
        req.body.time,
]

db.query(q,[values],(err,data)=>{
    console.log(data);
    if(err) return res.json(err);
    return res.send({data})
})

})

app.listen(8800,()=>{
    console.log("connected to backend");
})