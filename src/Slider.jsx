// This component, created by (Madelene), displays a slider where images are 
// presented. It cycles through multiple images automatically and allows users 
//to navigate through them manually using navigation arrows and dots. This
//slider component is displayed at the start page. 

import React, { useState, useEffect } from 'react';
import './index.css'; // Import the CSS file for styling.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'; // Import icons for navigation arrows.
import SliderOne from './assets/SliderOne.svg'; // Importing the svg images that will be displayed in the slider
import SliderTwo from './assets/SliderTwo.svg'; // Importing the svg images that will be displayed in the slider
import SliderThree from './assets/SliderThree.svg'; // Importing the svg images that will be displayed in the slider
import SliderFour from './assets/SliderFour.svg'; // Importing the svg images that will be displayed in the slider
import SliderFive from './assets/SliderFive.svg'; // Importing the svg images that will be displayed in the slider
import SliderSix from './assets/SliderSix.svg'; // Importing the svg images that will be displayed in the slider
import SliderSeven from './assets/SliderSeven.svg'; // Importing the svg images that will be displayed in the slider
import SliderEight from './assets/SliderEight.svg'; // Importing the svg images that will be displayed in the slider

// Array containing the images for the slider
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
  const [slideIndex, setSlideIndex] = useState(1); // State to keep track of the current slide index

  // Function to change the slide by a given number (e.g., move to the next or previous slide)
  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex > slides.length) newIndex = 1; // Loop back to the first slide if at the end
      if (newIndex < 1) newIndex = slides.length; // Loop back to the last slide if at the start
      return newIndex;
    });
  };

  // Function to set the current slide directly when a dot is clicked
  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1); // Move to the next slide
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Clean up the interval when the component is unmounted
  }, [slideIndex]);

  return (
    <div>
      <div className="slideshow-container">
        {/* Loop through the slides and display only the active slide */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`mySlides fade ${slideIndex === index + 1 ? 'active' : ''}`} // Apply "active" class to the current slide
            style={{ display: slideIndex === index + 1 ? 'block' : 'none' }} // Show only the current slide
          >
            <img className="sliderImages" src={slide.src} alt={`Slide ${index + 1}`} /> {/* Display the slide image */}
          </div>
        ))}

        {/* Navigation arrows to move between slides */}
        <a className="prev" onClick={() => plusSlides(-1)}>
          <FontAwesomeIcon icon={faCircleChevronLeft} /> {/* Left arrow icon */}
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          <FontAwesomeIcon icon={faCircleChevronRight} /> {/* Right arrow icon */}
        </a>
      </div>

      {/* Dots for navigating to a specific slide */}
      <div className="dot-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${slideIndex === index + 1 ? 'active' : ''}`} // Highlight the dot for the current slide
            onClick={() => currentSlide(index + 1)} // Go to the corresponding slide when the dot is clicked
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider; // Export the component to be used in other parts of the project