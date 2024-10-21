import React, { useEffect, useState } from 'react';
import './index.css';

const formatPriceWithSpace = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

const ChosenBookingOptions = () => {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedRoomPrice, setSelectedRoomPrice] = useState(0);
  const [selectedFlightClass, setSelectedFlightClass] = useState('');

 
  useEffect(() => {
    const room = localStorage.getItem('selectedRoom'); 
    const roomPrice = localStorage.getItem('selectedRoomPrice'); 
    const flightClass = localStorage.getItem('selectedFlightClass'); 

 
    if (room) setSelectedRoom(room);
    if (roomPrice) setSelectedRoomPrice(Number(roomPrice)); 
    if (flightClass) setSelectedFlightClass(flightClass);
  }, []);

  return (
    <div className="chosen-booking-options">
      <h2 className="chosen-booking-title">Chosen Room</h2>
      {selectedRoom && (
        <p className="chosen-room-details">
          {selectedRoom}{' '}
          <span className="bold-price">{formatPriceWithSpace(selectedRoomPrice)} kr</span>
        </p>
      )}

      <h2 className="chosen-booking-title">Chosen Flight Class</h2>
      {selectedFlightClass && (
        <p className="chosen-flight-class-details">{selectedFlightClass}</p>
      )}
    </div>
  );
};

export default ChosenBookingOptions;