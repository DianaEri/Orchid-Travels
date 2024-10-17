// This element and underlying components are made by me, Diana.
import React from 'react';
import { useNavigate } from 'react-router-dom'; // For handling navigation between routes
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome icons for UI
import { faMessage, faPhone, faLocationDot, faPlaneArrival, faUtensils } from '@fortawesome/free-solid-svg-icons'; // Importing specific icons
import ImageComponent from './ImageComponent'; // Custom Image component
import Divider from './Divider'; // Divider component for visual separation
import Button from './Button'; // Button component for reusable buttons
import SubHeading from './SubHeading'; // Subheading component for section titles
import UnOrderedList from './UnOrderedList'; // UnorderedList component for displaying lists

const HotelList = ({ hotels, adultsAndChildrenText, totalPersons }) => {
  const navigate = useNavigate(); // Initialize the `useNavigate` hook for routing

  // Function to handle "Read more" button clicks
  const handleReadMore = (hotel) => {
    if (hotel.name === "Laguna Pearl Retreat") {
      // If the hotel is Laguna Pearl Retreat, calculate total price and navigate to its detailed page
      const totalPrice = hotel.price_per_person * totalPersons; 
      navigate('/laguna-pearl-retreat', { state: { totalPrice, hotelName: hotel.name } }); // Pass total price and hotel name as state
    } else {
      // If it's not Laguna Pearl Retreat, show an alert saying no additional info is available
      alert(`${hotel.name} does not have additional information available.`);
    }
  };

  // Function to handle "Book now" button clicks
  const handleBookNow = (hotel) => {
    if (hotel.name === "Laguna Pearl Retreat") {
      // If the hotel is Laguna Pearl Retreat, navigate to the booking page
      navigate('/hotels/laguna-pearl-retreat/book');
    } else {
      // If the hotel is not bookable, show an alert
      alert(`${hotel.name} is not available for booking.`);
    }
  };

  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <div key={hotel.name} className="hotel-card">
          
          {/* Container for the hotel image */}
          <div className="image-container">  {/* Use a CSS class for relative positioning */}
            <ImageComponent src={hotel.image} alt={hotel.name} /> {/* Render hotel image */}

            {/* Conditionally render the "Kids friendly" overlay if the hotel is family friendly */}
            {hotel.family === "Kids friendly" && (
              <div className="kids-friendly-overlay">
                Kids friendly
              </div>
            )}
          </div>

          {/* Subheading for the hotel name */}
          <SubHeading text={hotel.name} />
          
          {/* Unordered list for hotel description */}
          <UnOrderedList items={hotel.description} />
          
          {/* Section for hotel details and icons */}
          <div className="dividerSearch">
            <div className="iconsList">
              <div className="iconsRow">
                <FontAwesomeIcon icon={faMessage} /> {/* Reviews icon */}
                <FontAwesomeIcon icon={faPhone} />   {/* Phone icon */}
                <FontAwesomeIcon icon={faLocationDot} /> {/* Location icon */}
                <FontAwesomeIcon icon={faPlaneArrival} /> {/* Arrivals icon */}
                <FontAwesomeIcon icon={faUtensils} /> {/* Restaurant icon */}
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

          {/* Container for flight and pricing details */}
          <div className="info-container">
            <div className='textMargin'>Flight and hotel</div>
            <div>{adultsAndChildrenText}</div> {/* Display number of adults and children */}
            <div className='Right'>{(hotel.price_per_person * totalPersons).toLocaleString('sv-SE')}kr</div> {/* Total price */}
            <div className='box'>
              <div className='linkStyle'>Pricing Details &gt;</div>
              <div className='push'>{hotel.price_per_person.toLocaleString('sv-SE')}kr/person</div> {/* Price per person */}
            </div>
          </div>

          {/* Buttons for "Read more" and "Book now" */}
          <div className="hotel-card-buttons">
            <Button type="button" className="read-more-btn" onClick={() => handleReadMore(hotel)}>
              Read more
            </Button>

            <Button type="button" className="book-now-btn" onClick={() => handleBookNow(hotel)}>
              Book now
            </Button>
          </div>

          <Divider /> {/* Divider for visual separation between hotel cards */}
        </div>
      ))}
    </div>
  );
};

export default HotelList;
