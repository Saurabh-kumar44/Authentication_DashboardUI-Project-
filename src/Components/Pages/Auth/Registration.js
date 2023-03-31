import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const Registration = () => {
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
        name:data.get('name'),
        email: data.get('email'),      //here name={email}
        password: data.get('password'),//here name={password}
        password_confirmation: data.get('confirm_password'),
        tc: data.get('tc')
      }
      if(actualdata.name && actualdata.email && actualdata.password && actualdata.tc !== null){
        if(actualdata.password === actualdata.password_confirmation){
            console.log(actualdata);
            document.getElementById('registration-form').reset();//automatically reset form data
            setError({status:true, msg:'Registration successfull',type:'success'});
            navigate('/dashboard')
        }else{
            setError({status:true, msg:'Passwords do not match',type:'error'});
        }
      }
      else{
        setError({status:true, msg:'All fields are required',type:'error'});
      }
}

  return (
    <>
        <Box component='form' noValidate sx={{mt: 2}} id='registration-form'onSubmit={handleSubmit}>
        <TextField margin='normal'required fullWidth id='name' name='name'label='Name'></TextField>
          <TextField margin='normal'required fullWidth id='email' name='email'label='Email Address'></TextField>
          <TextField type='password'margin='normal'required fullWidth id='password' name='password'label='Password'></TextField>
          <TextField type='password'margin='normal'required fullWidth id='confirm_password' name='confirm_password'label='Confirm Password'></TextField>
          <FormControlLabel control={<Checkbox value='agree' color='primary' name='tc'id='tc' />} label="I agree to term and condition" />
          <Box textAlign='center'>
            <Button type='submit'variant='contained'sx={{textTransform:'none',mt:3, mb:2, px:5}}>Join</Button>
          </Box>
            {error.status? <Alert severity={error.type}>{error.msg}</Alert>: ''}
        </Box>
    </>
  )
}

export default Registration