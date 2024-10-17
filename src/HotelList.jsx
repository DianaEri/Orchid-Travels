import React from 'react';
import { useNavigate } from 'react-router-dom'; // For routing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faPhone, faLocationDot, faPlaneArrival, faUtensils } from '@fortawesome/free-solid-svg-icons';
import ImageComponent from './ImageComponent';
import Divider from './Divider'; // Import the Divider component
import Button from './Button'; // Import the Button component
import SubHeading from './SubHeading';
import UnOrderedList from './UnOrderedList';

const HotelList = ({ hotels, adultsAndChildrenText, totalPersons }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleReadMore = (hotel) => {
    if (hotel.name === "Laguna Pearl Retreat") {
      const totalPrice = hotel.price_per_person * totalPersons; 
      navigate('/laguna-pearl-retreat', { state: { totalPrice, hotelName: hotel.name } }); // Pass hotelName
    }
  };

  // Function to handle "Book now" button click
  const handleBookNow = (hotel) => {
    // Redirect to the booking page for this hotel
    navigate(`/hotels/${hotel.name}/book`);
  };

  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <div key={hotel.name} className="hotel-card">
          <div className="image-container">  {/* Use a CSS class for relative positioning */}
            <ImageComponent src={hotel.image} alt={hotel.name} />

            {/* Conditionally render the "Kids friendly" overlay if the hotel is family friendly */}
            {hotel.family === "Kids friendly" && (
              <div className="kids-friendly-overlay">
                Kids friendly
              </div>
            )}
          </div>

          <SubHeading text={hotel.name} />
          {/* Unordered list for hotel description */}
          <UnOrderedList items={hotel.description} />
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

          {/* New container div for flight and pricing details */}
          <div className="info-container">
            <div className='textMargin'>Flight and hotel</div>
            <div>{adultsAndChildrenText}</div>
            <div className='Right'>{(hotel.price_per_person * totalPersons).toLocaleString('sv-SE')}kr</div>
            <div className='box'>
              <div className='linkStyle'>Pricing Details &gt;</div>
              <div className='push'>{hotel.price_per_person.toLocaleString('sv-SE')}kr/person</div>
            </div>
          </div>
          
          {/* Flex container for the buttons */}
          <div className="hotel-card-buttons">
            <Button type="button" className="read-more-btn" onClick={() => handleReadMore(hotel)}>
              Read more
            </Button>

            <Button type="button" className="book-now-btn" onClick={() => handleBookNow(hotel)}>
              Book now
            </Button>
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default HotelList;
