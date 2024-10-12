import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon

const App = () => {
  const [data, setData] = useState({ locations: [] }); // Initialize with an object containing locations
  const [loading, setLoading] = useState(true); // State to handle loading
  const [newLocation, setNewLocation] = useState(''); // State to manage the new location input
  const [selectedCity, setSelectedCity] = useState('City'); // State for selected city
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for managing dropdown visibility

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
        console.log('Fetched data:', data); // Log the fetched data
        setData(data); // Save the data into state
        setLoading(false); // Stop loading once the data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Stop loading even if there is an error
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    if (selectedCity && selectedCity !== 'City') {
      setData((prevData) => ({
        ...prevData,
        locations: [...prevData.locations, selectedCity], // Add the selected location to the list
      }));
      setSelectedCity('City'); // Reset the selection
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (city) => {
    setSelectedCity(city);
    setDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="App">
      <h1>Where do you want to travel?</h1>
      <h2>Point of departure</h2>

      {/* Form for selecting a location */}
      <form onSubmit={handleSubmit}>
        <div className="custom-select" onClick={toggleDropdown}>
          <div className="selected">
            {selectedCity}
            {/* Add the chevron-down icon beside "City" */}
            <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '8px' }} />
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
