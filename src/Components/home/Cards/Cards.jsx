import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../../../stylesheets/home/Cards/cards.scss";
import celularNotar from "../../../assets/home/celular-notas.png";
import celularFrente from "../../../assets/home/celular-de-frente.png";
import celularPhishing from "../../../assets/home/celular-phishing.png";

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(1);

//

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
//   };

//   return (
//     <div className="carousel">
//       <div className="carousel__container">
//         {photos.map((photo, index) => (
//           <div
//             key={index}
//             className={`carousel__item ${index === currentIndex ? 'carousel__item--active' : ''}`}
//           >
//             <img
//               src={photo}
//               alt={`Slide ${index + 1}`}
//               className="carousel__image"
//             />
//           </div>
//         ))}
//       </div>
//       <button onClick={prevSlide} className="carousel__button carousel__button--prev">
//         <ChevronLeft size={24} />
//       </button>
//       <button onClick={nextSlide} className="carousel__button carousel__button--next">
//         <ChevronRight size={24} />
//       </button>
//     </div>
//   );
// };

// export default Carousel;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Array base de fotos
  const basePhotos = [
    celularNotar,
    celularFrente,
    celularNotar,
    celularPhishing,
  ];

  // Triplicar o array para criar efeito infinito
  const photos = [...basePhotos, ...basePhotos, ...basePhotos, ...basePhotos];

  const moveToIndex = useCallback(
    (index) => {
      if (!isAnimating) {
        setIsAnimating(true);

        // Calcular o índice real considerando o array triplicado
        let realIndex = index;
        const totalLength = basePhotos.length;

        // Se chegou ao final do último conjunto
        if (index >= totalLength * 2) {
          realIndex = index - totalLength;
        }
        // Se voltou antes do primeiro conjunto
        else if (index < totalLength) {
          realIndex = index + totalLength;
        }

        setCurrentIndex(realIndex);
        setTimeout(() => setIsAnimating(false), 500);
      }
    },
    [basePhotos.length, isAnimating]
  );

  const nextSlide = () => {
    const nextIndex = currentIndex + 0.9;
    if (nextIndex >= photos.length) {
      setCurrentIndex(basePhotos.length); // Volta para o conjunto do meio
    } else {
      moveToIndex(nextIndex);
    }
  };

  const prevSlide = () => {
    const prevIndex = currentIndex - 2.1;
    if (prevIndex < 0) {
      setCurrentIndex(basePhotos.length * 2 - 1); // Vai para o final do conjunto do meio
    } else {
      moveToIndex(prevIndex);
    }
  };

  const calculateTransform = () => {
    const slideWidth = 53;
    const offset = -currentIndex * slideWidth;
    return `translateX(${offset}%)`;
  };

  // Calcular o índice visível para os dots
  // const visibleIndex = currentIndex % basePhotos.length;

  return (
    <div className="carousel">
      <div
        className="carousel__container"
        style={{
          transform: calculateTransform(),
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`carousel__slide ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={photo} alt={`Slide ${(index % basePhotos.length) + 1}`} />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="carousel__button carousel__button--prev"
        disabled={isAnimating}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="carousel__button carousel__button--next"
        disabled={isAnimating}
      >
        <ChevronRight size={24} />
      </button>

      {/* <div className="carousel__dots">
        {basePhotos.map((_, index) => (
          <button
            key={index}
            className={`carousel__dot ${
              index === visibleIndex ? "active" : ""
            }`}
            onClick={() => moveToIndex(index + basePhotos.length)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
