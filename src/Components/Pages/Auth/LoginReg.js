import { Card, Grid, Tabs, Typography } from '@mui/material'
import Tab from '@mui/material/Tab';
import React, { useState } from 'react'
import pic2 from '../../../images/pic2.png';
import Box from '@mui/material/Box';
import UserLogin from './UserLogin';
import Registration from './Registration';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

//Creating Custom Component
const TabPanel = (props)=>{
    const {children, value, index} = props;
    return (
        <>
            <div role='tabpanle' hidden={value !== index} >
                {value === index && (
                    <Box>{children}</Box>
                    )
                }
            </div>
        </>
    )
}

export const LoginReg = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) =>{
        setValue(newValue);
    }

    return (
        <>
            <Grid container sx={{ height: '90vh' }}>
                <Grid item lg={7} sm={5} sx={{
                    backgroundImage: `url(${pic2})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: {xs:'none',sm:'block'}
                }}>
                </Grid>
                <Grid item lg={5} sm={7} xs={12}>
                    <Card sx={{ width: '100%', height: '70%' }}>
                        <Box sx={{mx:3, height:200}}>
                            <Box sx={{ borderBottom:1, borderColor:'divider'}}>
                                <Tabs value={value} textColor='secondary' indicatorColor='secondary'onChange={handleChange} >
                                    <Tab label="Login" sx={{ textTransform: 'none', fontWeight: 'bold' }} />
                                    <Tab label="Registration" sx={{ textTransform: 'none', fontWeight: 'bold' }}/>
                                </Tabs>
                            </Box>
                            {/*here value is fixed, to make it dynamic we have to make pass a prop and apply onchange event on the tab*/}
                            {/* <TabPanel value={0} index={0}>User Login</TabPanel>  
                            <TabPanel value={0} index={1}>Registration</TabPanel> */}

                            {/* children */}
                            <TabPanel value={value} index={0}><UserLogin/></TabPanel>  
                            <TabPanel value={value} index={1}><Registration/></TabPanel>
                        </Box>
                    </Card>
                        <Box textAlign='center' sx={{mt:2}}>
                        <ShoppingBasketIcon sx={{fontSize:100, color:'grey'}}/>
                        <Typography variant="h5"sx={{fontWeight:'bold'}}>Kisna Shop</Typography>
                        </Box>
                </Grid>
            </Grid>
        </>
    )
}
