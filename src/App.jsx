import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMessage, faPhone, faLocationDot, faPlaneArrival, faUtensils, faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faSquareInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import Bild from './assets/Bild.jpg';
import SearchForm from './SearchForm'; // Import the SearchForm component
import Footer from './Footer'; // Make sure this import is correct
import HotelInfoIcons from './HotelInfoIcons'; // Make sure this import is also correct
import Divider from './Divider'; // Import the Divider component
import BlackLogo from './assets/Black logo.svg';
import TripadvisorLogo from './assets/tripadvisor.svg';
import Header from './Header'; // Import the Header component
import Slider from './Slider'; // Import the Slider component
import YellowLine from './YellowLine'; // Import the YellowLine component
import BlackLine from './BlackLine'; // Import the BlackLine component
import TextBlock from './TextBlock'; // Import the TextBlock component
import Banner from './Banner';
import HeadingBlock from './HeadingBlock';
import location from './assets/location.jpg';
import ImageComponent from './ImageComponent';

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
      <Banner />
      <HeadingBlock text="Where do you want to travel?" />
      <YellowLine />
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

      {/* Divider component */}
      <Divider />

      <h1 className="center-heading">Daily activities in our hotels</h1>
      
      <TextBlock 
        text="Now our best hotels are getting even better. By the summer of 2024, we will launch more
        new daily activities than ever."
      />

      <Slider />


      <HotelInfoIcons />
      <HeadingBlock text="Our location - Find us" />
      <YellowLine />
      <div className="image-container">
        <ImageComponent 
          src={location} 
          alt="Location of office in Bangkok" 
        />
        <div className="image-overlay">
          <FontAwesomeIcon icon={faLocationDot} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
