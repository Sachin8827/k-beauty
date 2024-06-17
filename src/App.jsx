
import './App.css'
import Header from './components/Common/Header'
import {PublicRoute} from './Auth/Protected'
import Footer from './components/Common/Footer'

import { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Signup from './components/auth/Signup'
import Login from './components/auth/LoginForm'
import ProductPage from './Pages/ProductPage'
import HomePage from './Pages/HomePage'
import './assets/styles/Responsive.css'
import Products from './components/Products'
import Brands from './Pages/Brands'
import SpecificBrand from './Pages/SpecificBrand'
function App() {
  let [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header/>
      <Routes>
        {/* <Route path='/' element={<ProtectedRoute isLoggedIn={isLoggedIn}><HomePage /></ProtectedRoute>} /> */}
        <Route path='/signup' element={<PublicRoute isLoggedIn={isLoggedIn}><Signup /></PublicRoute>} />
        <Route path='/login' element={<PublicRoute isLoggedIn={isLoggedIn}><Login setLoggedIn={setLoggedIn} /></PublicRoute>} />
        {/* <Route path="/productdetail/:id" element={<ProtectedRoute isLoggedIn={isLoggedIn}><ProductPage/></ProtectedRoute>}/> */}
        <Route path="/productdetail/:id" element={<ProductPage/>}/>
        <Route path="/" element={<HomePage />}/>
        <Route path='/brands' element={<Brands/>}/>
        <Route path='/specific' element={<SpecificBrand/>}/>
      </Routes>
     <Footer />
    </>
  );
}

export default App
