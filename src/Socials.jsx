// This component, created by Madelene, directs users to check the social media 
// of the website. It is displayed on the subpage "Hotel Restaurant Saffron Breeze Cafe" 
// and shows the text "Check more images on" followed by a FontAwesome icon. 
// This component is reusable for directing users to different social media platforms.


import React from 'react'; // Import React to create the component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import FontAwesomeIcon for displaying social media icons.
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'; // Import Instagram icon from FontAwesome.
import './index.css';  // Import CSS for styling.

const Socials = () => {
  return (
    <div className="socials-container">
      {/* Display the text encouraging users to check more images on Instagram */}
      <p className="socials-text">Check more images on</p>
      
      {/* Link to Instagram that opens in a new tab */}
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        {/* Display the Instagram icon */}
        <FontAwesomeIcon icon={faSquareInstagram} className="instagram-icon" />
      </a>
    </div>
  );
};

export default Socials;  // Export the Socials component for use in other parts of the project.