import {useSelector, useDispatch} from 'react-redux'
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import {logOut} from '../../Redux/UserSlice'
import { ThemeContext } from "../../App";
import AddToCart from "../AddToCart";
import logo from "/images/logo.png";
import "../../assets/styles/Cart.css";
import "../../assets/styles/Header.css";
import "../../assets/styles/Cart.css";
function Header({handleInputField}) {
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const {user, isLoggedIn} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const handleCart = () => {
    isLoggedIn ? setIsCartOpen(!isCartOpen) : alert("please Login first")
  };
  const handleLogout = () =>{
    if (isLoggedIn){
      const responseStatus =  confirm("Are you sure")
      responseStatus ? dispatch(logOut()) : ""
    } 
    else {
      alert("You are not logged in")
    }
  }
  const { isDark, toggleMode} = useContext(ThemeContext);
  // const handleDarkmode = (e) => {
  //   e.preventDefault();
  //   const body = document.body;
  //   body.classList.toggle("dark", !darkMode); // Toggle the 'dark' class based on the current state of darkMode
    
  //   setDarkMode(!darkMode); // Toggle the state of darkMode
  // };

  return (
    <>
      <header
        className={
          location.pathname === "/home" || location.pathname==="/" ? "headerforhome" : "headerforother"
        }
      >
        <div className='header'>
          <div className='heading'>
            <p>FREE, FAST SHIPPING FOR ALL UAE ORDERS OVER AED 100</p>
          </div>
          <div className='head-img-icons'>
            <div className='empty'></div>
            <div className='head-img'>
              <img src={logo} alt='Logo' />
            </div>
            <div className='head-icons'>
              <a href='#' onClick={handleLogout}>
                <i className='fa-regular fa-user'></i>
              </a>
              <a href='#' onClick={handleInputField}>
                <i className='fa-solid fa-magnifying-glass'></i>
              </a>
              <a href='#' onClick={toggleMode}>
                <i className='fa fa-moon-o'></i>
              </a>
              <a onClick={handleCart}>
                <i className='fa-solid fa-bucket'></i>
              </a>
            </div>
          </div>
          <nav className='navbar'>
            <div className={`nav-item ${location.pathname === "/home" || location.pathname==="/" ? "" : "navs"}`}>
              <ul>
                <li>
                  <a href='#'>SHOP ALL</a>
                </li>
                <li>
                  <a href='#'>NEW</a>
                </li>
                <li>
                  <a href='#'>BRANDS</a>
                </li>
                <li>
                  <a href='#'>VALUE SETS</a>
                </li>
                <li>
                  <a href='#'>BLOG</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <AddToCart handleCart={handleCart} isCartOpen={isCartOpen} cart={user?.cart} />
      
    </>
  );
}

export default Header;
