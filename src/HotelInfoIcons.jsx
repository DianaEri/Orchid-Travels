// HotelInfoIcons component made by Diana.
// This component displays a set of FontAwesome icons to represent hotel-related information
// such as reviews, contact info, address, arrivals, and restaurant services.
// It provides a visual representation of the hotel information using icons and descriptive text.

import React from 'react'; // Import React for creating components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome for rendering icons
import { 
  faMessage, faPhone, faLocationDot, faPlaneArrival, faUtensils 
} from '@fortawesome/free-solid-svg-icons'; // Import specific FontAwesome icons related to hotel info

// Functional component to display hotel information icons
const HotelInfoIcons = () => {
  return (
    <div className="dividerIcons"> {/* Wrapper div for the icons section */}
      
      <div className="iconsList"> {/* Container for icons and text */}
        
        {/* Text indicating the purpose of the icons */}
        <div className="iconsText">Hotel information provided with ease</div>
        
        {/* Row of icons representing various hotel services and information */}
        <div className="iconsRow">
          {/* Each FontAwesomeIcon component renders a specific icon */}
          <FontAwesomeIcon icon={faMessage} /> {/* Icon representing reviews */}
          <FontAwesomeIcon icon={faPhone} />   {/* Icon representing contact (phone) */}
          <FontAwesomeIcon icon={faLocationDot} /> {/* Icon representing the hotel address */}
          <FontAwesomeIcon icon={faPlaneArrival} /> {/* Icon representing arrivals (transportation) */}
          <FontAwesomeIcon icon={faUtensils} />   {/* Icon representing the restaurant */}
        </div>

        {/* Row of descriptive text corresponding to the icons above */}
        <div className="wordsRow">
          <span>Reviews</span>  {/* Text label for the reviews icon */}
          <span>Call us</span>  {/* Text label for the contact icon */}
          <span>Address</span>  {/* Text label for the address icon */}
          <span>Arrivals</span> {/* Text label for the arrivals icon */}
          <span>Restaurant</span> {/* Text label for the restaurant icon */}
        </div>
      </div>
    </div>
  );
};

export default HotelInfoIcons; // Export the component to be used in other parts of the application
