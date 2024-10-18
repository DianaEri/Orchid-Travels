import React from 'react';
import goldLogo from './assets/goldLogo.svg'; 
import './index.css'; 

const YellowFlower = () => {
  return (
    <div className="yellow-flower-container">
      <img src={goldLogo} alt="Gold Logo" className="centered-logo" />
    </div>
  );
};

export default YellowFlower;