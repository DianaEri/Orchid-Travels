import React, { useEffect, useState } from 'react';
import ImageComponent from './ImageComponent'; // Assuming this component handles the image display
import HeadingBlock from './HeadingBlock'; // For displaying the hotel name
import SubHeading from './SubHeading'; // For displaying the event duration
import TextBlock from './TextBlock'; // For displaying the event description
import Divider from './Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';

const EventCardComponent = ({ hotelName }) => {
  const [events, setEvents] = useState([]); // State to hold the event data
  const apiUrl = 'https://orchidtravels-yymu--5000--134daa3c.local-corp.webcontainer.io/api/data';

  // Fetch event data from the API
  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setEvents(data.events); // Assuming 'events' is the key for event data
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };
    fetchEventData();
  }, []);

  return (
    <div className="event-card-container">
      {events.map((event, index) => (
        <div key={index} className="event-card">
          {/* Image component with date and name overlays */}
          <div className="image-container">
            <ImageComponent src={event.image} alt={event.name} />
            <div className="overlay-date">
    {event.date.includes('∞') ? (
      <>
        <FontAwesomeIcon icon={faInfinity} /><br />Nov
      </>
    ) : (
      <>
        {event.date.split(' ')[0]}<br />{event.date.split(' ')[1]}
      </>
    )}
  </div>
            <div className="overlay-name">{event.name}</div>
          </div>

          {/* Hotel name from props */}
          <SubHeading text={`${hotelName}`} />

          {/* Event duration */}
          <SubHeading text={event.duration} />

          {/* Event description */}
          <TextBlock text={event.description} />
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default EventCardComponent;