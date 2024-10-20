// This component, created by Madelene, displays a button that allows users to 
// quickly return to the top of the page after scrolling down. The button 
// appears only when the user scrolls down beyond a certain point, adding a 
// dynamic and user friendly interaction. Upon clicking the button, a smooth 
// scrolling animation takes the user back to the top of the page. This enhances 
// user experience, especially for long pages, by making navigation more 
// convenient and seamless. The button also incorporates a visually appealing 
// arrow icon from FontAwesome to indicate its purpose.

import React, { useState, useEffect } from 'react';
import './index.css'; // Importing the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importing FontAwesome icons
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Importing the "up arrow" icon

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false); // State to control whether the button is visible

  // Function to check the scroll position and show/hide the button
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShowButton(true);  // Show the button if the scroll position is greater than 20px
    } else {
      setShowButton(false); // Hide the button if the scroll position is less than or equal to 20px
    }
  };

  // Function to scroll the page smoothly back to the top
  const scrollToTop = () => {
    const scrollDuration = 2000; // Duration of the scrolling animation (2 seconds)
    const scrollStep = -window.scrollY / (scrollDuration / 15); // Calculate the amount to scroll in each frame

    const smoothScroll = () => {
      if (window.scrollY > 0) {
        window.scrollBy(0, scrollStep); // Scroll the window up by a small amount
        requestAnimationFrame(smoothScroll); // Continue the animation until the top is reached
      }
    };
    requestAnimationFrame(smoothScroll); // Start the smooth scroll animation
  };

  // useEffect hook to add the scroll event listener when the component mounts and remove it when it unmounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add the event listener for scrolling
    return () => window.removeEventListener('scroll', handleScroll); // Remove the event listener when the component is unmounted
  }, []);

  return (
    <div className="scroll-to-top-container">
      {showButton && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} style={{ marginRight: '0.5rem' }} /> {/* Display the up arrow icon */}
          SCROLL TO TOP
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton; // Export the component to be used in other parts of the project