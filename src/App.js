import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Components/Pages/Layout';
import { Home } from './Components/Pages/Home';
import { Contact } from './Components/Pages/Contact';
import { LoginReg } from './Components/Pages/Auth/LoginReg';
import SendPasswordResetEmail from './Components/Pages/Auth/SendPasswordResetEmail';
import ResetPassWord from './Components/Pages/ResetPassWord';
import DashBoard from './Components/Pages/DashBoard';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='login' element={<LoginReg/>}/>
            <Route path='sendpasswordresetemail' element={<SendPasswordResetEmail/>}/>
            <Route path='reset' element={<ResetPassWord/>}/>
          </Route>
            <Route path='/dashboard' element={<DashBoard/>}/>
        </Routes>
      </BrowserRouter>   
    </>
  )
}
export default App;
