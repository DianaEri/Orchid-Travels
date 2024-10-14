import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const SearchForm = ({ onSubmit }) => {
  const [selectedCity, setSelectedCity] = useState('City');
  const [selectedDestination, setSelectedDestination] = useState('City');
  const [selectedAdults, setSelectedAdults] = useState('Nr of adults');
  const [selectedChildren, setSelectedChildren] = useState('Nr of children');
  const [selectedDay, setSelectedDay] = useState('Day'); 
  const [selectedMonth, setSelectedMonth] = useState('Month'); 
  const [selectedYear, setSelectedYear] = useState('Year'); 
  const [selectedLengthOfStay, setSelectedLengthOfStay] = useState('Length of Stay');
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleDropdown = (type) => {
    setDropdownOpen((prev) => ({ ...prev, [type]: !prev[type] }));
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
      case 'lengthOfStay':
        setSelectedLengthOfStay(value);
        break;
      case 'adults':
        setSelectedAdults(value);
        break;
      case 'children':
        setSelectedChildren(value);
        break;
      default:
        break;
    }
    setDropdownOpen((prev) => ({ ...prev, [type]: false }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedDestination !== 'City' && selectedAdults !== 'Nr of adults') {
      onSubmit({
        destination: selectedDestination,
        adults: selectedAdults,
        children: selectedChildren,
      });
    } else {
      console.log('Please select a valid destination and number of adults');
    }
  };

  return (
    <div className="form-container">
      <h2>Point of departure</h2>
      <div className="custom-select" onClick={() => toggleDropdown('city')}>
        <div className="selected">
          {selectedCity}
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
        </div>
        {dropdownOpen.city && (
          <div className="options">
            <div className="option" onClick={() => handleOptionClick('city', 'City')}>City</div>
            <div className="option" onClick={() => handleOptionClick('city', 'Stockholm-Arlanda')}>Stockholm-Arlanda</div>
            <div className="option" onClick={() => handleOptionClick('city', 'Göteborg-Landvetter')}>Göteborg-Landvetter</div>
            <div className="option" onClick={() => handleOptionClick('city', 'Malmö')}>Malmö</div>
          </div>
        )}
      </div>

      <h2>Destination</h2>
      <div className="custom-select" onClick={() => toggleDropdown('destination')}>
        <div className="selected">
          {selectedDestination}
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
        </div>
        {dropdownOpen.destination && (
          <div className="options">
            <div className="option" onClick={() => handleOptionClick('destination', 'Bangkok')}>Bangkok</div>
            <div className="option" onClick={() => handleOptionClick('destination', 'Phuket')}>Phuket</div>
            <div className="option" onClick={() => handleOptionClick('destination', 'Krabi')}>Krabi</div>
          </div>
        )}
      </div>

      <h2>Date of departure</h2>
      <div className="date-selects">
        <div className="custom-select date-select" onClick={() => toggleDropdown('day')}>
          <div className="selected">
            {selectedDay}
            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          </div>
          {dropdownOpen.day && (
            <div className="options">
              {Array.from({ length: 31 }, (_, i) => (
                <div
                  key={i + 1}
                  className="option"
                  onClick={() => handleOptionClick('day', String(i + 1).padStart(2, '0'))}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="custom-select date-select" onClick={() => toggleDropdown('month')}>
          <div className="selected">
            {selectedMonth}
            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          </div>
          {dropdownOpen.month && (
            <div className="options">
              {Array.from({ length: 12 }, (_, i) => (
                <div
                  key={i + 1}
                  className="option"
                  onClick={() => handleOptionClick('month', String(i + 1).padStart(2, '0'))}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="custom-select date-select" onClick={() => toggleDropdown('year')}>
          <div className="selected">
            {selectedYear}
            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          </div>
          {dropdownOpen.year && (
            <div className="options">
              {Array.from({ length: 10 }, (_, i) => (
                <div
                  key={new Date().getFullYear() + i}
                  className="option"
                  onClick={() => handleOptionClick('year', String(new Date().getFullYear() + i))}
                >
                  {new Date().getFullYear() + i}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <h2>Number of guests</h2>
      <div className="custom-select" onClick={() => toggleDropdown('adults')}>
        <div className="selected">
          {selectedAdults}
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
        </div>
        {dropdownOpen.adults && (
          <div className="options">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i + 1}
                className="option"
                onClick={() => handleOptionClick('adults', String(i + 1))}
              >
                {String(i + 1)}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="custom-select" onClick={() => toggleDropdown('children')}>
        <div className="selected">
          {selectedChildren}
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
        </div>
        {dropdownOpen.children && (
          <div className="options">
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i + 1}
                className="option"
                onClick={() => handleOptionClick('children', String(i + 1))}
              >
                {String(i + 1)}
              </div>
            ))}
          </div>
        )}
      </div>

      <h2>Length of stay</h2>
      <div className="custom-select" onClick={() => toggleDropdown('lengthOfStay')}>
        <div className="selected">
          {selectedLengthOfStay}
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
        </div>
        {dropdownOpen.lengthOfStay && (
          <div className="options">
            {Array.from({ length: 14 }, (_, i) => (
              <div
                key={i + 1}
                className="option"
                onClick={() => handleOptionClick('lengthOfStay', String(i + 1))}
              >
                {String(i + 1)}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="button-container">
        <button onClick={handleSubmit} className="search-button">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
