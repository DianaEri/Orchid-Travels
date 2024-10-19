import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const BookingOptionsForm = () => {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedFlightClass, setSelectedFlightClass] = useState('');

  const [selectedAdults, setSelectedAdults] = useState('');
  const [selectedChildren, setSelectedChildren] = useState('');
  const [basePrice, setBasePrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [flightClassPrice, setFlightClassPrice] = useState(0); 


  const roomPriceAdjustments = {
    doubleRoomBalcony1: 128950,
    doubleRoomPool1: 132950,
    doubleRoomBalcony2: 139950,
    doubleRoomPool2: 142950,
  };


  const flightClassPrices = {
    premium: 7000, 
    plus: 5000,     
    economy: 0     
  };

  // Fetch hotel data from the API
  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        const data = await response.json();
        const hotel = data.hotels.find(hotel => hotel.name === "Laguna Pearl Retreat");

        if (hotel) {
          const pricePerPerson = hotel.price_per_person; 

          // Get the number of adults and children from localStorage
          const adults = localStorage.getItem('selectedAdults') || 0;
          const children = localStorage.getItem('selectedChildren') || 0;

          setSelectedAdults(adults);
          setSelectedChildren(children);

          // Calculate base price based on total number of guests
          const totalGuests = parseInt(adults) + parseInt(children);
          const calculatedBasePrice = totalGuests * pricePerPerson; 

          setBasePrice(calculatedBasePrice);
          setTotalPrice(calculatedBasePrice); 
        }
      } catch (error) {
        console.error('Error fetching hotel data:', error);
      }
    };

    fetchHotelData();
  }, []);


  const handleRoomSelection = (room) => {
    setSelectedRoom(room);

   
    const selectedRoomPrice = roomPriceAdjustments[room];

    
    setTotalPrice(selectedRoomPrice + flightClassPrice);
  };

  
  const handleFlightClassSelection = (flightClass) => {
    setSelectedFlightClass(flightClass);

    
    const selectedFlightClassPrice = flightClassPrices[flightClass];
    setFlightClassPrice(selectedFlightClassPrice);

   
    setTotalPrice(prevTotalPrice => {
      const currentRoomPrice = roomPriceAdjustments[selectedRoom] || basePrice;
      return currentRoomPrice + selectedFlightClassPrice;
    });
  };

  return (
    <div className="booking-options-form">
      <h2 className="booking-title">Booking Options</h2>

      
      <p><strong>Number of Adults:</strong> {selectedAdults ? selectedAdults : 'No adults selected'}</p>
      <p><strong>Number of Children:</strong> {selectedChildren ? selectedChildren : 'No children selected'}</p>

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
        <span className="room-price">128,950 kr</span>
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
        <span className="room-price">132,950 kr</span>
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
        <span className="room-price">139,950 kr</span>
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
        <span className="room-price">142,950 kr</span>
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

     
      <h2 className="total-price">Total Price: {totalPrice.toLocaleString()} kr</h2>
    </div>
  );
};

export default BookingOptionsForm;