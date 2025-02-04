import React from 'react'
import {
    BrowserRouter, Routes, Route
} from 'react-router-dom'
import Homepage from './page/Homepage';
import AdminPanel from './page/AdminPanel';
import Login from './page/Login';
import Register from './page/Register';
import AddProductPage from './page/AddProductPage';
function Routerpage() {
  return (
    <BrowserRouter future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
        <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='/admin-panel' element={<AdminPanel />}/> 
            <Route path='/add-product' element={<AddProductPage />}/> 
            <Route path='/login' element={<Login />}/> 
            <Route path='/register' element={<Register />}/>                            
        </Routes>
    </BrowserRouter>
  )
}

export default Routerpage;