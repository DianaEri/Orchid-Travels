// HotelReviews.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faPhone, faLocationDot, faPlaneArrival, faUtensils } from '@fortawesome/free-solid-svg-icons';

const HotelReviews = () => {
  return (
    <div className="reviewIcons">
      <div className="reviewList">
        <div className="boxRow1">
        <span>From Total price</span>
        </div>
        <div className="boxRow2">
          <FontAwesomeIcon icon={faMessage} />
          <span>Call us</span>
          <FontAwesomeIcon icon={faPhone} />
          <span>Reviews</span>
        </div>
      </div>
    </div>
  );
};

export default HotelReviews;