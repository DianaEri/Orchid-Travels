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
      <TextBlock text="Nestled just 100 meters from the pristine shores of Phuket’s famous coastline, Laguna Pearl Retreat is the ultimate destination for those seeking luxury, relaxation, and unforgettable island experiences. With stunning views of the Andaman Sea and an unrivaled array of amenities, our resort offers a perfect blend of modern comforts and traditional Thai hospitality." />
      <BlackLine /> {/* Another separator */}
      
      {/* Display hotel accommodation details */}
      <SubHeading text="Luxury Accommodation for Every Traveler" />
      <TextBlock text="At Laguna Pearl Retreat, we take pride in offering tailored accommodation options to suit the needs of every guest. Whether you're traveling solo, as a couple, with family, or in a larger group, we have something for everyone. Our family-friendly rooms and suites are designed with spacious layouts, ensuring comfort for families of all sizes, including those with young children, teenagers, or multi-generational groups. We also offer fully adapted accommodations for guests with special needs, ensuring 
      accessibility and ease throughout the resort." />
      <ImageComponent src={bottle} alt="Fancy hotel room" />
      <BlackLine />

      {/* Display pool and spa details */}
      <SubHeading text="Relax and Unwind with 16 Stunning Pools & World-Class Spa" />
      <TextBlock text="Discover pure bliss as you unwind by one of our 16 crystal-clear pools, each offering a unique ambiance for every mood. Whether you’re looking to soak up the sun at our beachfront infinity pool or enjoy a quiet retreat in a more secluded area, there’s always a perfect spot waiting for you. Families with children will love our dedicated kids’ pools, complete with water features and shallow areas for safe fun. For those seeking deeper relaxation, our luxurious spa offers a range of rejuvenating treatments inspired by traditional Thai therapies. Indulge in soothing massages, body scrubs, and facials while enjoying the serene ambiance of our spa facilities, which are designed to 
      melt away stress and revitalize both body and mind." />
      <ImageComponent src={poolside} alt="View of hotel pool" />
      <BlackLine />

      {/* Display restaurant information */}
      <SubHeading text="Culinary Excellence at Our All-Inclusive Restaurant" />
      <TextBlock text="Dining at Laguna Pearl Retreat is an unforgettable experience. Our all-inclusive restaurant offers a diverse menu featuring authentic Thai cuisine and international favorites. We understand the importance of dietary preferences and restrictions, which is why we are proud to offer a wide range of options, including vegetarian, vegan, gluten-free, and allergen-friendly meals. Whether you’re craving a taste of Thailand or something more familiar, our culinary team is committed to meeting your needs with delicious, high-quality dishes." />
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
      <TextBlock text="Start your vacation stress-free with our complimentary airport pick-up and drop-off service. From the moment you arrive at Phuket International Airport, our dedicated team will be there to ensure your transition to paradise is smooth and effortless. Enjoy a comfortable ride to and from the hotel, allowing you to focus on making the most of your time at Laguna Pearl Retreat." />
      <ImageComponent src={buss} alt="Airport transfer with bus" />
      <BlackLine />

      {/* Display information about the beach proximity */}
      <SubHeading text="A Short Stroll to Paradise: Beachfront Bliss Just 100 Meters Away" />
      <TextBlock text="One of the highlights of Laguna Pearl Retreat is its unbeatable location, just a short 100-meter walk from the nearest beach. Spend your days lounging on soft, white sands, swimming in the turquoise waters of the Andaman Sea, or trying out a range of exciting water sports. Our staff can assist with beach equipment rentals and recommendations for nearby attractions to make your stay even more memorable." />
      <ImageComponent src={paradise} alt="Beautiful beach with warm weather" />
      <BlackLine />

      {/* Display a closing message about the hotel */}
      <SubHeading text="An Unforgettable Stay Awaits at Laguna Pearl Retreat" />
      <TextBlock text="Whether you’re here for a romantic getaway, a fun-filled family vacation, or a serene escape, Laguna Pearl Retreat promises a luxurious and unforgettable experience. With world-class amenities, personalized service, and the perfect location just steps from the beach, we invite you to indulge in the best that Phuket has to offer." />
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
