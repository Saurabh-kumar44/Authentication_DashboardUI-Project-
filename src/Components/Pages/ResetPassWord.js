import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Grid, TextField } from '@mui/material';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';


const ResetPassWord = () => {
    const navigate = useNavigate();
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget); // handeling form data
        const actualdata = {
            password: data.get('Reset_Password'),      //here name={email}
            confirm_password: data.get('confirm_Reset_password')
        }
        if (actualdata.password && actualdata.confirm_password){
            if(actualdata.password == actualdata.confirm_password){
                console.log(actualdata);
                document.getElementById('password-reset-form').reset();//automatically reset form data
                setError({ status: true, msg: 'Password reset Successfully, Redirecting to Login page', type: 'success' });
                setTimeout(()=>{
                    navigate('/login');
                },2000)
            }else{
                setError({ status: true, msg: 'Password do not match!', type: 'error' });
            }
        }
        else {
            setError({ status: true, msg: 'All field are required', type: 'error' });
        }
    }

    return (
        <>
            <Grid container justifyContent='center'>
                <Grid item sm={6} xs={12}>
                <h1>Password reset</h1>
                    <Box component='form' noValidate sx={{ mt: 2 }} id='password-reset-form' onSubmit={handleSubmit}>
                        <TextField type='password' margin='normal' required fullWidth id='password' name='Reset_Password' label='New Password'></TextField>
                        <TextField type='password' margin='normal' required fullWidth id='confirm_password' name='confirm_Reset_password' label='Confirm New Password'></TextField>
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

export default ResetPassWord