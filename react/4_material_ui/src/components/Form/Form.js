import React, { Component } from 'react'
 
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
// import { margin } from '@mui/system';

export default class Form extends Component {
  render() {
    return (
       <>
       <Typography gutterBottom variant='h3' align='center'>
        Material-Ui
       </Typography>
       <br />
       <Card style={{maxWidth:450,margin:"0 auto",padding:"15px 5px"}} >
        <CardContent>
        <Typography gutterBottom variant='h4' align='center' sx={{padding:"10px 0"}}>
       Contact Us
       </Typography>
       
             <form  >
            <Grid container spacing={3} >
                <Grid xs={12} sm={6} item>
                    <TextField color='success' label="First Name" placeholder='Enter Your Frist Name' variant="standard" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                    <TextField color='success' label=" Last Name" placeholder='Enter Your Last Name' variant="standard" fullWidth required/>
                </Grid>
                <Grid xs={12} item>
                    <TextField color='success' type="email" label="Email" placeholder='Enter Your Email' variant="standard" fullWidth required/>
                </Grid>
                <Grid xs={12} item>
                    <TextField color='success' type="number" label="Phone No" placeholder='Enter Your Number' variant="standard" fullWidth required/>
                </Grid>
                <Grid xs={12} item>
                    <TextField color='success' type="text" multiline rows={4}  label="Message" placeholder='Enter Your Message' variant="outlined" fullWidth />
                </Grid>
                <Grid xs={12} item>
                    <Button type="submit" variant='contained' fullWidth>Submit</Button>
                 </Grid>

            </Grid>
            </form>
        </CardContent>
       </Card>
       </>
    )
  }
}
