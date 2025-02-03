import React from 'react'
import {
    BrowserRouter, Routes, Route
} from 'react-router-dom'
import Homepage from './page/Homepage';
import AdminPanel from './page/AdminPanel';
import Login from './page/Login';
import Register from './page/Register';
function Routerpage() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='/admin-panel' element={<AdminPanel />}/> 
            <Route path='/login' element={<Login />}/> 
            <Route path='/register' element={<Register />}/>                            
        </Routes>
    </BrowserRouter>
  )
}

export default Routerpage;