import React, { useEffect, useState } from 'react';
import './index.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';  

const TotalPrice = () => {
  const [price, setPrice] = useState(0);

  // Fetch the total price from localStorage when the component mounts
  useEffect(() => {
    const fetchStoredPrice = () => {
      const storedPrice = localStorage.getItem('totalPrice');
      if (storedPrice) {
        setPrice(Number(storedPrice)); // Convert the stored price to a number
      }
    };

    // Set up an interval to check for changes in localStorage every second
    const intervalId = setInterval(fetchStoredPrice, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="total-price-container">
      <h2 className="total-price-text">Total Price</h2>
      <div className="price-display">
        <span className="price-amount">{price.toLocaleString()}</span>
        <span className="currency">kr</span>
        <span className="pricing-details">Pricing details</span>
        <FontAwesomeIcon icon={faAngleDown} className="pricing-details-icon" />
      </div>
    </div>
  );
};

export default TotalPrice;