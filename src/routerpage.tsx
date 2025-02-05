import React from 'react'
import {
    BrowserRouter, Routes, Route
} from 'react-router-dom'
import Homepage from './page/Homepage';
import AdminPanel from './page/AdminPanel';
import Login from './page/Login';
import Register from './page/Register';
import AddProductPage from './page/AddProductPage';
import ProductEditPage from './page/ProductEditPage';
import ProductDetail from './page/ProductDetail';
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
            <Route path='/update-product' element={<ProductEditPage />}/>     
            <Route path='/detail-product/**' element={<ProductDetail />}/>     
                                   
        </Routes>
    </BrowserRouter>
  )
}

export default Routerpage;