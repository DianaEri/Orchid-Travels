// This component, created by (Madelene), retrieves and displays travel information, displays information
// for "Date of departure","Point of departure","Lenght of stay", "Destination". The data is retrieved 
// from local storage from SearchForm.jsx

import React from 'react'; // Import React to create the component
import './index.css'; //Import styling

// Displays travel details based on values stored in localStorage.
const TravelDetailsData = () => {
  // Get the city value from localStorage; if not found, set to 'Not selected'.
  const city = localStorage.getItem('selectedCity') || 'Not selected';
  // Get the day value from localStorage; if not found, set to 'DD'.
  const day = localStorage.getItem('selectedDay') || 'DD';
  // Get the month value from localStorage; if not found, set to 'MM'.
  const month = localStorage.getItem('selectedMonth') || 'MM';
  // Get the year value from localStorage; if not found, set to 'YYYY'.
  const year = localStorage.getItem('selectedYear') || 'YYYY';
  // Get the length of stay value from localStorage, convert to a number; if not found, set to 'Not selected'.
  const lengthOfStay = parseInt(localStorage.getItem('selectedLengthOfStay')) || 'Not selected';
  // Get the destination value from localStorage; if not found, set to 'Not selected'.
  const destination = localStorage.getItem('selectedDestination') || 'Not selected';

  // Set the text to display based on the length of stay value, writing week for 1 week and the rest
  // 1----> to weeks
  const lengthOfStayText = lengthOfStay === 1 ? 'Week' : 'Weeks';

  return (
    // Container for travel details, here the travel details are displayed.
    <div className="travel-details-container">
      {/* Top section for date and point of departure */}
      <div className="top-options">
        {/* Display date of departure */}
        <div className="option">
          <label className="option-label">Date of departure:</label>
          <span className="details-value">{day}/{month}/{year}</span> 
        </div>
        {/* Display point of departure */}
        <div className="option">
          <label className="option-label">Point of departure:</label>
          <span className="details-value">{city}</span> 
        </div>
      </div>

      {/* Bottom section for length of stay and destination */}
      <div className="bottom-options">
        {/* Display length of stay */}
        <div className="option">
          <label className="option-label">Length of stay:</label>
          <span className="details-value">{lengthOfStay} {lengthOfStayText}</span> 
        </div>
        {/* Display destination */}
        <div className="option">
          <label className="option-label">Destination:</label>
          <span className="details-value">{destination}</span> 
        </div>
      </div>
    </div>
  );
};


export default TravelDetailsData; //  Export the component to be used in other parts of the project