import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Crie um arquivo App.css vazio no mesmo diretório

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
  ];

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container mt-5">
      <div className="carousel">
        <img src={images[currentIndex]} className="d-block w-100" alt={`Image ${currentIndex + 1}`} />
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-primary me-2" onClick={goToPrevSlide}>Previous</button>
        <button className="btn btn-primary" onClick={goToNextSlide}>Next</button>
      </div>
    </div>
  );
}

export default App;