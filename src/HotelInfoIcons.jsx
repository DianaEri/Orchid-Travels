// HotelInfoIcons.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faPhone, faLocationDot, faPlaneArrival, faUtensils } from '@fortawesome/free-solid-svg-icons';

const HotelInfoIcons = () => {
  return (
    <div className="dividerIcons">
      <div className="iconsList">
        <div className="iconsText">Hotel information provided with ease</div>
        <div className="iconsRow">
          <FontAwesomeIcon icon={faMessage} />
          <FontAwesomeIcon icon={faPhone} />
          <FontAwesomeIcon icon={faLocationDot} />
          <FontAwesomeIcon icon={faPlaneArrival} />
          <FontAwesomeIcon icon={faUtensils} />
        </div>
        <div className="wordsRow">
          <span>Reviews</span>
          <span>Call us</span>
          <span>Address</span>
          <span>Arrivals</span>
          <span>Restaurant</span>
        </div>
      </div>
    </div>
  );
};

export default HotelInfoIcons;
