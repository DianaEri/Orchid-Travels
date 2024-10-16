import React, { useEffect, useState } from 'react';
import ImageComponent from './ImageComponent'; // Assuming this component handles the image display
import HeadingBlock from './HeadingBlock'; // For displaying the hotel name
import SubHeading from './SubHeading'; // For displaying the event duration
import TextBlock from './TextBlock'; // For displaying the event description

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
            <div className="overlay-date">{event.date}</div>
            <div className="overlay-name">{event.name}</div>
          </div>

          {/* Hotel name from props */}
          <HeadingBlock text={`Hotel ${hotelName}`} />

          {/* Event duration */}
          <SubHeading text={event.duration} />

          {/* Event description */}
          <TextBlock text={event.description} />
        </div>
      ))}
    </div>
  );
};

export default EventCardComponent;