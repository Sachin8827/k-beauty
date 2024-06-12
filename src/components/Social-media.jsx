import data from "./data";
import {useState, useEffect} from 'react'
import './Social-media.css'
function SocialMedia(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
        const productsWithImages = await Promise.all(
            data.map(async (item) => {
            const module = await import(`../assets/${item.image}`);
            return { ...item, image: module.default };
            })
        );
        setProducts(productsWithImages);
        };

        fetchProducts();
    }, []);
    return<>
        <section>
             <div className="container">
                <div className="socalmedia">
                        <h6>FOLLOW OUR JOURNEY</h6>
                        <h5>@KBEAUTYARABIA</h5>
                        <div className="social-media-container">
                        {products.map((product, index) =><div className="social-media-card">
                                    <img src={product.image}/>
                                    <div className='overlay'>
                                        <i
                                        className='fa-brands fa-instagram'
                                        style={{ color: "white", zIndex:1, fontSize : "1.2rem"}}
                                        ></i>
                                    </div>
                        </div>)}
                        </div> 
                </div>    
            </div>   
        </section>
    </>
}
export default SocialMedia;