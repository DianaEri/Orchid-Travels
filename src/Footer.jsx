// Footer component made by Diana.
// This component is responsible for rendering the footer section of the website,
// which includes logos, social media icons, and links to various sections of the website.

import React from 'react'; // Import React for creating the component
import BlackLogo from './assets/Black logo.svg'; // Import the black logo image for the footer
import TripadvisorLogo from './assets/tripadvisor.svg'; // Import the Tripadvisor logo (though not used in the JSX below)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome for social media icons
import { 
  faYoutube, faSquareInstagram, faSquareFacebook, faAirbnb 
} from '@fortawesome/free-brands-svg-icons'; // Import specific brand icons (YouTube, Instagram, Facebook, Airbnb)

const Footer = () => {
  return (
    // Main container for the footer with centered content and padding for spacing
    <div className="footer" style={{ width: '100%', textAlign: 'center', padding: '1em 0' }}>
      
      {/* Black logo displayed at the top of the footer */}
      <img src={BlackLogo} alt="Black Logo" style={{ height: '5em', width: 'auto' }} />
      
      {/* Company name displayed below the logo */}
      <div className='logoName'>Orchid Travels</div>

      {/* Social media icons section */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1em 0' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          
          {/* Social media icons (Airbnb, Instagram, YouTube, Facebook) */}
          <FontAwesomeIcon icon={faAirbnb} className="social-icon" style={{ margin: '0 10px' }} />
          <FontAwesomeIcon icon={faSquareInstagram} className="social-icon" style={{ margin: '0 10px' }} />
          <FontAwesomeIcon icon={faYoutube} className="social-icon" style={{ margin: '0 10px' }} />
          <FontAwesomeIcon icon={faSquareFacebook} className="social-icon" style={{ margin: '0 10px' }} />
        </div>
      </div>

      {/* Footer links */}
      <div>Reviews</div> {/* Link or text for Reviews */}
      <div>Contact us</div> {/* Link or text for Contact us */}
      <div>Address</div> {/* Link or text for Address */}
      
      {/* Larger text links for main sections of the website */}
      <div className='largerText'>Search</div> 
      <div className='largerText'>Hotel activities</div> 
      <div className='largerText'>Gallery</div> 

      {/* Footer copyright information */}
      <div className='paddingText'>2024 Orchid Travels</div> 

      {/* Footer legal links */}
      <div className='smallerText'>Terms & conditions / Privacy policy</div> 
    </div>
  );
};

export default Footer; // Export the Footer component to be used in other parts of the application
