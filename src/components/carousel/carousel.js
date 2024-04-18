// Carousel.js
import React, { useState } from 'react';
import './carousel.css';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel-container" style={{margin:'0px'}}>
      <button onClick={handlePrev} style={{color:'transparent'}}>&lt;</button>
      <div className="carousel-content">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >


<div className="discount">
        <div className="discountInfo"><h1>50% Off For Your First Shopping</h1>
        <p>Lorem ipsum dolor sit amet, consectuter adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis</p>
        <p id="visitCollection">Visit Collection</p>
      </div>
        <div className="discountGadget">
          <img src={item.cover} id="headSetImg"></img>
        </div>
      </div>

{/* 
            <img src={item.cover} alt={`carousel-item-${index}`} />
            <p>{item.content}</p> */}
          </div>
        ))}
      </div>
      <button onClick={handleNext} style={{color:'transparent'}}>&gt;</button>
    </div>
  );
};

export default Carousel;
