// This component, created by (Madelene), displays a button that allows users to 
// quickly return to the top of the page after scrolling down. The button 
// appears only when the user scrolls down beyond a certain point, adding a 
// dynamic and user friendly interaction. Upon clicking the button, a smooth 
// scrolling animation takes the user back to the top of the page. This enhances 
// user experience, especially for long pages, by making navigation more 
// convenient and seamless. The button also incorporates a visually appealing 
// arrow icon from FontAwesome to indicate its purpose.

import React, { useState, useEffect } from 'react'; // Import React and hooks (useEffect, useState)
import './index.css'; // Importing the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesome icons
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Importing the "up arrow" icon

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false); // State to show/hide the button

  // Check scroll position to show/hide the button
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShowButton(true);  // Show button if scrolled down more than 20px
    } else {
      setShowButton(false); // Hide button if scrolled less or equal to 20px
    }
  };

  // Smoothly scroll the page back to the top
  const scrollToTop = () => {
    const scrollDuration = 2000; // Animation duration (2 seconds)
    const scrollStep = -window.scrollY / (scrollDuration / 15); // Scroll amount per frame

    const smoothScroll = () => {
      if (window.scrollY > 0) {
        window.scrollBy(0, scrollStep); // Scroll up by a small amount
        requestAnimationFrame(smoothScroll); // Continue scrolling until reaching the top
      }
    };
    requestAnimationFrame(smoothScroll); // Start the scrolling animation
  };

  // useEffect hook to add/remove the scroll event listener when the component mounts/unmounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add the scroll event listener
    return () => window.removeEventListener('scroll', handleScroll); // Remove the event listener on unmount
  }, []);

  return (
    <div className="scroll-to-top-container">
      {showButton && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} style={{ marginRight: '0.5rem' }} /> {/* Up arrow icon */}
          SCROLL TO TOP
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton; // Export the component for use in other parts of the project