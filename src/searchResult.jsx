import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faPhone, faLocationDot, faPlaneArrival, faUtensils } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const SearchResult = ({ location }) => {
  const { destination } = location.state; // Assuming you're passing destination through the navigate state
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await fetch(`https://orchidtravels-yymu--5000--134daa3c.local-corp.webcontainer.io/api/hotels?destination=${destination}`);
        console.log('Response:', response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setHotels(data.hotels); // Adjust based on your API response structure
      } catch (error) {
        console.error('Error fetching hotel data:', error);
        setError('No hotels found for the selected destination.'); // Show user-friendly message
      }
    };

    fetchHotelData();
  }, [destination]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!hotels.length) {
    return <div>No hotels found for the selected destination.</div>;
  }

  // Calculate total persons and total price
  const totalPersons = parseInt(adults) + parseInt(children);

  return (
    <div className="search-results">
      {hotels.map(hotel => (
        <div key={hotel.name} className="hotel-card">
          <img src={hotel.imageUrl} alt={hotel.name} className="hotel-image" />
          <h2>{hotel.name}</h2>
          <ul>
            <li>{hotel.description}</li>
          </ul>
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

          <div className="flight-hotel">
            <p>Flight and hotel</p>
            <p>{adults} adults and {children} children</p>
            <p>{hotel.price_per_person * totalPersons} kr</p>
            <p>Price details: {hotel.price_per_person} kr/person</p>

            <div className="action-buttons">
              <button className="read-more-button">Read More</button>
              <button className="book-now-button">Book now</button>
            </div>
          </div>

          <div className="divider"></div>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
