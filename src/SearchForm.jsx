// This component is made by Diana and handles the search on the main
// page of the application. It allows users to select the point of departure, 
// destination, date of departure, number of guests, and length of stay.

import React, { useState } from 'react'; // Import React and the useState hook for state management
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome for icons
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Import the ChevronDown icon for dropdowns
import Button from './Button'; // Import the Button component for form submission

// SearchForm component definition
const SearchForm = ({
  onSubmit, // Parent function to handle form submission
  selectedDestination, setSelectedDestination, // Destination state and setter
  selectedAdults, setSelectedAdults, // Adults state and setter
  selectedChildren, setSelectedChildren // Children state and setter
}) => {
  // Dropdown open/close state for each form section
  const [dropdownOpen, setDropdownOpen] = useState({
    city: false,
    adults: false,
    children: false,
  });

  // Additional state variables for other selections
  const [selectedCity, setSelectedCity] = useState('Select City'); // City selection
  const [selectedDay, setSelectedDay] = useState('Day'); // Day of departure selection
  const [selectedMonth, setSelectedMonth] = useState('Month'); // Month of departure selection
  const [selectedYear, setSelectedYear] = useState('Year'); // Year of departure selection
  const [selectedLengthOfStay, setSelectedLengthOfStay] = useState('Length of stay'); // Length of stay selection

  // Function to toggle dropdown visibility based on type (city, adults, children)
  const toggleDropdown = (type) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [type]: !prev[type], // Toggle the dropdown state
    }));
  };

  // Function to handle option selection and update the corresponding state
  const handleOptionClick = (type, value) => {
    switch (type) {
      case 'city':
        setSelectedCity(value); // Update city selection
        break;
      case 'destination':
        setSelectedDestination(value); // Update destination selection
        break;
      case 'day':
        setSelectedDay(value); // Update day of departure selection
        break;
      case 'month':
        setSelectedMonth(value); // Update month of departure selection
        break;
      case 'year':
        setSelectedYear(value); // Update year of departure selection
        break;
      case 'adults':
        setSelectedAdults(value); // Update number of adults
        break;
      case 'children':
        setSelectedChildren(value); // Update number of children
        break;
      case 'lengthOfStay':
        setSelectedLengthOfStay(value); // Update length of stay
        break;
      default:
        break;
    }
    // Close the dropdown after an option is selected
    toggleDropdown(type);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    onSubmit(event); // Call the parent's handleSubmit function with the form event
  };

  return (
    <form onSubmit={handleSubmit}> {/* Wrap the form elements inside a form tag */}
      <div className="form-container">

        {/* Dropdown for selecting the city */}
        <h2>Point of departure</h2>
        <select 
          value={selectedCity} 
          onChange={(e) => handleOptionClick('city', e.target.value)} 
          className="select-dropdown"
        >
          <option value="City">City</option>
          <option value="Stockholm-Arlanda">Stockholm-Arlanda</option>
          <option value="Göteborg-Landvetter">Göteborg-Landvetter</option>
          <option value="Malmö">Malmö</option>
        </select>

        {/* Dropdown for selecting the destination */}
        <h2>Destination</h2>
        <select 
          value={selectedDestination} 
          onChange={(e) => handleOptionClick('destination', e.target.value)} 
          className="select-dropdown"
        >
          <option value="">Select a destination</option>
          <option value="Bangkok">Bangkok</option>
          <option value="Phuket">Phuket</option>
          <option value="Krabi">Krabi</option>
        </select>

        {/* Date of departure selectors */}
        <h2>Date of departure</h2>
        <div className="date-selects">
          {/* Day selector */}
          <select 
            value={selectedDay} 
            onChange={(e) => handleOptionClick('day', e.target.value)} 
            className="select-dropdown"
          >
            <option value="">Day</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                {String(i + 1).padStart(2, '0')}
              </option>
            ))}
          </select>

          {/* Month selector */}
          <select 
            value={selectedMonth} 
            onChange={(e) => handleOptionClick('month', e.target.value)} 
            className="select-dropdown"
          >
            <option value="">Month</option>
            {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
              .map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
          </select>

          {/* Year selector */}
          <select 
            value={selectedYear} 
            onChange={(e) => handleOptionClick('year', e.target.value)} 
            className="select-dropdown"
          >
            <option value="">Year</option>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={new Date().getFullYear() + i} value={String(new Date().getFullYear() + i)}>
                {new Date().getFullYear() + i}
              </option>
            ))}
          </select>
        </div>

        {/* Guest selectors */}
        <h2>Guests</h2>
        <div className="guest-selects">
          {/* Adults selector */}
          <select 
            value={selectedAdults} 
            onChange={(e) => handleOptionClick('adults', e.target.value)} 
            className="select-dropdown"
          >
            <option value="">Number of adults</option>
            {['1', '2', '3', '4', '5', 'More than 5...'].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>

          {/* Children selector */}
          <select 
            value={selectedChildren} 
            onChange={(e) => handleOptionClick('children', e.target.value)} 
            className="select-dropdown"
          >
            <option value="">Number of children</option>
            {['1', '2', '3', '4', '5', 'More than 5...'].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {/* Dropdown for length of stay */}
        <h2>Length of stay</h2>
        <select 
          value={selectedLengthOfStay} 
          onChange={(e) => handleOptionClick('lengthOfStay', e.target.value)} 
          className="select-dropdown"
        >
          <option value="">Select length of stay</option>
          <option value="1 week">1 week</option>
          <option value="2 weeks">2 weeks</option>
          <option value="3 weeks">3 weeks</option>
          <option value="4 weeks">4 weeks</option>
        </select>

        {/* Search button */}
        <div className="button-container">
          {/* The button submits the form, triggering the form's onSubmit handler */}
          <button type="submit" className="search-button">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm; // Export the SearchForm component
