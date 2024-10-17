// HotelReviews component made by Diana.
// This component displays the calculated total price based on user selections from the search form.
// It also shows reviews from both hotel guests and Airbnb ratings, along with corresponding icons.

import React from 'react'; // Import React to create the component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon for using icons
import { faStar } from '@fortawesome/free-solid-svg-icons'; // Import the star icon for the hotel guest review rating
import { faAirbnb } from '@fortawesome/free-brands-svg-icons'; // Import the Airbnb logo for the Airbnb rating

// Functional component that accepts the `totalPrice` as a prop
const HotelReviews = ({ totalPrice }) => {
  return (
    <div className="reviewList">
      
      {/* Row to display the total price of the hotel stay */}
      <div className="reviewRow1">
        {/* If totalPrice is provided, display it formatted as currency (kr), otherwise show 'N/A' */}
        <span className="bold">
          From {totalPrice !== undefined ? `${totalPrice.toLocaleString('sv-SE')}kr` : 'N/A'}
        </span>
      </div>

      {/* Row to display hotel and Airbnb review ratings */}
      <div className="reviewRow2">
        
        {/* Hotel guest review rating */}
        <div className="reviewItem">
          <FontAwesomeIcon icon={faStar} /> {/* Display a star icon */}
          <span className="bold"> 4.5/5</span> {/* Display the rating */}
        </div>

        {/* Label indicating that the review is from hotel guests */}
        <div className="reviewItem">
          <span>Hotel guests</span>
        </div>

        {/* Airbnb review rating */}
        <div className="reviewItem">
          <FontAwesomeIcon icon={faAirbnb} /> {/* Display the Airbnb icon */}
          <span className="bold"> 4.7/5</span> {/* Display the rating */}
        </div>

        {/* Label indicating that the review is from Airbnb */}
        <div className="reviewItem">
          <span>Airbnb</span>
        </div>

      </div>
    </div>
  );
};

export default HotelReviews; // Export the component for use in other parts of the application
