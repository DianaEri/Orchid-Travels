import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [data, setData] = useState({ locations: [] });
  const [loading, setLoading] = useState(true);
  const [newLocation, setNewLocation] = useState('');
  
  // State for each dropdown
  const [selectedCity, setSelectedCity] = useState('City');
  const [selectedDestination, setSelectedDestination] = useState('City');
  const [selectedDay, setSelectedDay] = useState('Day');
  const [selectedMonth, setSelectedMonth] = useState('Month');
  const [selectedYear, setSelectedYear] = useState('Year');
  const [selectedLengthOfStay, setSelectedLengthOfStay] = useState('1 week');
  const [selectedAdults, setSelectedAdults] = useState('Nr of adults');
  const [selectedChildren, setSelectedChildren] = useState('Nr of children');

  const [dropdownOpen, setDropdownOpen] = useState({
    city: false,
    destination: false,
    day: false,
    month: false,
    year: false,
    lengthOfStay: false,
    adults: false,
    children: false,
  });

  useEffect(() => {
    fetch(
      'https://orchidtravels-yymu--5000--134daa3c.local-corp.webcontainer.io/api/data'
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

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
    setDropdownOpen((prev) => ({ ...prev, [type]: false })); // Close the dropdown
  };

  return (
    <div className="App">
      <h1>Where do you want to travel?</h1>
      <h2>Point of departure</h2>

      {/* Customized Select for Departure City */}
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

      {/* New Section for Destination */}
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

      {/* New Section for Date of Departure */}
      <h2>Date of departure</h2>
      <div className="date-selects"> {/* Container for Day, Month, Year selects */}
        <div className="custom-select" onClick={() => toggleDropdown('day')}>
          <div className="selected">
            {selectedDay}
            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          </div>
          {dropdownOpen.day && (
            <div className="options">
              {Array.from({ length: 31 }, (_, i) => (
                <div key={i + 1} className="option" onClick={() => handleOptionClick('day', String(i + 1).padStart(2, '0'))}>
                  {String(i + 1).padStart(2, '0')}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="custom-select" onClick={() => toggleDropdown('month')}>
          <div className="selected">
            {selectedMonth}
            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          </div>
          {dropdownOpen.month && (
            <div className="options">
              {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                .map((month, index) => (
                  <div key={month} className="option" onClick={() => handleOptionClick('month', month)}>
                    {month}
                  </div>
                ))}
            </div>
          )}
        </div>

        <div className="custom-select" onClick={() => toggleDropdown('year')}>
          <div className="selected">
            {selectedYear}
            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          </div>
          {dropdownOpen.year && (
            <div className="options">
              {['2024', '2025', '2026'].map((year) => (
                <div key={year} className="option" onClick={() => handleOptionClick('year', year)}>
                  {year}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* New Section for Length of Stay */}
      <h2>Length of stay</h2>
      <div className="custom-select" onClick={() => toggleDropdown('lengthOfStay')}>
        <div className="selected">
          {selectedLengthOfStay}
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
        </div>
        {dropdownOpen.lengthOfStay && (
          <div className="options">
            <div className="option" onClick={() => handleOptionClick('lengthOfStay', '1 week')}>1 week</div>
            <div className="option" onClick={() => handleOptionClick('lengthOfStay', '2 weeks')}>2 weeks</div>
            <div className="option" onClick={() => handleOptionClick('lengthOfStay', '3 weeks')}>3 weeks</div>
            <div className="option" onClick={() => handleOptionClick('lengthOfStay', '4 weeks')}>4 weeks</div>
          </div>
        )}
      </div>

      {/* New Section for Guests */}
      <h2>Guests</h2>
      <div className="custom-select" onClick={() => toggleDropdown('adults')}>
        <div className="selected">
          {selectedAdults}
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
        </div>
        {dropdownOpen.adults && (
          <div className="options">
            {['1', '2', '3', '4', '5', 'More than 5...'].map((num) => (
              <div key={num} className="option" onClick={() => handleOptionClick('adults', num)}>
                {num}
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
            {['1', '2', '3', '4', '5', 'More than 5...'].map((num) => (
              <div key={num} className="option" onClick={() => handleOptionClick('children', num)}>
                {num}
              </div>
            ))}
          </div>
        )}
      </div>

      <ul>
        {data.locations && data.locations.length > 0 ? (
          data.locations.map((location, index) => (
            <li key={index}>{location}</li>
          ))
        ) : (
          <li>No locations available</li>
        )}
      </ul>

      <style jsx>{`
        .custom-select {
          position: relative;
          width: 200px;
          cursor: pointer;
          margin-bottom: 20px; /* Add margin between selects */
        }

        .date-selects {
          display: flex; /* Flexbox for horizontal layout */
          gap: 10px; /* Space between the select boxes */
        }

        .selected {
          padding: 10px;
          background-color: #f1f1f1;
          border: 1px solid #ccc;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chevron-icon {
          margin-left: auto;
        }

        .options {
          display: block;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: #fff;
          border: 1px solid #ccc;
          z-index: 1;
        }

        .option {
          padding: 10px;
          background-color: #fff;
          cursor: pointer;
        }

        .option:hover {
          background-color: #ddd;
        }
      `}</style>
    </div>
  );
};

export default App;
