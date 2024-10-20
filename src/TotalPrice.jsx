import React, { useEffect, useState } from 'react';
import './index.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';  


const formatPriceWithSpace = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

const TotalPrice = () => {
  const [price, setPrice] = useState(0);

  
  useEffect(() => {
    const fetchStoredPrice = () => {
      const storedPrice = localStorage.getItem('totalPrice');
      if (storedPrice) {
        setPrice(Number(storedPrice)); 
      }
    };


    const intervalId = setInterval(fetchStoredPrice, 1000);

  
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="total-price-container">
      <h2 className="total-price-text">Total Price</h2>
      <div className="price-display">
        <span className="price-amount">{formatPriceWithSpace(price)}</span>
        <span className="currency">kr</span>
        <span className="pricing-details">Pricing details</span>
        <FontAwesomeIcon icon={faAngleDown} className="pricing-details-icon" />
      </div>
    </div>
  );
};

export default TotalPrice;