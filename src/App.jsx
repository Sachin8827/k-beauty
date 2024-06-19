
import './App.css'
import {useState} from 'react'
import Header from './components/Common/Header'
import {PublicRoute} from './Auth/Protected'
import Footer from './components/Common/Footer'
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
  const [inputFieldStatus, setInputFieldStatus] = useState(false);

  const handleInputField =() =>{
    isLoggedIn ? setInputFieldStatus(!inputFieldStatus) : alert("Please login first");
  }
  return (
    <>
    <ToastContainer/>
      <Header  handleInputField={handleInputField}/>
      <Routes>
        <Route path="/home"  element={<ProtectedRoute isLoggedIn={isLoggedIn}><HomePage inputFieldStatus={inputFieldStatus} /></ProtectedRoute>} />
        <Route path="/"  element={<ProtectedRoute isLoggedIn={isLoggedIn}><HomePage inputFieldStatus={inputFieldStatus} /></ProtectedRoute>} />
        <Route path='/signup' element={<PublicRoute isLoggedIn={isLoggedIn}><Signup /></PublicRoute>} />
        <Route path='/login' element={<PublicRoute isLoggedIn={isLoggedIn}><Login/></PublicRoute>} />
        <Route path="/productdetail/:id" element={<ProtectedRoute isLoggedIn={isLoggedIn}><ProductPage/></ProtectedRoute>}/>
        <Route path='/invoice' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Invoice user={user}/></ProtectedRoute>}/>
        <Route path='/summary' element={<ProtectedRoute isLoggedIn={isLoggedIn}><OrderSummary/></ProtectedRoute>}/>
        {/* <Route path='/brands' element={<Brands/>}/> */}
      </Routes>
     <Footer />
    </>
  );
}

export default App
