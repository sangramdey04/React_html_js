import express from "express"
import cors from "cors"
import mysql from "mysql"

const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"registration_db"
    })
    app.get("/",(req,res)=>{
        res.json("Hii from backend");
    })

    app.get("/users",(req,res)=>{
        const q = "SELECT * from users"
        db.query(q,(err,data)=>{
            if(err)
            {
                return res.json(err);
            }else{
                return res.json(data);
            }
        })
    })

    app.post("/register",(req,res)=>{
        const name= req.body.name;
        const email=req.body.email;
        const password=req.body.password;

        const q = "INSERT INTO users (`name`,`email`,`password`) Values(?,?,?)";
        // const v = "SELECT * from users where  email=? and password=?";
        
        db.query(q,[name,email,password],(err,data)=>{
            if(err)
            {
                return res.json(err);
            }else{
                // return res.json("User has been created");
                return res.json(data);
            }

        })

      
    })
    app.post("/login",(req,res)=>{
      
        const email=req.body.email;
        const password=req.body.password;

        const q = "SELECT * from users where email=? and password =?";
       
        
        db.query(q,[email,password],(err,data)=>{
            if(err)
            {
                return res.json(err);
            }else{
                // return res.json("User has been created");
                return res.json(data);
            }

        })
    })

    // app.post("/users",(req,res)=>{
    //     const q = "INSERT INTO users (`name`,`email`,`password`) Values(?)";
    //     // const values =["new book","email from backend","password from backend"];
    //     const values =[ 
    //         req.body.name,
    //         req.body.email,
    //         req.body.password,

    //     ];
    //     db.query(q,[values],(err,data)=>{
    //         if(err)
    //         {
    //             return res.json(err);
    //         }else{
    //             return res.json("User has been created");
    //             // return res.json(data);
    //         }

    //     })
    // })

app.listen(8000,()=>{
    console.log("Yahoo! Connected to backend ");
})