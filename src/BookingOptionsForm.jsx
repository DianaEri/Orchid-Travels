import React, { useState } from 'react';
import './index.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';  

const BookingOptionsForm = () => {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedFlightClass, setSelectedFlightClass] = useState('');

  const handleRoomSelection = (room) => {
    setSelectedRoom(room);
  };

  const handleFlightClassSelection = (flightClass) => {
    setSelectedFlightClass(flightClass);
  };

  return (
    <div className="booking-options-form">
      <h2 className="booking-title">Select Room</h2> 

      <p className="accommodation-1-room">Accommodation with 1 room</p>
      
      <div className="room-option">
        <input 
          type="radio" 
          id="doubleRoomBalcony1" 
          name="room" 
          value="doubleRoomBalcony1" 
          checked={selectedRoom === 'doubleRoomBalcony1'} 
          onChange={() => handleRoomSelection('doubleRoomBalcony1')} 
          className="round-checkbox" 
        />
        <label htmlFor="doubleRoomBalcony1" className="room-label">Dubbelroom with balcony</label>
        <span className="room-price">1200 kr</span> 
      </div>
      <p className="room-description">
        A spacious room with a private balcony and breathtaking views. Perfect for relaxation.
      </p>

      <div className="room-option">
        <input 
          type="radio" 
          id="doubleRoomPool1" 
          name="room" 
          value="doubleRoomPool1" 
          checked={selectedRoom === 'doubleRoomPool1'} 
          onChange={() => handleRoomSelection('doubleRoomPool1')} 
          className="round-checkbox" 
        />
        <label htmlFor="doubleRoomPool1" className="room-label">Dubbelroom with pool access</label>
        <span className="room-price">1500 kr</span> 
      </div>
      <p className="room-description">
        Direct access to the pool area from your room, perfect for a refreshing dip.
      </p>

      <p className="accommodation-2-rooms">Accommodation with 2 rooms</p>

      <div className="room-option">
        <input 
          type="radio" 
          id="doubleRoomBalcony2" 
          name="room" 
          value="doubleRoomBalcony2" 
          checked={selectedRoom === 'doubleRoomBalcony2'} 
          onChange={() => handleRoomSelection('doubleRoomBalcony2')} 
          className="round-checkbox" 
        />
        <label htmlFor="doubleRoomBalcony2" className="room-label">Dubbelroom with balcony</label>
        <span className="room-price">2000 kr</span> 
      </div>
      <p className="room-description">
        Enjoy two rooms, both with private balconies offering stunning scenery.
      </p>

      <div className="room-option">
        <input 
          type="radio" 
          id="doubleRoomPool2" 
          name="room" 
          value="doubleRoomPool2" 
          checked={selectedRoom === 'doubleRoomPool2'} 
          onChange={() => handleRoomSelection('doubleRoomPool2')} 
          className="round-checkbox" 
        />
        <label htmlFor="doubleRoomPool2" className="room-label">Dubbelroom with pool access</label>
        <span className="room-price">2300 kr</span> 
      </div>
      <p className="room-description">
        Two interconnected rooms with exclusive access to the pool area.
      </p>

      <div className="flight-class-section">
        <h2 className="booking-title">Select flight class</h2> 
        
        <div className="flight-option">
          <input 
            type="radio" 
            id="premiumFlight" 
            name="flightClass" 
            value="premium" 
            checked={selectedFlightClass === 'premium'} 
            onChange={() => handleFlightClassSelection('premium')} 
            className="round-checkbox" 
          />
          <label htmlFor="premiumFlight" className="flight-label">
            Premium <FontAwesomeIcon icon={faAngleDown} style={{ color: '#BE8730' }} /> 
          </label>
        </div>
        <p className="flight-description">
          Seat in the front of the plane with good legroom. Checked baggage, meal, and fast track are included.
        </p>

        <div className="flight-option">
          <input 
            type="radio" 
            id="plusFlight" 
            name="flightClass" 
            value="plus" 
            checked={selectedFlightClass === 'plus'} 
            onChange={() => handleFlightClassSelection('plus')} 
            className="round-checkbox" 
          />
          <label htmlFor="plusFlight" className="flight-label">
            Plus <FontAwesomeIcon icon={faAngleDown} style={{ color: '#BE8730' }} /> 
          </label>
        </div>
        <p className="flight-description">
          Seat in the middle part of the plane. Checked baggage and meal are included.
        </p>

        <div className="flight-option">
          <input 
            type="radio" 
            id="economyFlight" 
            name="flightClass" 
            value="economy" 
            checked={selectedFlightClass === 'economy'} 
            onChange={() => handleFlightClassSelection('economy')} 
            className="round-checkbox" 
          />
          <label htmlFor="economyFlight" className="flight-label">
            Economy <FontAwesomeIcon icon={faAngleDown} style={{ color: '#BE8730' }} /> 
          </label>
        </div>
        <p className="flight-description">
          Standard class. Seat in the rear of the plane.
        </p>
      </div>
    </div>
  );
};

export default BookingOptionsForm;