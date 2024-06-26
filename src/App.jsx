import React from 'react'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Common/Header'
import { PublicRoute } from './Auth/Protected'
import Footer from './components/Common/Footer'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import ProductPage from './Pages/ProductPage'
import HomePage from './Pages/HomePage'
import { ProtectedRoute } from './Auth/Protected'
import OrderSummary from './Pages/OrderSummary'
import Invoice from './Pages/Invoice'
import './App.css'
import './assets/styles/Responsive.css'
import TakeAddress from './components/auth/TakeAddress'
export const ThemeContext = React.createContext();
function App() {
  const { user, isLoggedIn } = useSelector(state => state.user)
  const [inputFieldStatus, setInputFieldStatus] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleInputField = () => {
    isLoggedIn ? setInputFieldStatus(!inputFieldStatus) : alert("Please login first");
  }
  const toggleMode = () => {
    setIsDark((mode) => !mode);
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.classList.toggle('dark');
    }
  };
  return (
    <>
      <ThemeContext.Provider value={{ isDark, toggleMode }} >
        <ToastContainer
        />
        <Header handleInputField={handleInputField} />
        <Routes>
          <Route path="/home" element={<ProtectedRoute isLoggedIn={isLoggedIn}><HomePage inputFieldStatus={inputFieldStatus} /></ProtectedRoute>} />
          <Route path="/" element={<ProtectedRoute isLoggedIn={isLoggedIn}><HomePage inputFieldStatus={inputFieldStatus} /></ProtectedRoute>} />
          <Route path='/signup' element={<PublicRoute isLoggedIn={isLoggedIn}><Signup /></PublicRoute>} />
          <Route path='/login' element={<PublicRoute isLoggedIn={isLoggedIn}><Login /></PublicRoute>} />
          <Route path="/productdetail/:id" element={<ProtectedRoute isLoggedIn={isLoggedIn}><ProductPage /></ProtectedRoute>} />
          <Route path='/invoice' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Invoice user={user} /></ProtectedRoute>} />
          <Route path='/summary' element={<ProtectedRoute isLoggedIn={isLoggedIn}><OrderSummary /></ProtectedRoute>} />
          <Route path='/address' element={<ProtectedRoute isLoggedIn={isLoggedIn}><TakeAddress /></ProtectedRoute>} />
        </Routes>
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default App
