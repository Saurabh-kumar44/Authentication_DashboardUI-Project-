
import { CssBaseline } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Navbar'

export const Layout = () => {
  return (
    <>
    <CssBaseline/>{/*Used to give default margin and padding to 0*/}
        <Navbar/>
        <Outlet/>
    </>
  )
}
