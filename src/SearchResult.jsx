// This element was made by (Diana). She ensured that the data from the hotel 
// search carries over to be displayed in this component. 
// She also created the components HotelList and Footer. 

// The rest of the components, such as Header, YellowLine
// ScrollToTopButton, TravelDetailsData are made by (Madelene).

import React, { useEffect, useState } from 'react'; // Import React, useEffect, and useState hooks for state and lifecycle management
import { useLocation } from 'react-router-dom'; // Import useLocation to access data passed through navigation
import './index.css'; // Import CSS for styling
import HotelList from './HotelList'; // Import the HotelList component to display a list of hotels
import Footer from './Footer'; // Import the Footer component for the page's footer
import Header from './Header'; // Import the Header component for the page's header
import TravelDetailsData from './TravelDetailsData'; 
import YellowLine from './YellowLine'; // Import YellowLine component for a horizontal visual separator
import ScrollToTopButton from './ScrollToTopButton'; // Displays a button that allows users to quickly return to 
                                                     // the top of the page after scrolling down.


// Main component definition
const SearchResult = () => {
    const [hotels, setHotels] = useState([]); // State to hold the hotel data fetched from the API
    const [loading, setLoading] = useState(true); // State to handle loading status while fetching data
    const [error, setError] = useState(null); // State to manage any errors during the fetch operation

    // Extract the number of adults, children, and length of stay passed via the location state
    const location = useLocation();
    const { adults = 0, children = 0, lengthOfStay = 1 } = location.state || {}; // Default to 0 adults, 0 children, and 1 week length of stay

    // Function to fetch hotel data from the API
    const fetchHotelData = async () => {
        try {
            const response = await fetch('https://orchidtravels-yymu--5000--134daa3c.local-corp.webcontainer.io/api/data'); // API endpoint to fetch hotel data
            if (!response.ok) {
                throw new Error('Network response was not ok'); // Handle non-200 responses
            }
            const data = await response.json(); // Parse the response JSON
            setHotels(data.hotels); // Update the state with the fetched hotel data
        } catch (error) {
            console.error('Error fetching hotel data:', error); // Log any errors
            setError(error); // Set the error state to display an error message
        } finally {
            setLoading(false); // Set loading state to false once the fetch is complete (success or failure)
        }
    };

    // useEffect hook to fetch hotel data when the component mounts
    useEffect(() => {
        fetchHotelData(); // Call the fetch function on component mount
    }, []); // Empty dependency array ensures this only runs once when the component is mounted

    // Conditional rendering based on loading or error states
    if (loading) {
        return <div>Loading...</div>; // Show a loading message while data is being fetched
    }

    if (error) {
        return <div>Error: {error.message}</div>; // Show an error message if there was an issue fetching data
    }

    // Calculate the total number of persons based on the number of adults and children
    const totalPersons = parseInt(adults) + parseInt(children);

    // Create a string to display the number of adults and children
    const adultsAndChildrenText = `${adults} adult${adults !== 1 ? 's' : ''} and ${children} child${children !== 1 ? 'ren' : ''}`;

    return (
        <div>
            {/* Render the Header component */}
            <Header />
            
            {/* Render the YellowLine component for a visual divider */}
            <YellowLine />

            <TravelDetailsData />
            
            {/* Render the HotelList component and pass down the list of hotels, totalPersons, and formatted text */}
            <HotelList 
            hotels={hotels} 
            adultsAndChildrenText={adultsAndChildrenText} 
            totalPersons={totalPersons} 
            selectedLengthOfStay={lengthOfStay}  // Pass the length of stay
            />
            
            {/*Displays a button that allows users to quickly return to the top of the page after
            scrolling down.*/}
            <ScrollToTopButton />

            {/* Render the Footer component */}
            <Footer />
        </div>
    );
};

export default SearchResult; // Export the component for use in the application
