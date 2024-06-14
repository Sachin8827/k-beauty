import "../assets/styles/Blog.css";
import testimonials from '../utils/constant/testmonialData'
import { useState, useEffect } from 'react'
function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const totalBlogs = await Promise.all(
        testimonials.map(async (item) => {
          const module = await import(`../assets/images/${item.image}`);
          return { ...item, image: module.default };
        })
      );
      setBlogs(totalBlogs);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <section className="blogs-home">
        <div className='container'>
          <div className='blogs'>
            <h6>READ NOW</h6>
            <h4>ON THE KULT BLOG</h4>
            <div className="testimonials">
              {blogs.map((item, index) => <div className="blog-card" key={index}>
                <div className="blog-img">
                  <img src={item.image} />
                </div>
                <div className="blog-content">
                  <h6>{item.heading}</h6>
                  <p>{item.content}</p>
                  <a href="">Read more</a>
                </div>
              </div>)}
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
export default Blog;
