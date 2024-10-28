// I (Diana) started implementing the basics for our "Main page" in 
// Home.jsx and added the following components made by me as well: Banner,
// SearchForm, Divider, HotelInfoIcons and ImageComponent with CSS overlay.

// The components HeadingBlock, YellowLine, TextBlock, ScrollToTopButton
// and slider were made and implemented by (Madelene) for "Main Page".
import React, { useEffect, useState } from 'react'; // Import React and hooks (useEffect, useState)
import { useNavigate } from 'react-router-dom'; // For routing/navigation between pages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // For using FontAwesome icons
import { 
  faChevronDown, faMessage, faPhone, faLocationDot, 
  faPlaneArrival, faUtensils, faCircleChevronLeft, 
  faCircleChevronRight 
} from '@fortawesome/free-solid-svg-icons'; // Solid icons from FontAwesome
import { 
  faYoutube, faSquareInstagram, faSquareFacebook 
} from '@fortawesome/free-brands-svg-icons'; // Brand icons (YouTube, Instagram, Facebook)
import Bild from './assets/Bild.jpg'; // Import an image (replace with the correct path if needed)
import SearchForm from './SearchForm'; // Import SearchForm component
import Footer from './Footer'; // Import Footer component
import HotelInfoIcons from './HotelInfoIcons'; // Import custom HotelInfoIcons component
import Divider from './Divider'; // Import Divider component to separate sections visually
import BlackLogo from './assets/Black logo.svg'; // Import a logo (SVG format)
import TripadvisorLogo from './assets/tripadvisor.svg'; // Import another logo (Tripadvisor)
import Header from './Header'; // Displays a header with hamburger menu component 
import Slider from './Slider'; // Import Slider component (likely for image or content carousel)
import YellowLine from './YellowLine'; // This component displays a yellow line
import BlackLine from './BlackLine'; // This component displays a black divider to separate different sections of the website.
import TextBlock from './TextBlock'; // This component displays a block of text with customizable styles.
import Banner from './Banner'; // Import Banner component for a top-banner or hero section
import HeadingBlock from './HeadingBlock'; // This component displays a styled heading block for the website.
import location from './assets/location.jpg'; // Import an image for the location section
import ImageComponent from './ImageComponent'; // Import reusable ImageComponent for displaying images
import YellowFlower from './YellowFlower'; // Import the Flower component to separate sections visually
import Gallery from './Gallery'; // Import the Gallery component. Displaying a gallery of images. 
import ScrollToTopButton from './ScrollToTopButton'; // Displays a button that allows users to quickly return to the top of the page after scrolling down.
import Socials from './Socials'; // This component directs users to check the social media of the website.
import book from './hotels/book.jsx'; //This component displays the booking website. 
import TotalPrice from './TotalPrice'; // This component displays the total price for a booking.
import TravelDetailsData from './TravelDetailsData'; // Retrieves and displays travel information
import BookingOptionsForm from './BookingOptionsForm';  // Displays a component with choices for what you can book with radio buttons. You have Room choices and Select flight choices. 
import PaymentOptions from './PaymentOptions'; // This component displays payment options
import ChosenBookingOptions from './ChosenBookingOptions.jsx'; //This component retrieves and displays "chosen Room with price" and "chosen flight class".
import SubHeading from './SubHeading.jsx'; // This component displays a styled heading block for the website. Lower-level heading.
import UnOrderedList from './UnOrderedList'; //// Component made  to store and display unordered lists.                                              



const App = () => {
  // State to store selected values for destination, adults, and children
  const [selectedDestination, setSelectedDestination] = useState('City');
  const [selectedAdults, setSelectedAdults] = useState('Nr of adults');
  const [selectedChildren, setSelectedChildren] = useState('Nr of children');
  const [selectedLengthOfStay, setSelectedLengthOfStay] = useState(1);

// UseEffect to store values in localStorage when they change. Number of adults and number
//of children are stored for "Prices and booking (book)"
useEffect(() => {
  localStorage.setItem('selectedAdults', selectedAdults);
  localStorage.setItem('selectedChildren', selectedChildren);
}, [selectedAdults, selectedChildren]); // Run whenever selectedAdults or selectedChildren changes

useEffect(() => {
  localStorage.setItem('selectedLengthOfStay', selectedLengthOfStay);
}, [selectedLengthOfStay]); // This ensures that the 'selectedLengthOfStay' value is updated in localStorage whenever it changes


  const navigate = useNavigate(); // Initialize useNavigate for handling navigation

  // Function to handle form submission from SearchForm
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Check if a valid destination and number of adults are selected
    if (selectedDestination !== 'City' && selectedAdults !== 'Nr of adults') {
      // Navigate to the search result page with selected state (destination, adults, children)
      navigate('/search-result', {
        state: {
          destination: selectedDestination,
          adults: selectedAdults,
          children: selectedChildren,
          lengthOfStay: selectedLengthOfStay,
        },
      });
    } else {
      // Log an error if the form was not filled out correctly
      console.log('Please select a valid destination and number of adults');
    }
  };

  return (
    <div className="App">
      {/* Render the Header component */}
      <Header /> 

      {/* Render the Banner component */}
      <Banner />

      {/* Render the HeadingBlock component with custom text */}
      <HeadingBlock text="Where do you want to travel?" />

      {/* Render the YellowLine component as a styled separator */}
      <YellowLine />

      {/* Render the SearchForm component and pass handleSubmit and state values */}
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

      {/* Render the Divider component to separate content */}
      <Divider />

      {/* Heading for the daily activities section */}
      <HeadingBlock text="Daily activities in our hotels" />
      
      {/* Render the TextBlock component with a description */}
      <TextBlock 
        text="Now our best hotels are getting even better. By the summer of 2024, we will launch more
        new daily activities than ever."
      />

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
        <ImageComponent 
          src={location} 
          alt="Location of office in Bangkok" 
        />

        {/* Render the FontAwesome location icon as an overlay */}
        <div className="image-overlay">
          <FontAwesomeIcon icon={faLocationDot} />
        </div>
      </div>

      {/*Displays a button that allows users to quickly return to the top of the page after
      scrolling down.*/}
      <ScrollToTopButton /> 
                           
      {/* Render the Footer component at the bottom of the page */}
      <Footer />
    </div>
  );
};

export default App;
