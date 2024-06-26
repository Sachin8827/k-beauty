import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, buyNow } from "../Redux/UserSlice";
import { useSelector } from "react-redux";
import SimpleSlider from "./Common/Slider";
import RenderImage from "./RenderImage";
import productImage from "../utils/constant/ProductImage";
import Rating from "../components/Common/Rating";
import delivery from "/images/delivery.png";
import Accordion from "./Common/Accordion";
import accordionData from "../utils/constant/AccordianData";
import data from "../utils/constant/data";


function ProductDetail({ id }) {
  let [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, cartMessage } = useSelector((state) => state.user);

  const product = data.find((item, index) => item.id == id);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleQuantity = (num) => {
    if (num) {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleBuyNow = (product) => {

    if (typeof user.street === "undefined") {
      navigate('/address')
      console.log("sadfasd")
    } else {
      dispatch(buyNow({ product, quantity }));
      navigate("/summary");
      setAddressPop(false);
    }
  };

  const handleCart = () => {
    dispatch(addToCart({ product, quantity }));
    setTimeout(() => {
      toast.success(cartMessage ? cartMessage : "Item Added");
    }, 200);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className='container'>
        <div className='product-row'>
          <div className='imagecol'></div>
          <div className='forSwap'>
            <SimpleSlider
              data={[{ image: product.image }, ...productImage]}
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
            />
          </div>
          <div className='details'>
            <p>A'PIEU</p>
            <p>{product?.name}</p>
            <Rating value={product?.star} text='reviews' />
            <p>$ {product?.price}</p>
            <div className='quantity'>
              <i
                className='fa-solid fa-minus'
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: quantity === 1 ? "grey" : "var(--content-color)",
                }}
                onClick={() => handleQuantity(1)}
              ></i>
              <input
                type='number'
                min='1'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value * 1)}
                style={{
                  width: "50px",
                  textAlign: "center",
                  border: "none",
                  backgroundColor: "transparent",
                  color: "var(--content-color)",
                }}
              />
              <i
                className='fa-solid fa-plus'
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
                onClick={() => handleQuantity(0)}
              ></i>
            </div>
            <div className='add-to-cart' onClick={() => handleCart()}>
              <p>
                ADD TO CART &nbsp;&nbsp; &#9679; &nbsp;&nbsp;{" "}
                {product?.price * quantity}$
              </p>
            </div>
            <div className='buy-now' onClick={() => handleBuyNow(product)}>
              <p>BUY IT NOW</p>
            </div>
            <i className='fa-regular fa-heart'></i>
            <span>ADD TO WISHLIST</span>
            <hr />
            <RenderImage
              classOfDiv={"dilevery"}
              classOfImage={"dilevery-image"}
              imageName={delivery}
            />
            <div className='override-green'>
              Free UAE Shipping on orders above AED 100.
            </div>
            <div className='override-pink'>Usually ships within 3-5 days</div>
            <div className='product-discription'>
              <p>PRODUCT DETAILS</p>
              <p>{product?.description}</p>
              <p>
                Isntree’s range of broad spectrum sun protection products are
                lightweight and suitable for daily use. Not only do they help
                control skin shine, but also keep skin feeling cool and
                comfortable. These suncreens also contain hyaluronic acid which
                helps deliver deep hydration and strengthen the skin’s moisture
                barrier. Available in a variety of formulations to suit every
                skin type.
              </p>
            </div>
            <div>
              <p
                style={{
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  fontSize: "0.9rem",
                }}
              >
                Product of Korea.
              </p>
              <hr style={{ border: "1px solid #E2E2E2" }} />
              <Accordion accordionData={accordionData} />
            </div>
          </div>
        </div>
      </div>
      <hr style={{ border: "1px solid #E2E2E2", marginTop: "15px" }} />


    </>
  );
}
export default ProductDetail;
