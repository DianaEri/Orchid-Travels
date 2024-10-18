import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import './index.css'; 

const Socials = () => {
  return (
    <div className="socials-container">
      <p className="socials-text">Check more images on</p>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faSquareInstagram} className="instagram-icon" />
      </a>
    </div>
  );
};

export default Socials;