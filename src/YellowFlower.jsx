// This component, created by Madelene, displays a yellow flower, which will be used as a section 
//divider on the website to separate different content sections.

import React from 'react'; // Import React to create the component
import goldLogo from './assets/goldLogo.svg'; // Importing the gold logo image from the assets folder.
import './index.css'; // Importing the CSS file for styling.

const YellowFlower = () => {
  return (
    <div className="yellow-flower-container">
      {/* This div serves as the container for the logo */}
      <img src={goldLogo} alt="Gold Logo" className="centered-logo" />
      {/* The img element displays the gold logo image and uses the 'centered-logo' class to center it */}
    </div>
  );
};

export default YellowFlower;  // Export the component to be used in other parts of the project