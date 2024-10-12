import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Bild from './assets/Bild.jpg';

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
    fetch('https://orchidtravels-yymu--5000--134daa3c.local-corp.webcontainer.io/api/data')
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
    console.log('Search initiated');
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
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <img src={Bild} alt="Top banner" style={{ width: '100%', height: 'auto' }} />
      </div>
      <h1 className="center-heading">Where do you want to travel?</h1>
      <div className="form-container">
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
        <div className="date-selects">
          {/* Container for Day, Month, Year selects */}
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
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                  .map((month, index) => (
                    <div key={month} className="option" onClick={() => handleOptionClick('month', month)}>
                      {month}
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
        <div className="guest-selects">
          {/* Container for Adults and Children selects */}
          <div className="custom-select guest-select" onClick={() => toggleDropdown('adults')}>
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

          <div className="custom-select guest-select" onClick={() => toggleDropdown('children')}>
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
        </div>

        {/* Search Button */}
        <div className="button-container">
          <button onClick={handleSubmit} className="search-button">
            Search
          </button>
        </div>
      </div>

      <div className="divider"></div>

      <h1 className="center-heading">Daily activities in our hotels</h1>

      <div className="dividerIcons"></div>

            {/* Divider */}
            <div className="divider"></div>

{/* Divider Icons Container */}
<div className="dividerIcons">
  <div className="iconsList">
    <div className="iconsText">Hotel information provided with ease</div>

    {/* Icons Row */}
    <div className="iconsRow">
      <FontAwesomeIcon icon={faMessage} />
      <FontAwesomeIcon icon={faPhone} />
      <FontAwesomeIcon icon={faLocationDot} />
      <FontAwesomeIcon icon={faPlaneArrival} />
      <FontAwesomeIcon icon={faUtensils} />
    </div>

    {/* Words Row */}
    <div className="wordsRow">
      <span>Reviews</span>
      <span>Call us</span>
      <span>Address</span>
      <span>Arrival time</span>
      <span>Restaurant</span>
    </div>
  </div>
</div>

    </div>
  );
};

export default App;
