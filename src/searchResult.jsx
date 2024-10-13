import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faPhone, faLocationDot, faPlaneArrival, faUtensils } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const SearchResult = () => {
  const location = useLocation();
  const { destination, adults, children } = location.state || {};
  
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (destination) {
      // Fetch data from the API based on the destination
      fetch('https://orchidtravels-yymu--5000--134daa3c.local-corp.webcontainer.io/api/data')
        .then((response) => response.json())
        .then((data) => {
          const matchedHotels = data.locations.filter(hotel => hotel.location.toLowerCase() === destination.toLowerCase());
          setHotels(matchedHotels);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching hotel data:', error);
          setLoading(false);
        });
    }
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
