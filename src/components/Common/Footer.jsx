import "../../assets/styles/Footer.css";
import insta from "/images/instagram.svg";
import fb from "/images/facebook.svg";
import youtube from "/images/youtube.svg";
function Footer() {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='footer'>
            <div className='footer-about'>
              <h5>ABOUT THE SHOP</h5>
              <p>
                Auguste The Label is a boutique Australianbrand dreamt up by
                Byron Bay nativeEbony Eagles.
              </p>

              <div className='social-media-icons'>
                <a href=''>
                  <img src={insta} />
                </a>
                <a href=''>
                  <img src={fb} />
                </a>
                <a href=''>
                  <img src={youtube} />
                </a>
              </div>
            </div>
            <div className='footer-customer'>
              <h5>CUSTOMER CARE</h5>
            <ul>

            <li> <a href='#'>Contact us</a></li>
              
                <li>
                  <a href='#'>FAQ</a>
                </li>
                <li>
                  <a href='#'>The KULT</a>
                </li>
                <li>
                  <a href='#'>Beauty Dictionary</a>
                </li>
                <li>
                  <a href='#'>Skincare 101</a>
                </li>
                <li>
                  <a href='#'>Skin Konsult</a>
                </li>
              </ul>
            </div>
            <div className='footer-about-2nd'>
              <h5>ABOUT</h5>
              <ul>
                <li>
                  <a href='#'>Our Story</a>
                </li>
                <li>
                  <a href='#'>Kanvas Scoop</a>
                </li>
                <li>
                  <a href='#'>Shipping and Returns</a>
                </li>
                <li>
                  <a href='#'>Terms of Use</a>
                </li>
                <li>
                  <a href='#'>Careers / Affiliates</a>
                </li>
              </ul>
            </div>
            <div className='footer-join'>
              <h5>JOIN</h5>
              <label htmlFor="email">Join us and we'll love you forever</label>
              <input type='text' placeholder='Enter your email address' id="email" />
              <div className="btn-sub">
                  <button className="buttonForFooter">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
        <div className='trademark'>
          <i className='fa-regular fa-copyright'></i>
          <p>&nbsp;&nbsp;Copy Right K-Beauty</p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
