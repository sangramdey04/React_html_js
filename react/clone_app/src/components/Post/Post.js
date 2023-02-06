import  React,{useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
 
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
 
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';

 

export default function Post() {
 const[posts,setPosts]=React.useState([]);

 useEffect(()=>{
  const fetchAllPost = async()=>{
    try{
      const postview = await axios.get("http://localhost:8800/posts")
      .then((res)=>{
        setPosts(res?.data);
      })

    }catch(err){
      console.log(err.message);

    }
  }
  fetchAllPost();
 },[])
 
  return (
    <>
    {

      posts.map((post)=>{
        return(
          <Card key={post.post_id} sx={{ maxWidth: 345 }} style={{margin:"8px"}}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            // subheader="September 14, 2016"
            subheader= {post.post_time}
          />
          <CardMedia
            component="img"
            height="194"
            image= {post.post_image}
            alt="Paella dish"
          />
        
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
          <CardContent style={{paddingTop:"0px"}}>
               <p><b>220 likes</b> </p>
            <Typography variant="body2" color="text.secondary">
              {post.post_desc}
            </Typography>
          </CardContent>
       
     
        </Card>

        )
      })
    }
   </>
  );
}