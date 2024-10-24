// I (Diana) started implementing the basics for our "Main page" in 
// Home.jsx and added the following components made by me as well: Banner,
// SearchForm, Divider, HotelInfoIcons and ImageComponent with CSS overlay.

// The components HeadingBlock, YellowLine, TextBlock, ScrollToTopButton
// and slider were made and implemented by (Madelene) for "Main Page".
import React from 'react';
import SearchForm from './SearchForm'; // Import the SearchForm component
import HeadingBlock from './HeadingBlock'; // Import HeadingBlock component
import YellowLine from './YellowLine'; // Import YellowLine component
import Banner from './Banner'; // Import Banner component
import TextBlock from './TextBlock'; // Import TextBlock component
import Slider from './Slider'; // Import Slider component
import HotelInfoIcons from './HotelInfoIcons'; // Import HotelInfoIcons component
import ImageComponent from './ImageComponent'; // Import ImageComponent
import location from './assets/location.jpg'; // Image for location
import ScrollToTopButton from './ScrollToTopButton'; // Import ScrollToTopButton component
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'; // Solid icons from FontAwesome

const Home = ({ handleSubmit, selectedDestination, setSelectedDestination, selectedAdults, setSelectedAdults, selectedChildren, setSelectedChildren, setSelectedLengthOfStay }) => {
  return (
    <div>
      {/* Render the Banner component */}
      <Banner />

      {/* Render the HeadingBlock component with custom text */}  
      <HeadingBlock text="Where do you want to travel?" />

      {/* Render the YellowLine component as a styled separator */}
      <YellowLine />

      {/* Render the SearchForm component and pass necessary props */}
      <SearchForm 
        onSubmit={handleSubmit} 
        selectedDestination={selectedDestination}
        setSelectedDestination={setSelectedDestination}
        selectedAdults={selectedAdults}
        setSelectedAdults={setSelectedAdults}
        selectedChildren={selectedChildren}
        setSelectedChildren={setSelectedChildren}
        setSelectedLengthOfStay={setSelectedLengthOfStay}
      />
    
      {/* Render the HeadingBlock component with custom text */}  
      <HeadingBlock text="Daily activities in our hotels" />

      {/* Render the YellowLine component as a styled separator */}
      <YellowLine />

      {/* Render the TextBlock component with a description */}
      <TextBlock text="Now our best hotels are getting even better. By the summer of 2024, we will launch more new daily activities than ever." />
      
      {/* Render the Slider component for displaying images */}
      <Slider />

      {/* Render the HotelInfoIcons component to display hotel information icons */}
      <HotelInfoIcons />

      {/* Section for displaying the location of the office */}
      <HeadingBlock text="Our location - Find us" />

      {/* Render the YellowLine component again */}
      <YellowLine />
      
      {/* Container for the location image and icon overlay */}
      <div className="image-container">
        {/* Render the ImageComponent for the office location */}
        <ImageComponent src={location} alt="Location of office in Bangkok" />

        {/* Render the FontAwesome location icon as an overlay */}
        <div className="image-overlay">
          <FontAwesomeIcon icon="location-dot" />
        </div>
      </div>
      
      {/*Displays a button that allows users to quickly return to the top of the page after
      scrolling down.*/}
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
