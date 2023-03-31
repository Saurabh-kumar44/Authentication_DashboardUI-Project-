import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';



const UserLogin = () => {
  const navigate = useNavigate();
  const [error , setError] = useState({
    status: false,
    msg: "",
    type: ""
  });

  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget); // handeling form data
    const actualdata = {
      email: data.get('email'),      //here name={email}
      password: data.get('password'),//here name={password}
    }
    if(actualdata.email && actualdata.password){
      console.log(actualdata);
      document.getElementById('login-form').reset();//automatically reset form data
      setError({status:true, msg:'Logged in successfully',type:'success'});
      navigate('/dashboard');
    }
    else{
      setError({status:true, msg:'All fields are required',type:'error'});
    }
}

  return (
    <>
        <Box component='form' noValidate sx={{mt: 2}} id='login-form'onSubmit={handleSubmit}>
          <TextField margin='normal'required fullWidth id='email' name='email'label='Email Address'></TextField>
          <TextField type='password'margin='normal'required fullWidth id='password' name='password'label='Password'></TextField>
          <Box textAlign='center'>
            <Button type='submit'variant='contained'sx={{textTransform:'none',mt:3, mb:2, px:5}}>Login</Button>
          </Box>
            <NavLink to='/sendpasswordresetemail'>forgot password</NavLink>
            {error.status? <Alert severity={error.type}>{error.msg}</Alert>: ''}
        </Box>
    </>
  )
}

export default UserLogin;