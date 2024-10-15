import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Button from './Button'; // Import the Button component

const SearchForm = ({ onSubmit, selectedDestination, setSelectedDestination, selectedAdults, setSelectedAdults, selectedChildren, setSelectedChildren }) => {
  const [dropdownOpen, setDropdownOpen] = useState({
    city: false,
    adults: false,
    children: false,
  });

  // State variables for additional selections
  const [selectedCity, setSelectedCity] = useState('Select City');
  const [selectedDay, setSelectedDay] = useState('Day');
  const [selectedMonth, setSelectedMonth] = useState('Month');
  const [selectedYear, setSelectedYear] = useState('Year');
  const [selectedLengthOfStay, setSelectedLengthOfStay] = useState('Length of stay');

  const toggleDropdown = (type) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handleOptionClick = (type, value) => {
    switch (type) {
      case 'city':
        setSelectedCity(value);
        break;
      case 'destination':
        setSelectedDestination(value);
        break;
      case 'day':
        setSelectedDay(value);
        break;
      case 'month':
        setSelectedMonth(value);
        break;
      case 'year':
        setSelectedYear(value);
        break;
      case 'adults':
        setSelectedAdults(value);
        break;
      case 'children':
        setSelectedChildren(value);
        break;
      case 'lengthOfStay':
        setSelectedLengthOfStay(value);
        break;
      default:
        break;
    }
    // Close dropdown after selection
    toggleDropdown(type);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    onSubmit(event); // Call the parent's handleSubmit
  };

  return (
    <form onSubmit={handleSubmit}> {/* Wrap in form tag */}
      <div className="form-container">
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

<h2>Date of departure</h2>
<div className="date-selects">
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

  <select 
    value={selectedMonth} 
    onChange={(e) => handleOptionClick('month', e.target.value)} 
    className="select-dropdown"
  >
    <option value="">Month</option>
    {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      .map((month, index) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
  </select>

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

<h2>Guests</h2>
<div className="guest-selects">
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

      <div className="button-container">
        {/* Remove onClick handler from the button; it's handled by the form's onSubmit */}
        <button type="submit" className="search-button">
          Search
        </button>
      </div>
      </div>
    </form> // Closing form tag
  );
};

export default SearchForm;
