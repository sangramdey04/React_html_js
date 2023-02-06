/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import Sidebar from "../../components/side_menu/Sidebar";
import "./CfreatePost.css";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
export default function CreatePost() {
  const navigate = useNavigate();

 const [file,setFile] = useState("");
 const [img,setImg] = useState("");
 const [isLoad,setIsLoad]=useState(false);
 
//  const [isPrev,setIsPrev]=useState(false)
 const [Description,setDescription] = useState("");
 

const handleDescription=(e)=>{
    setDescription(e.target.value)
}
const handleSubmit=(e)=>{
  e.preventDefault();
  setIsLoad(true);
  const formData = new FormData();
  formData.append("file",file)
  formData.append("upload_preset","fw38d9e8")

  axios.post("https://api.cloudinary.com/v1_1/dk8dsm4co/image/upload",formData)
  .then((res)=>{
    // console.log(res);
    const url = res.data.secure_url;
    const time = res.data.created_at;
    
    axios.post("http://localhost:8800/createpost",{
      url,Description,time
    }).then(
      navigate("/")
    )


  })



}

  return (
    <div className="CreatePost">
      <Sidebar />
      <div className="CreatePostContainer">
        <div className="card">
          <div className="top">
            <div className="left">
              <input
                type="file"
                name="img"
                id="file"
                style={{ display: "none" }}
                onChange={(e)=>{
                    setFile(e.target.files[0])
                    // setIsPrev(true);
                    // setImg(URL.createObjectURL(file))
                  
                }}
              />
              <label htmlFor="file">
                {
                    file?(
                        <>
                        <div className="imgprev">

                        
                        {/* // eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img src={URL.createObjectURL(file)} alt="postImg" style={{ height: "170px ", width: "190px" ,padding:"10px"}}/>
                    
                        </div>
                        </>

                    ):(
                        <InsertPhotoIcon style={{ height: "70% ", width: "70%" }} />

                    )
                }
                   
                  <h5><p>Click to Insert</p></h5> 
              </label>
                
            </div>
            <div className="right">
              <textarea
                name=""
                id=""
                cols="40"
                rows="5"
                placeholder="Description"
                onChange={handleDescription}
              ></textarea>
            </div>
          </div>
          <div className="bottom">
            <button className="postbtn" onClick={handleSubmit}>{isLoad?<CircularProgress/>:"Upload"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
