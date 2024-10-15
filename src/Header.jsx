/*
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar

-Använde mig av mallen från w3shool och som jag modifierade så att den passar
applikationen "Orchid Travels" utseende mål.

- Modifierade koden så att den använder Font Awesome ikoner. 
- Modifierade koden i menu array för navigations valen. I vår applikation har vi tre val (Undersidor) i 
menyn: "Orchid Travels" "About us" och "Our Travel destinations".
- Modifierade koden så att menyn går att öppnas med FontAwesome ikonerna.
- Modifierade koden så att komponenten blir responsiv med VW and rem.
*/

import React, { useState } from 'react';
import './App.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; 
import goldLogo from './assets/goldLogo.svg'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="mobile-container">
      <div className="topnav">
        <div className="wrapLogoTogether">
          <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </a>
          <div className="centerContent">
            <img 
              src={goldLogo} 
              alt="Gold Logo" 
              style={{ width: '4rem', height: '4rem', marginRight: '0.5rem' }} 
            />
            Orchid Travels
          </div>
        </div>
        <div id="myLinks" className={menuOpen ? 'open' : ''}>
          <a href="javascript:void(0);" className="closeIcon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </a>
          <div className='menuItems'>
            <a className='orchidTravelsMenu' href="#orchidTravels">Orchid Travels</a>
            <a className='menuOptions' href="#aboutUs">About Us</a>
            <a className='menuOptions' href="#ourTravelDestination">Our Travel Destinations</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;