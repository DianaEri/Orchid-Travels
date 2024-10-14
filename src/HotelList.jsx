// HotelList.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faPhone, faLocationDot, faPlaneArrival, faUtensils } from '@fortawesome/free-solid-svg-icons';

const HotelList = ({ hotels, adultsAndChildrenText, totalPersons }) => {
  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <div key={hotel.name} className="hotel-card">
          <img src={hotel.image} alt={hotel.name} />
          <h2>{hotel.name}</h2>
          {/* Unordered list for hotel description */}
          <ul>
            {hotel.description.map((descItem, index) => (
              <li key={index}>{descItem}</li>
            ))}
          </ul>

          <div className="dividerSearch">
            <div className="iconsList">
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
          <p>Flight and hotel</p>
          <p>{adultsAndChildrenText}</p>
          <p>Total Price: {(hotel.price_per_person * totalPersons).toLocaleString('sv-SE')} kr</p>
          <p>Pricing Details &gt;</p>
          <p>Price per person: {hotel.price_per_person.toLocaleString('sv-SE')} kr</p>
          <div className="divider"></div>
        </div>
      ))}
    </div>
  );
};

export default HotelList;
