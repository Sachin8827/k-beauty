import "../../assets/styles/Header.css";
import logo from "/images/logo.png";
import { useLocation } from "react-router-dom";
import "../../assets/styles/Cart.css";
// import AddToCart from "../AddToCart";
import { useState } from "react";
import "../../assets/styles/Cart.css";
import AddToCart from "../AddToCart";
import {useSelector} from 'react-redux'
function Header() {
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const {user, isLoggedIn} = useSelector(state => state.user)
  const handleCart = () => {
    isLoggedIn ? setIsCartOpen(!isCartOpen) : alert("please Login first")
  };

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
              <a href='#'>
                <i className='fa-regular fa-user'></i>
              </a>
              <a href='#'>
                <i className='fa-solid fa-magnifying-glass'></i>
              </a>
              <a href='#'>
                <i className='fa-regular fa-heart'></i>
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

      <AddToCart handleCart={handleCart} isCartOpen={isCartOpen} cart={user.cart} />

    </>
  );
}

export default Header;
