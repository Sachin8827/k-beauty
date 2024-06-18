
import './App.css'
import Header from './components/Common/Header'
import {PublicRoute} from './Auth/Protected'
import Footer from './components/Common/Footer'

import { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import ProductPage from './Pages/ProductPage'
import HomePage from './Pages/HomePage'

import { ProtectedRoute } from './Auth/Protected'
import Brands from './Pages/Brands'
import SpecificBrand from './Pages/SpecificBrand'
import { useSelector } from 'react-redux'
import OrderSummary from './Pages/OrderSummary'
import Invoice from './Pages/Invoice'
import { ToastContainer } from 'react-toastify'
import './assets/styles/Responsive.css'
function App() {
  const {user,isLoggedIn} = useSelector(state => state.user)

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
    <ToastContainer/>
      <Header/>
      <Routes>
        <Route path="/home"  element={<ProtectedRoute isLoggedIn={isLoggedIn}><HomePage /></ProtectedRoute>} />
        <Route path="/"  element={<ProtectedRoute isLoggedIn={isLoggedIn}><HomePage /></ProtectedRoute>} />
        <Route path='/signup' element={<PublicRoute isLoggedIn={isLoggedIn}><Signup /></PublicRoute>} />
        <Route path='/login' element={<PublicRoute isLoggedIn={isLoggedIn}><Login/></PublicRoute>} />
        {/* <Route path="/productdetail/:id" element={<ProtectedRoute isLoggedIn={isLoggedIn}><ProductPage/></ProtectedRoute>}/> */}
        <Route path="/productdetail/:id" element={<ProductPage/>}/>
        <Route path='/brands' element={<Brands/>}/>
        <Route path='/specific' element={<SpecificBrand/>}/>
        <Route path='/summary' element={<OrderSummary/>}/>
        <Route path='/invoice' element={<Invoice user={user}/>}/>
      </Routes>
     <Footer />
    </>
  );
}

export default App
