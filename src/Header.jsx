// This component, created by Madelene, displays a mobile responsive header for the Orchid Travels website. 
// It includes a logo and a navigation menu that can be toggled open and closed using a button. 
// The menu items direct the user to different pages on the website, such as "About Us" and "Our Travel Destinations." 
// The component also incorporates FontAwesome icons for the menu toggle buttons.

import React, { useState } from 'react';  // Import React to create the component.
import { Link } from 'react-router-dom';  // Importing Link component for navigation.
import './App.css';  // Importing styles for the header.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Importing FontAwesome icons for menu and close buttons.
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';  // Importing specific icons for the menu and close button.
import goldLogo from './assets/goldLogo.svg';  // Importing the logo image for Orchid Travels.

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);  // useState hook to track whether the menu is open or closed.

  // Function to toggle the menu's open/closed state.
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);  // Switch between true and false when clicked.
  };

  return (
    <div className="mobile-container">  {/* Container for mobile view */}
      <div className="topnav">  {/* Top navigation bar */}
        {/* Show this part if the menu is not open */}
        {!menuOpen && (
          <div className="wrapLogoTogether">  {/* Container that wraps the logo and menu button */}
            {/* Button to open the menu */}
            <button className="icon" onClick={toggleMenu} aria-label="Open Menu">
              <FontAwesomeIcon icon={faBars} size="2x" />  {/* FontAwesome menu icon */}
            </button>
            {/* Logo and text in the center */}
            <div className="centerContent">
              <img 
                src={goldLogo} 
                alt="Gold Logo" 
                style={{ width: '4rem', height: '4rem', marginRight: '0.5rem', marginLeft: '-4rem' }} 
              />
              Orchid Travels  {/* Text for the brand name */}
            </div>
          </div>
        )}

        {/* Menu links will be shown when menuOpen is true */}
        <div id="myLinks" className={menuOpen ? 'open' : ''}>
          {/* Button to close the menu */}
          <button className="closeIcon" onClick={toggleMenu} aria-label="Close Menu">
            <FontAwesomeIcon icon={faTimes} size="2x" />  {/* FontAwesome close icon */}
          </button>
          {/* Navigation links */}
          <div className='menuItems'>
            <Link className='orchidTravelsMenu' to="/">Orchid Travels</Link>
            <Link className='menuOptions' to="/about-us">About Us</Link>
            <Link className='menuOptions' to="/our-travel-destinations">Our Travel Destinations</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header; // Exporting the Header component so it can be used in other parts of the project.
