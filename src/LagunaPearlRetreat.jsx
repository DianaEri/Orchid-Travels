// Diana made this element, which displays the hotel Laguna Pearl Retreat 
// with images and detailed information about the hotel. 
// It uses several components, and the ones made by Diana are: 
// ImageComponent, HotelReviews, SubHeading, EventCardComponent, Footer
//and Button. The rest of the components, like HeadingBlock, 
//YellowLine, and BlackLine, are made by Madelene.

import React from 'react'; // Import React for building components
import { useLocation, useNavigate } from 'react-router-dom'; // Import hooks for routing
import Header from './Header'; // Import the Header component for the top of the page
import HeadingBlock from './HeadingBlock'; // Import HeadingBlock for displaying headings
import SubHeading from './SubHeading'; // Import SubHeading for section subheadings
import YellowLine from './YellowLine'; // Import YellowLine, a styled line separator
import ImageComponent from './ImageComponent'; // Import ImageComponent to display images
import cozyPool from './assets/cozyPool.jpg'; // Import image assets
import HotelReviews from './HotelReviews'; // Import HotelReviews to display the total price and reviews
import Button from './Button'; // Import Button component for the "Book now" button
import TextBlock from './TextBlock'; // Import TextBlock for displaying descriptive text
import BlackLine from './BlackLine'; // Import BlackLine, another line separator
import bottle from './assets/bottle.jpg'; // Import additional image assets
import food from './assets/food.jpg';
import buss from './assets/buss.jpg';
import paradise from './assets/paradise.jpg';
import romance from './assets/romance.jpg';
import Footer from './Footer'; // Import Footer for the bottom of the page
import poolside from './assets/poolside.jpg'; // Import another image asset
import EventCardComponent from './EventCardComponent'; // Import EventCardComponent to display event cards
import Divider from './Divider'; // Import Divider for visual separation

// Main component definition
const LagunaPearlRetreat = () => {
  const location = useLocation(); // Access the current location object
  const navigate = useNavigate(); // Initialize useNavigate for routing
  const { totalPrice, hotelName } = location.state || {}; // Retrieve totalPrice and hotelName from location.state, if available

  console.log("Received Total Price:", totalPrice); // Log the total price for debugging purposes

  return (
    <div className="laguna-pearl-retreat" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Render the Header component at the top of the page */}
      <Header />

      {/* Render the heading dynamically based on the hotel name */}
      <HeadingBlock text={`Hotel ${hotelName}`} /> 
      <YellowLine /> {/* Styled separator */}

      {/* Display the main pool image */}
      <ImageComponent src={cozyPool} alt="Pool lounge area" />

      {/* Display the total price and reviews, passing totalPrice as a prop */}
      <HotelReviews totalPrice={totalPrice} />

      {/* Button to book the hotel */}
      <div className="button-container">
        <button type="submit" className="search-button">
          Book now
        </button>
      </div>

      {/* Subheading and description for the hotel */}
      <SubHeading text="Welcome to Laguna Pearl Retreat – Your Tropical Haven in Phuket, Thailand" />
      <TextBlock text="Nestled just 100 meters from the pristine shores of Phuket’s famous coastline, Laguna Pearl Retreat..." />
      <BlackLine /> {/* Another separator */}
      
      {/* Display hotel accommodation details */}
      <SubHeading text="Luxury Accommodation for Every Traveler" />
      <TextBlock text="At Laguna Pearl Retreat, we take pride in offering tailored accommodation options..." />
      <ImageComponent src={bottle} alt="Fancy hotel room" />
      <BlackLine />

      {/* Display pool and spa details */}
      <SubHeading text="Relax and Unwind with 16 Stunning Pools & World-Class Spa" />
      <TextBlock text="Discover pure bliss as you unwind by one of our 16 crystal-clear pools..." />
      <ImageComponent src={poolside} alt="View of hotel pool" />
      <BlackLine />

      {/* Display restaurant information */}
      <SubHeading text="Culinary Excellence at Our All-Inclusive Restaurant" />
      <TextBlock text="Dining at Laguna Pearl Retreat is an unforgettable experience. Our all-inclusive restaurant offers..." />
      {/* Link to the restaurant page */}
      <TextBlock text={
        <div style={{ textAlign: 'center' }}>
          Check out the hotel restaurant
          <br />
          <button className="linkRestaurant" onClick={() => navigate('/hotel-restaurant-saffron-breeze-café')}>
            Saffron Breeze Café
          </button>
        </div>
      }/>
      <ImageComponent src={food} alt="Refreshing meal" />
      <BlackLine />

      {/* Display airport transfer information */}
      <SubHeading text="Seamless Travel with Complimentary Airport Transfers" />
      <TextBlock text="Start your vacation stress-free with our complimentary airport pick-up and drop-off service..." />
      <ImageComponent src={buss} alt="Airport transfer with bus" />
      <BlackLine />

      {/* Display information about the beach proximity */}
      <SubHeading text="A Short Stroll to Paradise: Beachfront Bliss Just 100 Meters Away" />
      <TextBlock text="One of the highlights of Laguna Pearl Retreat is its unbeatable location, just a short 100-meter walk..." />
      <ImageComponent src={paradise} alt="Beautiful beach with warm weather" />
      <BlackLine />

      {/* Display a closing message about the hotel */}
      <SubHeading text="An Unforgettable Stay Awaits at Laguna Pearl Retreat" />
      <TextBlock text="Whether you’re here for a romantic getaway, a fun-filled family vacation, or a serene escape..." />
      <TextBlock text="Book your stay with us today, and let your journey to paradise begin." />
      <ImageComponent src={romance} alt="Drawn heart in sand" />

      {/* Display event information */}
      <HeadingBlock text="Hotel activities" />
      <YellowLine />
      <EventCardComponent hotelName={hotelName} />

      {/* Render the Footer component */}
      <Footer />
    </div>
  );
};

export default LagunaPearlRetreat; // Export the component for use in the application
