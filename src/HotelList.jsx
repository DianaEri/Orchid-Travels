// HotelList.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faPhone, faLocationDot, faPlaneArrival, faUtensils } from '@fortawesome/free-solid-svg-icons';
import ImageComponent from './ImageComponent';
import Divider from './Divider'; // Import the Divider component

const HotelList = ({ hotels, adultsAndChildrenText, totalPersons }) => {
  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <div key={hotel.name} className="hotel-card">
          <ImageComponent src={hotel.image} alt={hotel.name} />
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
          <div className='textMargin'>Flight and hotel</div>
          <div>{adultsAndChildrenText}</div>
          <div className='Right'>{(hotel.price_per_person * totalPersons).toLocaleString('sv-SE')}kr</div>
          <div className='box'>
            <div className='linkStyle'>Pricing Details &gt;</div>
            <div className='push'>{hotel.price_per_person.toLocaleString('sv-SE')}kr/person</div>
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default HotelList;
