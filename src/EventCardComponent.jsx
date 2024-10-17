// This is the event card component made by Diana.
// The component displays events, including an image, event details, and descriptions.
// All other components (ImageComponent, HeadingBlock, SubHeading, Divider) are also made by Diana,
// except for TextBlock, which is made by Madelene.

import React, { useEffect, useState } from 'react';
import ImageComponent from './ImageComponent'; // Custom component for displaying images
import HeadingBlock from './HeadingBlock'; // Custom component for displaying the hotel name as a heading
import SubHeading from './SubHeading'; // Custom component for displaying the event duration as a subheading
import TextBlock from './TextBlock'; // Custom component for displaying the event description
import Divider from './Divider'; // Custom component to visually separate content
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // For displaying icons
import { faInfinity } from '@fortawesome/free-solid-svg-icons'; // Importing the infinity icon

// EventCardComponent is a functional component that accepts a `hotelName` as a prop.
const EventCardComponent = ({ hotelName }) => {
  // State to hold the event data fetched from an API
  const [events, setEvents] = useState([]); 
  const apiUrl = 'https://orchidtravels-yymu--5000--134daa3c.local-corp.webcontainer.io/api/data'; // API endpoint to fetch event data

  // useEffect hook to fetch event data when the component mounts
  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(apiUrl); // Fetch data from the API
        const data = await response.json(); // Convert the response to JSON
        setEvents(data.events); // Assuming 'events' is the key for the array of event data in the response
      } catch (error) {
        console.error('Error fetching event data:', error); // Log any errors
      }
    };
    fetchEventData(); // Call the async function to fetch event data
  }, []); // The empty dependency array ensures the data is fetched only once when the component mounts

  return (
    <div className="event-card-container">
      {/* Loop over the events array and render an event card for each event */}
      {events.map((event, index) => (
        <div key={index} className="event-card">
          
          {/* Image component with overlays for the date and event name */}
          <div className="image-container">
            <ImageComponent src={event.image} alt={event.name} /> {/* Display event image */}
            
            {/* Overlay to display the event date */}
            <div className="overlay-date">
              {event.date.includes('∞') ? ( 
                // If the event date contains an infinity symbol, display the infinity icon
                <>
                  <FontAwesomeIcon icon={faInfinity} /><br />Nov {/* Display infinity icon for indefinite events */}
                </>
              ) : (
                // Otherwise, display the date in two parts (e.g., "12 Nov" -> "12" and "Nov")
                <>
                  {event.date.split(' ')[0]}<br />{event.date.split(' ')[1]}
                </>
              )}
            </div>

            {/* Overlay to display the event name */}
            <div className="overlay-name">{event.name}</div>
          </div>

          {/* Display the hotel name passed as a prop */}
          <SubHeading text={`${hotelName}`} /> 

          {/* Display the event duration */}
          <SubHeading text={event.duration} /> 

          {/* Display the event description */}
          <TextBlock text={event.description} /> 

          {/* Divider to separate event cards */}
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default EventCardComponent; // Export the component for use in other parts of the application
