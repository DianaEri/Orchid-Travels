import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState({ locations: [] }); // Initialize with an object containing locations
  const [loading, setLoading] = useState(true); // State to handle loading
  const [newLocation, setNewLocation] = useState(''); // State to manage the new location input

  useEffect(() => {
    fetch(
      'https://orchidtravels-yymu--5000--134daa3c.local-corp.webcontainer.io'
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
    if (newLocation) {
      setData((prevData) => ({
        ...prevData,
        locations: [...prevData.locations, newLocation], // Add the new location to the list
      }));
      setNewLocation(''); // Clear the input field
    }
  };

  return (
    <div className="App">
      <h1>Where do you want to travel?</h1>
      <h2>Point of departure</h2>

      {/* Form for selecting a location */}
      <form onSubmit={handleSubmit}>
        <select name="departureCity" id="departureCity">
          <option value="City" disabled selected>
            City
          </option>
          <option value="Stockholm-Arlanda">Stockholm-Arlanda</option>
          <option value="Göteborg-Landvetter">Göteborg-Landvetter</option>
          <option value="Malmö">Malmö</option>
        </select>
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
