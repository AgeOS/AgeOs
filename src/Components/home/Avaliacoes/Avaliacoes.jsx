// TestimonialCarousel.jsx
import { useState, useEffect } from 'react';
import '../../../stylesheets/home/avaliacoes/avaliacoes.scss';
import felipe from '.././../../assets/home/avaliacao.svg'
import maria from '.././../../assets/home/person-indian-origin-having-fun.jpg'
import joao from '.././../../assets/home/freepik-export-202410220303308ci0.jpeg'

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: "Felipe",
      image: felipe,
      text: "Estou muito satisfeito com o AgeOS. Instalei no celular da minha avó e a segurança do sistema a faz se sentir protegida contra golpes, o que me tranquiliza. O suporte ao cliente também é excelente, sempre pronto para ajudar."
    },
    {
      name: "Maria",
      image: maria,
      text: "O AgeOS transformou a maneira como meus pais usam o celular. A interface é intuitiva e as funções de segurança são essenciais para eles."
    },
    {
      name: "João",
      image: joao,
      text: "Recomendo muito o AgeOS. É um sistema que realmente pensa nas necessidades dos idosos e oferece uma experiência segura e agradável."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="testimonial-carousel">
      <h2 className="testimonial-carousel__title">
        O que as pessoas dizem sobre o AgeOS
      </h2>
      
      <div className="testimonial-carousel__container">
        {/* <button 
          className="testimonial-carousel__button testimonial-carousel__button--prev" 
        //   onClick={prevSlide}
          aria-label="Depoimento anterior"
        >
          &#8592;
        </button> */}

        <div className="testimonial-carousel__slides">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-carousel__slide ${
                index === currentSlide ? 'active' : ''
              }`}
            >
              <div className="testimonial-carousel__content">
                <div className="testimonial-carousel__profile">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-carousel__image"
                  />
                  <p className="testimonial-carousel__name">{testimonial.name}</p>
                </div>
                <div className="testimonial-carousel__text-container">
                  <span className="testimonial-carousel__quote_1">&ldquo;</span>
                  <p className="testimonial-carousel__text">{testimonial.text}</p>
                  <span className="testimonial-carousel__quote_2">&rdquo;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      {/*  <button 
          className="testimonial-carousel__button testimonial-carousel__button--next" 
        //   onClick={nextSlide}
          aria-label="Próximo depoimento"
        >
           &#8594; 
        </button>*/}
      </div>

      <div className="testimonial-carousel__indicators">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`testimonial-carousel__indicator ${
              index === currentSlide ? 'active' : ''
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir para depoimento ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;