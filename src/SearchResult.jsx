import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faPhone, faLocationDot, faPlaneArrival, faUtensils } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import HotelList from './HotelList'; // Import the HotelList component
import Footer from './Footer'; // Make sure this import is correct

const SearchResult = () => {
    const [hotels, setHotels] = useState([]); // State to hold hotel data
    const [loading, setLoading] = useState(true); // State for loading status
    const [error, setError] = useState(null); // State for error handling

    // Extract adults and children from the location state
    const location = useLocation();
    const { adults, children } = location.state || { adults: 0, children: 0 }; // Default to 0 if not present

    const fetchHotelData = async () => {
        try {
            const response = await fetch('https://orchidtravels-yymu--5000--134daa3c.local-corp.webcontainer.io/api/data'); // Update to your API endpoint
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
    const totalPersons = parseInt(adults) + parseInt(children);

    const adultsAndChildrenText = `${adults} adult${adults !== 1 ? 's' : ''} and ${children} child${children !== 1 ? 'ren' : ''}`;

    return (
        <div>
            <h1>Available Hotels</h1>
            <HotelList hotels={hotels} adultsAndChildrenText={adultsAndChildrenText} totalPersons={totalPersons} />
            <Footer />
        </div>
    );
};

export default SearchResult;