import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; 

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShowButton(true);  
    } else {
      setShowButton(false);  
    }
  };

  const scrollToTop = () => {
    const scrollDuration = 2000; 
    const scrollStep = -window.scrollY / (scrollDuration / 15); 

    const smoothScroll = () => {
      if (window.scrollY > 0) {
        window.scrollBy(0, scrollStep); 
        requestAnimationFrame(smoothScroll); 
      }
    };
    requestAnimationFrame(smoothScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);

  return (
    <div className="scroll-to-top-container">
      {showButton && (
        <button className="scroll-to-top-button" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} style={{ marginRight: '0.5rem' }} />
          SCROLL TO TOP
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;