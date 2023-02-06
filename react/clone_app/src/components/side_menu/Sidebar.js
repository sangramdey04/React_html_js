import React from 'react'
import "./Sidebar.css"
 
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Switch from '@mui/joy/Switch';
import DarkMode from '@mui/icons-material/DarkMode';


export default function Sidebar() {
   const logout=(e) =>{
     document.cookie = `id=; expires=Thu, 18 Dec 2013 12:00:00 UTC`
      navigate("/login");
   }

   const navigate = useNavigate();
  return (
   <>
   <div className="sidebar">
     <div className="sidebartop">
        <h1>InstaGram</h1>

     </div>
     <div className="sidebarmid">
        <ul>
         <Link to="/" className='link' ><li><HomeIcon/><span>Home</span></li></Link> 
         <Link to=""className='link'><li><SearchIcon/><span>Search</span></li></Link>   
         <Link to=""className='link' > <li><NotificationAddIcon/><span>Notification</span></li></Link> 
         <Link to="/create"className='link'><li><AddCircleOutlineIcon/><span>Create</span></li></Link>   
         <Link to=""className='link'> <li><Person2Icon/><span>Profile</span></li></Link>  
        
        </ul>
        <Switch
      slotProps={{
        input: { 'aria-label': 'Dark mode' },
        thumb: {
          children: <DarkMode />,
        },
      }}
      sx={{
        '--Switch-thumb-size': '28px',
      }}
    />
        
       
     </div>
     <div className="sidebarbottom">
        
        <button  onClick={logout}><LogoutIcon/><span >Log Out</span> </button>
     </div>
   </div>
   </>
  )
}
