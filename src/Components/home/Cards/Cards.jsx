import  { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../../../stylesheets/home/Cards/cards.scss';
import celularNotar from '../../../assets/home/celular-notas.png'
import celularFrente from '../../../assets/home/celular-de-frente.png'
import celularPhishing from '../../../assets/home/celular-phishing.png'


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const photos = [
    celularNotar,
    celularFrente,
    celularPhishing,
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <div className="carousel">
      <div className="carousel__container">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`carousel__item ${index === currentIndex ? 'carousel__item--active' : ''}`}
          >
            <img
              src={photo}
              alt={`Slide ${index + 1}`}
              className="carousel__image"
            />
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="carousel__button carousel__button--prev">
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} className="carousel__button carousel__button--next">
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;