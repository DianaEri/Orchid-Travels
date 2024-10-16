import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';

const HotelReviews = ({ totalPrice }) => {
  return (
    <div className="reviewList">
      <div className="reviewRow1">
        {/* Display the Total Price */}
        <span className="bold">
          From Total Price: {totalPrice !== undefined ? `${totalPrice.toLocaleString('sv-SE')} kr` : 'N/A'}
        </span>
      </div>
      <div className="reviewRow2">
        <div className="reviewItem">
          <FontAwesomeIcon icon={faStar} />
          <span className="bold"> 4.5/5</span>
        </div>
        <div className="reviewItem">
          <span>Hotel guests</span>
        </div>
        <div className="reviewItem">
          <FontAwesomeIcon icon={faAirbnb} />
          <span className="bold"> 4.7/5</span>
        </div>
        <div className="reviewItem">
          <span>Airbnb</span>
        </div>
      </div>
    </div>
  );
};

export default HotelReviews;
