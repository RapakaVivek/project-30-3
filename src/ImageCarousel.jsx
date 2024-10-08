
import React, { useState } from 'react';


const images = [
  'https://via.placeholder.com/600x300?text=Image+1',
  'https://via.placeholder.com/600x300?text=Image+2',
  'https://via.placeholder.com/600x300?text=Image+3',
  'https://via.placeholder.com/600x300?text=Image+4',
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={prevImage}>
        &#10094; 
      </button>
      
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel-image" />
      
      <button className="carousel-button" onClick={nextImage}>
        &#10095; 
      </button>
    </div>
  );
};

export default ImageCarousel;
