import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMessage, faPhone, faLocationDot, faPlaneArrival, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faSquareInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import Bild from './assets/Bild.jpg';
import BlackLogo from './assets/Black logo.svg';
import TripadvisorLogo from './assets/tripadvisor.svg';

const Dropdown = ({ options, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

const Footer = () => {
  return (
    <div className="footer" style={{ width: '100%', textAlign: 'center', padding: '1em 0' }}>
      <img src={BlackLogo} alt="Black Logo" style={{ height: '4.5em', width: 'auto' }} />
      <div className='logoName'>Orchid Travels</div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1em 0' }}>
        <img src={TripadvisorLogo} alt="Tripadvisor Logo" style={{ height: '5em', width: 'auto', marginRight: '10px' }} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FontAwesomeIcon icon={faSquareInstagram} className="social-icon" style={{ margin: '0 10px' }} />
          <FontAwesomeIcon icon={faYoutube} className="social-icon" style={{ margin: '0 10px' }} />
          <FontAwesomeIcon icon={faSquareFacebook} className="social-icon" style={{ margin: '0 10px' }} />
        </div>
      </div>
      <div>Reviews</div>
      <div>Contact us</div>
      <div>Address</div>
      <div className='largerText'>Search</div>
      <div className='largerText'>Hotel activities</div>
      <div className='largerText'>Gallery</div>
      <div className='paddingText'>2024 Orchid Travels</div>
      <div className='smallerText'>Terms & conditions / Privacy policy</div>
    </div>
  );
};



const App = () => {
  const [selectedCity, setSelectedCity] = useState('City');
  const [selectedDestination, setSelectedDestination] = useState('City');
  const [selectedAdults, setSelectedAdults] = useState('Nr of adults');
  const [selectedChildren, setSelectedChildren] = useState('Nr of children');
  const [selectedDay, setSelectedDay] = useState('Day'); 
  const [selectedMonth, setSelectedMonth] = useState('Month'); 
  const [selectedYear, setSelectedYear] = useState('Year'); 
  const [selectedLengthOfStay, setSelectedLengthOfStay] = useState('Length of Stay');
  
  const [dropdownOpen, setDropdownOpen] = useState({});
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedDestination !== 'City' && selectedAdults !== 'Nr of adults') {
      navigate('/search-result', {
        state: {
          destination: selectedDestination,
          adults: selectedAdults,
          children: selectedChildren,
        },
      });
    } else {
      console.log('Please select a valid destination and number of adults');
    }
  };

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
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const toggleDropdown = (type) => {
    setDropdownOpen((prev) => {
        const newState = { ...prev, [type]: !prev[type] }; // Toggle current dropdown
        console.log('Dropdown open state changed:', newState); // Log state after toggling
        return newState;
    });
};

const handleOptionClick = (type, value) => {
    console.log('Clicked option:', type, value); // Log option clicks

    // Update the selected value based on the dropdown type
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

    // Close the dropdown for the selected type
    setDropdownOpen((prev) => {
        const newState = { ...prev, [type]: false }; // Explicitly close the clicked dropdown
        console.log('Dropdown state after selection:', newState); // Log the new state
        return newState; // Close the clicked dropdown
    });
};

  return (
    <div className="App">
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <img src={Bild} alt="Top banner" style={{ width: '100%', height: 'auto' }} />
      </div>
      <h1 className="center-heading">Where do you want to travel?</h1>
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

        <div className="button-container">
          <button onClick={handleSubmit} className="search-button">
            Search
          </button>
        </div>
        
      </div>

      <div className="divider"></div>

      <h1 className="center-heading">Daily activities in our hotels</h1>

      <div className="dividerIcons">
        <div className="iconsList">
          <div className="iconsText">Hotel information provided with ease</div>
          <div className="iconsRow">
            <FontAwesomeIcon icon={faMessage} />
            <FontAwesomeIcon icon={faPhone} />
            <FontAwesomeIcon icon={faLocationDot} />
            <FontAwesomeIcon icon={faPlaneArrival} />
            <FontAwesomeIcon icon={faUtensils} />
          </div>
          <div className="wordsRow">
            <span>Reviews</span>
            <span>Call us</span>
            <span>Address</span>
            <span>Arrivals</span>
            <span>Restaurant</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
