import "../assets/styles/Cart.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateQuantity, removeCartItem } from "../Redux/UserSlice";
function AddToCart({ isCartOpen, handleCart, cart }) {
  console.log(cart);
  const dispatch = useDispatch();
  const handleQuantity = (id, num) => {
    dispatch(updateQuantity({ id, num }));
  };
  const removeItem = (index) => {
    dispatch(removeCartItem(index));
  };
  const calculatePrice =  () =>{
        let sum = 0;
        const prices = cart.map((item) => item.quantity * item.product.price);
        return  prices.reduce((sum, price) => sum + price, 0);
  }
  return (
    <>
      <section className='cart'>
        <div className={`cart ${isCartOpen ? "cart-open" : ""}`}>
          <div className='cart-heading'>
            <h2>CART</h2>
            <i class='fa fa-times' onClick={handleCart} aria-hidden='true'></i>
          </div>
          <div className='cart-content'>
            <p>Spend $28 more and get free shipping!</p>
            <div className='carts'>
              {/* yaha map lagega */}
              {cart
                ? cart.map((item, index) => (
                    <div className='cart-item' key={index} style={{paddingBottom : '15px', borderBottom : '1px solid #E2E2E2'}}>
                      <div className='cart-image'>
                        <img src={`/images/${item.product.image}`} alt='' />
                      </div>
                      <div className='cart-info' >
                        <h6>{item.product.name}</h6>
                        <sub>{item.product.price}$</sub>
                        <div className='manage'>
                          <div className='changeQuantity'>
                            <i
                              className='fa-solid fa-minus'
                              style={{
                                fontSize: "0.8rem",
                                cursor: "pointer",
                                color: item.quantity == 1 ? "grey" : "black",
                              }}
                              onClick={() => handleQuantity(item.product.id, 1)}
                            ></i>
                            <h6>{item.quantity}</h6>
                            <i
                              className='fa-solid fa-plus'
                              style={{
                                fontSize: "0.8rem",
                                cursor: "pointer",
                              }}
                              onClick={() => handleQuantity(item.product.id, 0)}
                            ></i>
                          </div>
                          <a onClick={() => removeItem(index)}>REMOVE</a>
                        </div>
                      </div>
                    </div>
                  ))
                : "No Product in cart"}
                <div className="checkoutButton">
                              <strong>Add Order Note</strong>
                              <h5>Shipping & taxes calculated at checkout</h5>
                        <button>Checkout &nbsp;&nbsp; &#9679; &nbsp;&nbsp; {calculatePrice()}</button>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AddToCart;
