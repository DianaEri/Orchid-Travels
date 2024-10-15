// HotelReviews.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faPhone, faLocationDot, faPlaneArrival, faUtensils } from '@fortawesome/free-solid-svg-icons';

const HotelReviews = () => {
  return (
    <div className="dividerIcons">
      <div className="iconsList">
        <div className="iconsRow">
        <span>From Total price</span>
        </div>
        <div className="wordsRow">
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