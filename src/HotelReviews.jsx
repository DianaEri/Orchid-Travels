import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faPhone, faLocationDot, faPlaneArrival, faUtensils } from '@fortawesome/free-solid-svg-icons';

const HotelReviews = () => {
  return (
    <div className="reviewList"> {/* Removed outer div */}
      <div className="reviewRow1">
        <span>From Total price</span>
      </div>
      <div className="reviewRow2">
        <FontAwesomeIcon icon={faMessage} />
        <span>Call us</span>
        <FontAwesomeIcon icon={faPhone} />
        <span>Reviews</span>
      </div>
    </div>
  );
};

export default HotelReviews;
