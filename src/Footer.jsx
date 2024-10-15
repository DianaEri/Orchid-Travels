// Footer.jsx
import React from 'react';
import BlackLogo from './assets/Black logo.svg';
import TripadvisorLogo from './assets/tripadvisor.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSquareInstagram, faSquareFacebook, faAirbnb } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer" style={{ width: '100%', textAlign: 'center', padding: '1em 0' }}>
      <img src={BlackLogo} alt="Black Logo" style={{ height: '5em', width: 'auto' }} />
      <div className='logoName'>Orchid Travels</div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1em 0' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FontAwesomeIcon icon={faAirbnb} className="social-icon" style={{ margin: '0 10px' }} />
          <FontAwesomeIcon icon={faSquareInstagram} className="social-icon" style={{ margin: '0 10px' }} />
          <FontAwesomeIcon icon={faYoutube} className="social-icon" style={{ margin: '0 10px' }} />
          <FontAwesomeIcon icon={faSquareFacebook} className="social-icon" style={{ margin: '0 10px' }} />
        </div>
      </div>
      <div>Reviews</div>
      <div>Contact us</div>
      <div>Address</div>
      <div className='largerText'>Search</div>
      <div className='largerText'>Hotel activities</div>
      <div className='largerText'>Gallery</div>
      <div className='paddingText'>2024 Orchid Travels</div>
      <div className='smallerText'>Terms & conditions / Privacy policy</div>
    </div>
  );
};

export default Footer;
