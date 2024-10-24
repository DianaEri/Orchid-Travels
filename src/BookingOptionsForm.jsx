// This component, created by Madelene, displays a booking page. Here is an example
// how this booking page works:

// Example: If you choose 3 adults, 3 children, and stay for 2 weeks:
//   Base price per person is 21,491 kr (fetched from API).
//   Total guests = 3 adults + 3 children = 6 guests.
//   Total base price is calculated as follows:
//   Total base price = 21,491 kr * 6 guests = 128,946 kr (per week).
//   Since the stay is for 2 weeks, total base price = 128,946 kr * 2 = 257,892 kr.
//   Room upgrade and flight class costs are added to the total base price, 
//   for Economy and Dubbelroom with balcony Room 1, there is no upgrade (0 kr),
//   so the total remains 257,892 kr.
//   Room price: totalBasePrice = basePricePerPerson * totalGuests * selectedLengthOfStay
//   Final price total = totalBasePrice + roomUpgradePrice + flightClassPrice.

import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const formatPriceWithSpace = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

const BookingOptionsForm = () => {
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedFlightClass, setSelectedFlightClass] = useState('');
  const [selectedAdults, setSelectedAdults] = useState(parseInt(localStorage.getItem('selectedAdults')) || 1);
  const [selectedChildren, setSelectedChildren] = useState(parseInt(localStorage.getItem('selectedChildren')) || 0);
  const [selectedLengthOfStay, setSelectedLengthOfStay] = useState(parseInt(localStorage.getItem('selectedLengthOfStay')) || 1); 
  const [basePricePerPerson, setBasePricePerPerson] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0); 
  const [flightClassPrice, setFlightClassPrice] = useState(0);
  const [roomUpgradePrice, setRoomUpgradePrice] = useState(0);

  const roomPriceAdjustments = {
    doubleRoomBalcony1: 0, 
    doubleRoomPool1: 4000, 
    doubleRoomBalcony2: 7000, 
    doubleRoomPool2: 10000,  
  };

  const flightClassPrices = {
    premium: 6000, 
    plus: 3000,
    economy: 0
  };

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        const data = await response.json();
        const lagunaHotel = data.hotels.find(hotel => hotel.name === "Laguna Pearl Retreat");

        if (lagunaHotel) {
          setBasePricePerPerson(lagunaHotel.price_per_person);
        }
      } catch (error) {
        console.error('Error fetching hotel data:', error);
      }
    };

    fetchHotelData();
  }, []);

  const roomNameMapping = {
    doubleRoomBalcony1: 'Dubbelroom with balcony 1 room',
    doubleRoomPool1: 'Dubbelroom with pool access 1 room',
    doubleRoomBalcony2: 'Dubbelroom with balcony 2 rooms',
    doubleRoomPool2: 'Dubbelroom with pool access 2 rooms',
  };

  const flightClassNameMapping = {
    premium: 'Premium',
    plus: 'Plus',
    economy: 'Economy',
  };

  useEffect(() => {
    localStorage.setItem('selectedAdults', selectedAdults);
  }, [selectedAdults]);

  useEffect(() => {
    localStorage.setItem('selectedChildren', selectedChildren);
  }, [selectedChildren]);

  useEffect(() => {
    localStorage.setItem('selectedLengthOfStay', selectedLengthOfStay);
  }, [selectedLengthOfStay]);

  useEffect(() => {
    if (selectedRoom && selectedFlightClass) {
      const totalGuests = parseInt(selectedAdults) + parseInt(selectedChildren);

      const totalBasePrice = basePricePerPerson * totalGuests * selectedLengthOfStay;
      const totalRoomUpgradePrice = roomUpgradePrice * totalGuests * selectedLengthOfStay;

      
      const totalFlightClassPrice = flightClassPrice * totalGuests;

      const total = totalBasePrice + totalRoomUpgradePrice + totalFlightClassPrice;
      
      setTotalPrice(total);
      localStorage.setItem('totalPrice', total);
    } else {
      setTotalPrice(0);
      localStorage.setItem('totalPrice', 0); 
    }
  }, [
    basePricePerPerson,
    roomUpgradePrice,
    flightClassPrice,
    selectedRoom,
    selectedFlightClass,
    selectedAdults,
    selectedChildren,
    selectedLengthOfStay,
  ]);

  const handleRoomSelection = (room) => {
    setSelectedRoom(room);
    const selectedRoomUpgradePrice = roomPriceAdjustments[room] || 0;
    
    setRoomUpgradePrice(selectedRoomUpgradePrice);
    const roomPrice = (basePricePerPerson + selectedRoomUpgradePrice) * selectedLengthOfStay * (parseInt(selectedAdults) + parseInt(selectedChildren));

    localStorage.setItem('selectedRoom', roomNameMapping[room]);
    localStorage.setItem('selectedRoomPrice', roomPrice);
  };

  const handleFlightClassSelection = (flightClass) => {
    setSelectedFlightClass(flightClass);
    const selectedFlightClassPrice = flightClassPrices[flightClass] || 0;
    setFlightClassPrice(selectedFlightClassPrice);

    localStorage.setItem('selectedFlightClass', flightClassNameMapping[flightClass]);
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
        <span className="room-price">{formatPriceWithSpace((basePricePerPerson + roomPriceAdjustments.doubleRoomBalcony1) * selectedLengthOfStay * (parseInt(selectedAdults) + parseInt(selectedChildren)))} kr</span>
      </div>
      <p className="room-description">A spacious room with a private balcony and breathtaking views. Perfect for relaxation.</p>

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
        <span className="room-price">{formatPriceWithSpace((basePricePerPerson + roomPriceAdjustments.doubleRoomPool1) * selectedLengthOfStay * (parseInt(selectedAdults) + parseInt(selectedChildren)))} kr</span>
      </div>
      <p className="room-description">Direct access to the pool area from your room, perfect for a refreshing dip.</p>

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
        <span className="room-price">{formatPriceWithSpace((basePricePerPerson + roomPriceAdjustments.doubleRoomBalcony2) * selectedLengthOfStay * (parseInt(selectedAdults) + parseInt(selectedChildren)))} kr</span>
      </div>
      <p className="room-description">Enjoy two rooms, both with private balconies offering stunning scenery.</p>

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
        <span className="room-price">{formatPriceWithSpace((basePricePerPerson + roomPriceAdjustments.doubleRoomPool2) * selectedLengthOfStay * (parseInt(selectedAdults) + parseInt(selectedChildren)))} kr</span>
      </div>
      <p className="room-description">Two interconnected rooms with exclusive access to the pool area.</p>

      <h2 className="booking-title flight-class-title">Select flight class</h2>

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
      <p className="flight-description">Seat in the front of the plane with good legroom. Checked baggage, meal, and fast track are included.</p>

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
      <p className="flight-description">Seat in the middle part of the plane. Checked baggage and meal are included.</p>

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
      <p className="flight-description">Standard class. Seat in the rear of the plane.</p>
      <div className="total-price">Total Price: {totalPrice.toLocaleString()} kr</div>
    </div>
  );
};

export default BookingOptionsForm;