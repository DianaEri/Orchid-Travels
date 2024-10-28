// This component, created by (Madelene), displays the total price for a booking.
// It retrieves the calculated total price in "BookingOptionsForm.jsx" from a local storage and 
// then displays the total price in this separate component. 

import React, { useEffect, useState } from 'react'; // Import React and hooks (useState, useEffect)
import './index.css'; // Import the CSS file for styling.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component for icons.
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon (faAngleDown) from Font Awesome.

// // Function to format price with spaces (e.g., 10 000)
const formatPriceWithSpace = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

// Component to display the total price.
const TotalPrice = ({ onPriceUpdate }) => {  
  // State to store the price value.
  const [price, setPrice] = useState(0);

  // useEffect to fetch the stored price from localStorage when the component mounts.
  useEffect(() => {
    // Function to fetch the price from localStorage.
    const fetchStoredPrice = () => {
      const storedPrice = localStorage.getItem('totalPrice'); // Retrieve the stored price.
      if (storedPrice) { // Check if there is a stored price.
        const parsedPrice = Number(storedPrice); // Convert the stored value to a number.
        setPrice(parsedPrice); // Update the state with the parsed price.
        onPriceUpdate(parsedPrice);  // Call the function passed as a prop with the updated price.
      }
    };

    // Set an interval to fetch the stored price every 1000 milliseconds (1 second).
    const intervalId = setInterval(fetchStoredPrice, 1000);

    // Clear the interval when the component is unmounted to avoid memory leaks.
    return () => clearInterval(intervalId);
  }, [onPriceUpdate]);

  return (
    // Container for the total price display.
    <div className="total-price-container">
      {/* Title for the total price section */}
      <h2 className="total-price-text">Total Price</h2>
      {/* Display the price with formatting */}
      <div className="price-display">
        <span className="price-amount">{formatPriceWithSpace(price)}</span> {/* Display the formatted price */}
        <span className="currency">kr</span> {/* Display the currency */}
        <span className="pricing-details">Pricing details</span> {/* Text for pricing details */}
        <FontAwesomeIcon icon={faAngleDown} className="pricing-details-icon" /> {/* Icon for pricing details */}
      </div>
    </div>
  );
};

// Export the component to be used in other parts of the project.
export default TotalPrice;