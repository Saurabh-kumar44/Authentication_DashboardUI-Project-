import React from 'react'
import { Button, Grid, Typography } from '@mui/material';
import { CssBaseline } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import ChangePassword from './Auth/ChangePassword';


const DashBoard = () => {
    const navigate = useNavigate();
    const handleLogout=()=>{
        console.log("Logout Clicked");
        navigate('/');
    }

  return (
    <>
       <CssBaseline/>
       <Grid container>
            <Grid item sm={4} sx={{backgroundColor:'grey', p:5, color:'white'}}>
                <h1>Dashboard</h1>
                <Typography variant='h5'>Email: sauravvermas1097v@gmail.com</Typography>
                <Typography variant='h6'>Name: Saurav</Typography>
                <Button variant='contained'color='warning' size='large' onClick={handleLogout}sx={{mt:8}}>Logout</Button>
            </Grid>
            <Grid item sm={8}>
                <ChangePassword/>
            </Grid>
       </Grid>
    </>
  )
}

export default DashBoard