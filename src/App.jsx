import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMessage, faPhone, faLocationDot, faPlaneArrival, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faSquareInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import Bild from './assets/Bild.jpg';
import BlackLogo from './assets/Black logo.svg';
import TripadvisorLogo from './assets/tripadvisor.svg';

const Footer = () => {
  return (
    <div className="footer" style={{ width: '100%', textAlign: 'center', padding: '1em 0' }}>
      {/* Black Logo */}
      <img src={BlackLogo} alt="Black Logo" style={{ height: '2em', width: 'auto' }} />
      
      <div>Orchid Travels</div>

      {/* TripAdvisor Logo and Social Media Icons */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '1em 0' }}>
        <img src={TripadvisorLogo} alt="Tripadvisor Logo" style={{ height: '2em', width: 'auto' }} />
        
        {/* Social Media Icons */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '0.5em 0' }}>
          <FontAwesomeIcon icon={faSquareInstagram} style={{ margin: '0 10px' }} />
          <FontAwesomeIcon icon={faYoutube} style={{ margin: '0 10px' }} />
          <FontAwesomeIcon icon={faSquareFacebook} style={{ margin: '0 10px' }} />
        </div>
      </div>

      {/* Footer Texts */}
      <div>Reviews</div>
      <div>Contact us</div>
      <div>Address</div>
      <div>Search</div>
      <div>Hotel activities</div>
      <div>Gallery</div>
      <div>2024 Orchid Travels</div>
      <div>Terms & conditions / Privacy policy</div>
    </div>
  );
};

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
                {Array.from({ length: 5 }, (_, i) => (
                  <div key={2024 + i} className="option" onClick={() => handleOptionClick('year', String(2024 + i))}>
                    {2024 + i}
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
              {['1 week', '2 weeks', '3 weeks', '1 month'].map((stay) => (
                <div key={stay} className="option" onClick={() => handleOptionClick('lengthOfStay', stay)}>
                  {stay}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* New Section for Number of Adults */}
        <h2>Number of adults</h2>
        <div className="custom-select" onClick={() => toggleDropdown('adults')}>
          <div className="selected">
            {selectedAdults}
            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          </div>
          {dropdownOpen.adults && (
            <div className="options">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i + 1} className="option" onClick={() => handleOptionClick('adults', String(i + 1))}>
                  {i + 1}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* New Section for Number of Children */}
        <h2>Number of children</h2>
        <div className="custom-select" onClick={() => toggleDropdown('children')}>
          <div className="selected">
            {selectedChildren}
            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          </div>
          {dropdownOpen.children && (
            <div className="options">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i + 1} className="option" onClick={() => handleOptionClick('children', String(i + 1))}>
                  {i + 1}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Button */}
        <button onClick={handleSubmit}>Search</button>
      </div>

      {/* Render Footer */}
      <Footer />
    </div>
  );
};

export default App;
