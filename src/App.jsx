import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMessage, faPhone, faLocationDot, faPlaneArrival, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faSquareInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import Bild from './assets/Bild.jpg';
import SearchForm from './SearchForm'; // Import the SearchForm component
import Footer from './Footer'; // Make sure this import is correct
import HotelInfoIcons from './HotelInfoIcons'; // Make sure this import is also correct
import Divider from './Divider'; // Import the Divider component
import BlackLogo from './assets/Black logo.svg';
import TripadvisorLogo from './assets/tripadvisor.svg';
import Header from './Header'; // Import the Header component
import YellowLine from './YellowLine'; // Import the YellowLine component

const App = () => {
  const [selectedDestination, setSelectedDestination] = useState('City');
  const [selectedAdults, setSelectedAdults] = useState('Nr of adults');
  const [selectedChildren, setSelectedChildren] = useState('Nr of children');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
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

  return (
    <div className="App">
      <Header />
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <img src={Bild} alt="Top banner" style={{ width: '100%', height: 'auto' }} />
      </div>
      <h1 className="center-heading">Where do you want to travel?</h1>
      <YellowLine/>
      {/* Render the SearchForm component and pass handleSubmit */}
      <SearchForm 
        onSubmit={handleSubmit} 
        selectedDestination={selectedDestination} 
        setSelectedDestination={setSelectedDestination}
        selectedAdults={selectedAdults}
        setSelectedAdults={setSelectedAdults}
        selectedChildren={selectedChildren}
        setSelectedChildren={setSelectedChildren}
      />

      {/* Use the Divider component */}
      <Divider />

      <h1 className="center-heading">Daily activities in our hotels</h1>

      <HotelInfoIcons />

      <Footer />
    </div>
  );
};

export default App;
