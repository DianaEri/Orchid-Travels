import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faPhone, faLocationDot, faPlaneArrival, faUtensils } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const SearchResult = () => {
    const [hotels, setHotels] = useState([]); // State to hold hotel data
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling

    // Extract adults and children from the location state
    const location = useLocation();
    const { adults, children } = location.state || { adults: 0, children: 0 }; // Default to 0 if not present

    const fetchHotelData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/data'); // Update to your API endpoint
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setHotels(data.hotels); // Set the hotels state with fetched data
        } catch (error) {
            console.error('Error fetching hotel data:', error);
            setError(error); // Set error state if an error occurs
        } finally {
            setLoading(false); // Set loading to false regardless of success or failure
        }
    };

    useEffect(() => {
        fetchHotelData(); // Fetch hotel data on component mount
    }, []);

    // Render loading, error, or hotel list
    if (loading) {
        return <div>Loading...</div>; // Show loading indicator
    }

    if (error) {
        return <div>Error: {error.message}</div>; // Show error message
    }

    // Calculate total number of persons
    const totalPersons = adults + children;

    return (
        <div>
            <h1>Available Hotels</h1>
            <div className="hotel-list">
                {hotels.map((hotel) => (
                    <div key={hotel.name} className="hotel-card">
                        <img src={hotel.image} alt={hotel.name} />
                        <h2>{hotel.name}</h2>
                        {/* Unordered list for hotel description */}
                        <ul>
                            {hotel.description.map((descItem, index) => (
                                <li key={index}>{descItem}</li> // List item for each description
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
                            <p>Price per person: {hotel.price_per_person} kr</p>
                            {/* Calculate total price based on number of adults and children */}
                            <p>Total Price: {hotel.price_per_person * totalPersons} kr</p>
                            <div className="divider"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResult;