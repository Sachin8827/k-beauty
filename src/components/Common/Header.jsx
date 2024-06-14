import "../../assets/styles/Header.css";
import logo from '../../assets/images/logo.png'
function Header() {
  return (
    <>
      <header>
        {/* <div className='container'> */}
          <div className="header">
            <div className='heading'>
              <p>FREE, FAST SHIPPING FOR ALL UAE ORDERS OVER AED 100</p>
            </div>
            <div className='head-img-icons'>
              <div className="empty"></div>
                <div className="head-img">
                    <img src={logo} />
                </div>
                <div className="head-icons">
                <a href=""><i className='fa-regular fa-user'></i></a>
                <a href=""><i className='fa-solid fa-magnifying-glass'></i></a>
                <a href=""><i className='fa-regular fa-heart'></i></a>
                <a href=""><i className='fa-solid fa-bucket'></i></a>
                </div>
            </div>
            <nav className="navbar">
                <div className='nav-item'>
                    <ul>
                        <li><a href='#'>SHOP ALL</a></li>
                        <li><a href='#'>NEW</a></li>
                        <li><a href='#'>BRANDS</a></li>
                        <li><a href='#'>VALUE SETS</a></li>
                        <li><a href='#'>BLOG</a></li>
                    </ul>
                </div>
                <hr/>
            </nav>
          </div>
        {/* </div> */}
      </header>
    </>
  );
}
export default Header;