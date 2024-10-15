import React, { useState, useEffect } from 'react';
import './index.css'; 
import SliderOne from './assets/SliderOne.svg';
import SliderTwo from './assets/SliderTwo.svg';
import SliderThree from './assets/SliderThree.svg';
import SliderFour from './assets/SliderFour.svg';
import SliderFive from './assets/SliderFive.svg';
import SliderSix from './assets/SliderSix.svg';
import SliderSeven from './assets/SliderSeven.svg';
import SliderEight from './assets/SliderEight.svg';


/*
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow

-Använde mig av mallen från w3shool och som jag modifierade så att den passar
applikationen "Orchid Travels" utseende mål.
*/

const slides = [
  { src: SliderOne },
  { src: SliderTwo },
  { src: SliderThree },
  { src: SliderFour },
  { src: SliderFive },
  { src: SliderSix },
  { src: SliderSeven },
  { src: SliderEight },
];

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > slides.length) newIndex = 1;
      if (newIndex < 1) newIndex = slides.length;
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1); 
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div>
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`mySlides fade ${slideIndex === index + 1 ? 'active' : ''}`}
            style={{ display: slideIndex === index + 1 ? 'block' : 'none' }}
          >
            <img className="sliderImages" src={slide.src} alt={`Slide ${index + 1}`} />
          </div>
        ))}

        <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
        <a className="next" onClick={() => plusSlides(1)}>❯</a>
      </div>

      <div className="dot-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${slideIndex === index + 1 ? 'active' : ''}`}
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;