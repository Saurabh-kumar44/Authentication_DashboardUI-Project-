import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Grid, TextField} from '@mui/material';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';


const ChangePassword = () => {
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
        password: data.get('Change_Password'),//here name={password}
        password_confirmation: data.get('confirm_Changed_password'),
        tc: data.get('tc')
      }
      if(actualdata.password && actualdata.password_confirmation){
        if(actualdata.password === actualdata.password_confirmation){
            console.log(actualdata);
            document.getElementById('password-changed-form').reset();//automatically reset form data
            setError({status:true, msg:'Password Changed Successfully',type:'success'});
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
        <Grid container justifyContent='center'>
                <Grid item sm={6} xs={12}>
                <h1>Change Password</h1>
                    <Box component='form' noValidate sx={{ mt: 2 }} id='password-changed-form' onSubmit={handleSubmit}>
                        <TextField type='password' margin='normal' required fullWidth id='password' name='Change_Password' label='New Password'></TextField>
                        <TextField type='password' margin='normal' required fullWidth id='confirm_password' name='confirm_Changed_password' label='Confirm New Password'></TextField>
                        <Box textAlign='center'>
                            <Button type='submit' variant='contained' sx={{ textTransform: 'none', mt: 3, mb: 2, px: 5 }}>Confirm</Button>
                        </Box>
                        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
                    </Box>
                </Grid>
            </Grid>
    </>
  )
}

export default ChangePassword