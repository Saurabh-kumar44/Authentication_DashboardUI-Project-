import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Grid, TextField } from '@mui/material';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';



const SendPasswordResetEmail = () => {
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget); // handeling form data
        const actualdata = {
            email: data.get('email'),      //here name={email}
        }
        if (actualdata.email) {
            console.log(actualdata);
            document.getElementById('password-reset-email-form').reset();//automatically reset form data
            setError({ status: true, msg: 'Password reset link successfully sent to your registered mail id', type: 'success' });
        }
        else {
            setError({ status: true, msg: 'Please provide a valid Email', type: 'error' });
        }
    }

    return (
        <>
            <Grid container justifyContent='center'>
                <Grid item sm={6} xs={12}>
                    <Box component='form' noValidate sx={{ mt: 2 }} id='password-reset-email-form' onSubmit={handleSubmit}>
                        <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address'></TextField>
                        <Box textAlign='center'>
                            <Button type='submit' variant='contained' sx={{ textTransform: 'none', mt: 3, mb: 2, px: 5 }}>Send</Button>
                        </Box>
                        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
                    </Box>
                </Grid>
            </Grid>
        </>
    )

}

export default SendPasswordResetEmail