import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';

const HotelReviews = () => {
  return (
    <div className="reviewList"> {/* Removed outer div */}
      <div className="reviewRow1">
        <span>From Total price</span>
      </div>
      <div className="reviewRow2">
        <div className="reviewItem">
          <FontAwesomeIcon icon={faStar} />
          <span> 4.5/5</span>
        </div>
        <div className="reviewItem">
          <span>Hotel guests</span>
        </div>
        <div className="reviewItem">
          <FontAwesomeIcon icon={faAirbnb} />
          <span> 4.7/5</span>
        </div>
        <div className="reviewItem">
        <span>Airbnb</span>
      </div>
      </div>
    </div>
  );
};

export default HotelReviews;
