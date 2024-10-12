import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [data, setData] = useState({ locations: [] });
  const [loading, setLoading] = useState(true);
  const [newLocation, setNewLocation] = useState('');
  const [selectedCity, setSelectedCity] = useState('City');
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
    if (selectedCity && selectedCity !== 'City') {
      setData((prevData) => ({
        ...prevData,
        locations: [...prevData.locations, selectedCity],
      }));
      setSelectedCity('City');
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (city) => {
    setSelectedCity(city);
    setDropdownOpen(false);
  };

  return (
    <div className="App">
      <h1>Where do you want to travel?</h1>

      {/* Form for selecting a location */}
      <form onSubmit={handleSubmit}>
        <div className="custom-select" onClick={toggleDropdown}>
        <h2>Point of departure</h2>
          <div className="selected">
            {selectedCity}
            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          </div>
          {dropdownOpen && (
            <div className="options">
              <div
                className={`option ${selectedCity === 'City' ? 'disabled' : ''}`}
                onClick={() => handleOptionClick('City')}
              >
                City
              </div>
              <div
                className="option"
                onClick={() => handleOptionClick('Stockholm-Arlanda')}
              >
                Stockholm-Arlanda
              </div>
              <div
                className="option"
                onClick={() => handleOptionClick('Göteborg-Landvetter')}
              >
                Göteborg-Landvetter
              </div>
              <div className="option" onClick={() => handleOptionClick('Malmö')}>
                Malmö
              </div>
            </div>
          )}
        </div>
        <button type="submit">Search</button>
      </form>

      <ul>
        {data.locations && data.locations.length > 0 ? (
          data.locations.map((location, index) => (
            <li key={index}>{location}</li>
          ))
        ) : (
          <li>No locations available</li>
        )}
      </ul>
    </div>
  );
};

export default App;
