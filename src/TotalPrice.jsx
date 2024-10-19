import React from 'react';
import './index.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';  

const TotalPrice = ({ price }) => {
  return (
    <div className="total-price-container">
      <h2 className="total-price-text">Total Price</h2>
      <div className="price-display">
        <span className="price-amount">{price}</span>
        <span className="currency">2000 kr</span>
        <span className="pricing-details">Pricing details</span>
        <FontAwesomeIcon icon={faAngleDown} className="pricing-details-icon" />
      </div>
    </div>
  );
};

export default TotalPrice;