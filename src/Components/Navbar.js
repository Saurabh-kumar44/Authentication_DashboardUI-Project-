import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import AdbIcon from '@mui/icons-material/Adb';


export const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            KISNA
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shop
          </Typography>
          <Button component={NavLink} to='/'sx={{color:'white',textTransform:'none'}}style={({isActive}) => {return { backgroundColor: isActive ? "#6d1b7b" : "" }}}>Home</Button>
          <Button component={NavLink} to='/contact'style={({isActive}) => {return { backgroundColor: isActive ? "#6d1b7b" : "" }}}sx={{color:'white',textTransform:'none'}}>Contact</Button>
          <Button component={NavLink} to='/login'style={({isActive}) => {return { backgroundColor: isActive ? "#6d1b7b" : "" }}}sx={{color:'white',textTransform:'none'}}>Login/Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}
