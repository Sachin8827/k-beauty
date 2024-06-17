import React, { useState, useEffect } from 'react';
import '../assets/styles/Brands.css';

function ShowBrands({ imageData, letter, nameData }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const productsWithImages = imageData.map((item) => {
      const url = `/assets/images/${item}`;
      return { name: item, url };
    });
    setImages(productsWithImages);
  }, [imageData]);

  return (
    <section className="show-brands">
      <div className="container">
        <div className="brand-category">
          <div className="letter-name">
            <h4>{letter}</h4>
          </div>
          <div className="images">
          {images.map((item, index) => (
              <div className="detail" key={index}>
                <div className="brand-image">
                  {item.url ? (
                    <img src={item.url} alt={item.name} />
                  ) : (
                    <p>Image not available</p>
                  )}
                </div>
                <h5>{nameData[index]}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowBrands;
