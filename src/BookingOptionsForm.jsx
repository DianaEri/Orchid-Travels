// This component, created by (Madelene), displays choices for what you can book with radio buttons. 
// You have Room choices and Select flight choices. 
// The user can select a room type from the options available, each with different amenities and price adjustments.
// Additionally, the user can choose their flight class, such as Economy, Plus, or Premium, each with specific benefits.
// The component calculates the total price based on the user's selections, including the number of guests and the length of stay.
// Im getting data for "price per person" from API. "Lenght of stay" "Selected adults"
// "Selected children" data from App.jsx from local storage.  

// Here is an example how this booking page is intended to work:
// Example: If you choose 3 adults, 3 children, and stay for 2 weeks:
//   Base price per person is  11491 kr (fetched from API).
//   Total guests = 3 adults + 3 children = 6 guests.
//   Total base price is calculated as follows:
//   Total base price =  11491 kr * 6 guests = 68946 kr (per week).
//   Since the stay is for 2 weeks, total base price = 68946 kr * 2 = 137892 kr.
//   Room upgrade and flight class costs are added to the total base price, 
//   for Economy and Dubbelroom with balcony Room 1, there is no upgrade (0 kr),
//   so the total remains 137892 kr.
//   Room price: totalBasePrice = basePricePerPerson * totalGuests * selectedLengthOfStay
//   Final price total = totalBasePrice + roomUpgradePrice + flightClassPrice.

// If you chose room upgrades the upgrade is TotalBasePrice (11491 kr * guests * selectedLengthOfStay) + room upgrade (+0 or +4000 or +7000 or +1000)
// If you chose flight class it is flight class price per person. So if it is 6 guests. Its Economy = 6*0 
// Plus = 6*3000 Premium = 6*6000


// Import React and hooks (useState, useEffect)
import React, { useState, useEffect } from 'react'; // Import React and hooks (useEffect, useState)
import './index.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the font awesome icon
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';  // Import the font awesome icon

// Function to format price with spaces (e.g., 10 000)
const formatPriceWithSpace = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

// Component for managing booking options
const BookingOptionsForm = () => {
  // State variables to manage user selections and calculated values
  const [selectedRoom, setSelectedRoom] = useState(''); // Stores the selected room type
  const [selectedFlightClass, setSelectedFlightClass] = useState(''); // Stores the selected flight class
  const [selectedAdults, setSelectedAdults] = useState(parseInt(localStorage.getItem('selectedAdults')) || 1); // Stores the number of adults
  const [selectedChildren, setSelectedChildren] = useState(parseInt(localStorage.getItem('selectedChildren')) || 0); // Stores the number of children
  const [selectedLengthOfStay, setSelectedLengthOfStay] = useState(parseInt(localStorage.getItem('selectedLengthOfStay')) || 1); // Stores the length of stay in days
  const [basePricePerPerson, setBasePricePerPerson] = useState(0); // Stores the base price per person fetched from the API
  const [totalPrice, setTotalPrice] = useState(0); // Stores the total calculated price
  const [flightClassPrice, setFlightClassPrice] = useState(0); // Stores the additional cost based on flight class selection
  const [roomUpgradePrice, setRoomUpgradePrice] = useState(0); // Stores the additional cost based on room upgrade selection

  // Object containing price adjustments for each room type, the upgrade prices for each room.
  const roomPriceAdjustments = {
    doubleRoomBalcony1: 0, 
    doubleRoomPool1: 4000, 
    doubleRoomBalcony2: 7000, 
    doubleRoomPool2: 10000,  
  };

  // Object containing additional prices for each flight class, the upgrade prices for each flight class.
  const flightClassPrices = {
    premium: 6000, 
    plus: 3000,
    economy: 0
  };

  // Fetch hotel data from API to set base price per person
  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        const data = await response.json();
        const lagunaHotel = data.hotels.find(hotel => hotel.name === "Laguna Pearl Retreat");

        // Set base price if the hotel data is found
        if (lagunaHotel) {
          setBasePricePerPerson(lagunaHotel.price_per_person);
        }
      } catch (error) {
        console.error('Error fetching hotel data:', error);
      }
    };

    fetchHotelData();
  }, []);

  // Object to map room IDs to format and display room names correctly
  const roomNameMapping = {
    doubleRoomBalcony1: 'Dubbelroom with balcony 1 room',
    doubleRoomPool1: 'Dubbelroom with pool access 1 room',
    doubleRoomBalcony2: 'Dubbelroom with balcony 2 rooms',
    doubleRoomPool2: 'Dubbelroom with pool access 2 rooms',
  };

  // Object to map flight class IDs to display names correctly
  const flightClassNameMapping = {
    premium: 'Premium',
    plus: 'Plus',
    economy: 'Economy',
  };

  // Save selected values in local storage when they change
  useEffect(() => {
    localStorage.setItem('selectedAdults', selectedAdults);
  }, [selectedAdults]);

  useEffect(() => {
    localStorage.setItem('selectedChildren', selectedChildren);
  }, [selectedChildren]);

  useEffect(() => {
    localStorage.setItem('selectedLengthOfStay', selectedLengthOfStay);
  }, [selectedLengthOfStay]);

  // Calculate total price whenever relevant state values change
  useEffect(() => {
    if (selectedRoom && selectedFlightClass) {
      const totalGuests = parseInt(selectedAdults) + parseInt(selectedChildren);

      // Calculate base price based on the number of guests and length of stay
      const totalBasePrice = basePricePerPerson * totalGuests * selectedLengthOfStay;

      // Add room upgrade price
      const totalPriceWithRoomUpgrade = totalBasePrice + roomUpgradePrice;

      // Add flight class price based on the number of guests
      const totalFlightClassPrice = flightClassPrice * totalGuests;

      // Calculate total price
      const total = totalPriceWithRoomUpgrade + totalFlightClassPrice;
      
      setTotalPrice(total);
      localStorage.setItem('totalPrice', total);
      localStorage.setItem('selectedRoomPrice', totalPriceWithRoomUpgrade); // Save room price specifically
    } else {
      // Reset total price if no room or flight class is selected
      setTotalPrice(0);
      localStorage.setItem('totalPrice', 0); 
      localStorage.setItem('selectedRoomPrice', 0); // Reset room price
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

  // Function to handle room selection and set upgrade price
  const handleRoomSelection = (room) => {
    setSelectedRoom(room);
    // Get the price adjustment for the selected room
    const selectedRoomUpgradePrice = roomPriceAdjustments[room] || 0;
    // Update the state with the new room upgrade price
    setRoomUpgradePrice(selectedRoomUpgradePrice);

    // Calculate and save the price for this room in local storage
    const totalGuests = parseInt(selectedAdults) + parseInt(selectedChildren);
    const totalBasePrice = basePricePerPerson * totalGuests * selectedLengthOfStay;
    const totalPriceWithRoomUpgrade = totalBasePrice + selectedRoomUpgradePrice;
    localStorage.setItem('selectedRoomPrice', totalPriceWithRoomUpgrade);
    localStorage.setItem('selectedRoom', roomNameMapping[room]);
  };

  // Function to handle flight class selection and set price
  const handleFlightClassSelection = (flightClass) => {
    setSelectedFlightClass(flightClass);
    // Get the price adjustment for the selected flight class
    const selectedFlightClassPrice = flightClassPrices[flightClass] || 0;
    // Update the state with the new flight class price
    setFlightClassPrice(selectedFlightClassPrice);
    // Save the selected flight class in local storage
    localStorage.setItem('selectedFlightClass', flightClassNameMapping[flightClass]);
  };

  // Function to calculate the total price for a room
  const calculateTotalPriceForRoom = (room) => {
    // Get the room upgrade price for the specific room
    const roomUpgrade = roomPriceAdjustments[room] || 0;
    // Calculate the total number of guests
    const totalGuests = parseInt(selectedAdults) + parseInt(selectedChildren);
    // Calculate the base price based on the guests and length of stay
    const totalBasePrice = basePricePerPerson * totalGuests * selectedLengthOfStay;
    // Return the total price formatted with spaces
    return formatPriceWithSpace(totalBasePrice + roomUpgrade) + ' kr';
  };

  // Render the form with room and flight options
  return (
    <div className="booking-options-form">
      <h2 className="booking-title">Select Room</h2>
      <p className="accommodation-1-room">Accommodation with 1 room</p>

      {/* Room options for 1 room radio buttons, price, text e.g. */}
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
        <span className="room-price">{calculateTotalPriceForRoom('doubleRoomBalcony1')}</span>
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
        <span className="room-price">{calculateTotalPriceForRoom('doubleRoomPool1')}</span>
      </div>
      <p className="room-description">Direct access to the pool area from your room, perfect for a refreshing dip.</p>

      {/* Room options for 2 rooms radio buttons, price, text e.g. */}
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
        <span className="room-price">{calculateTotalPriceForRoom('doubleRoomBalcony2')}</span>
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
        <span className="room-price">{calculateTotalPriceForRoom('doubleRoomPool2')}</span>
      </div>
      <p className="room-description">Two interconnected rooms with exclusive access to the pool area.</p>

      <h2 className="booking-title flight-class-title">Select flight class</h2>

      {/* Flight class options radio buttons, price, font awesome icons, text e.g. */}
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
    </div>
  );
};

// Export the component to be used in other parts of the project
export default BookingOptionsForm;
