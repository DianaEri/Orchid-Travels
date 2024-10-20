import React, { useEffect, useState } from 'react';
import './index.css';

const ChosenBookingOptions = () => {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedRoomPrice, setSelectedRoomPrice] = useState(0);
  const [selectedFlightClass, setSelectedFlightClass] = useState('');


  useEffect(() => {
    const room = localStorage.getItem('selectedRoom');
    const roomPrice = localStorage.getItem('selectedRoomPrice');
    const flightClass = localStorage.getItem('selectedFlightClass');

    if (room) setSelectedRoom(room);
    if (roomPrice) setSelectedRoomPrice(roomPrice);
    if (flightClass) setSelectedFlightClass(flightClass);
  }, []);

  return (
    <div className="chosen-booking-options">
      <h2 className="chosen-booking-title">Chosen Room</h2>
      {selectedRoom && (
        <p className="chosen-room-details">{selectedRoom} {selectedRoomPrice} kr</p>
      )}

      <h2 className="chosen-booking-title">Chosen Flight Class</h2>
      {selectedFlightClass && (
        <p className="chosen-flight-class-details">{selectedFlightClass}</p>
      )}
    </div>
  );
};

export default ChosenBookingOptions;