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

const Home = ({ handleSubmit, selectedDestination, setSelectedDestination, selectedAdults, setSelectedAdults, selectedChildren, setSelectedChildren, setSelectedLengthOfStay }) => {
  return (
    <div>
      <Banner />

      <HeadingBlock text="Where do you want to travel?" />
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

      <HeadingBlock text="Daily activities in our hotels" />
      <YellowLine />

      <TextBlock text="Now our best hotels are getting even better. By the summer of 2024, we will launch more new daily activities than ever." />
      <Slider />

      <HotelInfoIcons />

      <HeadingBlock text="Our location - Find us" />
      <YellowLine />

      <div className="image-container">
        <ImageComponent src={location} alt="Location of office in Bangkok" />
        <div className="image-overlay">
          <FontAwesomeIcon icon="location-dot" />
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  );
};

export default Home;
