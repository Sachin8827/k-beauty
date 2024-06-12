import "./Products.css";
import data from "./data";
import { useState, useEffect } from "react";
import Rating from "./Rating";
function Products() {
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
  return (
    <>
      <section className="view-all-products">
        <div className='container'>
          <div className="products">
          <div className='pro-heading'>
            <h4>Best sellers</h4>
          </div>
          <div className='product-list'>
            {products.map((product, index) => (
              <a href=''>
                <div className='card'>
                  <div className='product-img'>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className='product-content'>
                    <h6>{product.name}</h6>
                    <div className='star'>
                      <Rating value={product.star} />
                    </div>
                    <p className='price'> $ {product.price}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className='viewAllProduct'>
            <button>View All Product</button>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
export default Products;