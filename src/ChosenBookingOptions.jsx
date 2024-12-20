// This component, created by (Madelene)
// This component displays the user's choice of room and flight class. It retrieves information about the selected room, price, and flight class
// from localStorage from "BookingOptionsForm.jsx  and displays these details on the page. The price is formatted with spaces for better 
// readability.

// Import React and hooks (useEffect, useState)
import React, { useEffect, useState } from 'react';
// Import the CSS file for styling.
import './index.css';

// // Function to format price with spaces (e.g., 10 000)
const formatPriceWithSpace = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

// Component to display chosen booking options.
const ChosenBookingOptions = () => {
  // State to store the selected room.
  const [selectedRoom, setSelectedRoom] = useState('');
  // State to store the selected room price.
  const [selectedRoomPrice, setSelectedRoomPrice] = useState(0);
  // State to store the selected flight class.
  const [selectedFlightClass, setSelectedFlightClass] = useState('');

  // useEffect to load saved values from localStorage when the component starts.
  useEffect(() => {
    // Retrieve the selected room from localStorage.
    const room = localStorage.getItem('selectedRoom'); 
    // Retrieve the selected room price from localStorage.
    const roomPrice = localStorage.getItem('selectedRoomPrice'); 
    // Retrieve the selected flight class from localStorage.
    const flightClass = localStorage.getItem('selectedFlightClass'); 

    // Set the selected room if it exists in localStorage.
    if (room) setSelectedRoom(room);
    // Set the selected room price if it exists in localStorage and convert it to a number.
    if (roomPrice) setSelectedRoomPrice(Number(roomPrice)); 
    // Set the selected flight class if it exists in localStorage.
    if (flightClass) setSelectedFlightClass(flightClass);
  }, []);

  return (
    // Container for the chosen booking options.
    <div className="chosen-booking-options">
      {/* Title for the chosen room section */}
      <h2 className="chosen-booking-title">Chosen Room</h2>
      {/* Display the chosen room details if a room is selected */}
      {selectedRoom && (
        <p className="chosen-room-details">
          {selectedRoom}{' '}
          <span className="bold-price">{formatPriceWithSpace(selectedRoomPrice)} kr</span>
        </p>
      )}

      {/* Title for the chosen flight class section */}
      <h2 className="chosen-booking-title">Chosen Flight Class</h2>
      {/* Display the chosen flight class details if a flight class is selected */}
      {selectedFlightClass && (
        <p className="chosen-flight-class-details">{selectedFlightClass}</p>
      )}
    </div>
  );
};

// Export the component to be used in other parts of the project
export default ChosenBookingOptions;