import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import HeadingBlock from './HeadingBlock';
import SubHeading from './SubHeading';
import YellowLine from './YellowLine'; // Import the YellowLine component
import ImageComponent from './ImageComponent';
import cozyPool from './assets/cozyPool.jpg';
import HotelReviews from './HotelReviews';
import Button from './Button';
import TextBlock from './TextBlock';
import BlackLine from './BlackLine';
import bottle from './assets/bottle.jpg';
import food from './assets/food.jpg';
import buss from './assets/buss.jpg';
import paradise from './assets/paradise.jpg';
import romance from './assets/romance.jpg';
import Footer from './Footer';
import poolside from './assets/poolside.jpg';

const LagunaPearlRetreat = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const { totalPrice } = location.state || {}; // Retrieve totalPrice from location.state

  console.log("Received Total Price:", totalPrice); // Log totalPrice for debugging

  return (
    <div className="laguna-pearl-retreat" style={{ display: 'flex', 
    flexDirection: 'column', alignItems: 'center' }}>
      <Header />
      <HeadingBlock
        text="Hotel Laguna Pearl Retreat"
      />
      <YellowLine />
      <ImageComponent 
        src={cozyPool} 
        alt="Pool lounge area" 
      />
      <HotelReviews totalPrice={totalPrice} /> {/* Pass totalPrice as a prop */}
      <div className="button-container">
        <button type="submit" className="search-button">
          Book now
        </button>
      </div>
      <SubHeading 
        text="Welcome to Laguna Pearl Retreat – 
        Your Tropical Haven in Phuket, Thailand" 
      />
      <TextBlock 
        text="Nestled just 100 meters from the pristine 
        shores of Phuket’s famous coastline, Laguna 
        Pearl Retreat is the ultimate destination for 
        those seeking luxury, relaxation, and 
        unforgettable island experiences. With stunning
         views of the Andaman Sea and an unrivaled 
         array of amenities, our resort offers a 
         perfect blend of modern comforts and 
         traditional Thai hospitality." 
      />
      <BlackLine />
      <SubHeading 
        text="Luxury Accommodation for Every Traveler"
      />
      <TextBlock 
        text="At Laguna Pearl Retreat, we take pride 
        in offering tailored accommodation options 
        to suit the needs of every guest. Whether 
        you're traveling solo, as a couple, with 
        family, or in a larger group, we have 
        something for everyone. Our family-friendly 
        rooms and suites are designed with spacious 
        layouts, ensuring comfort for families of 
        all sizes, including those with young 
        children, teenagers, or multi-generational 
        groups. We also offer fully adapted 
        accommodations for guests with special 
        needs, ensuring accessibility and ease 
        throughout the resort." 
      />
      <ImageComponent 
        src={bottle} 
        alt="Fancy hotel room" 
      />
      <BlackLine />
      <SubHeading 
        text="Relax and Unwind with 16 Stunning 
        Pools & World-Class Spa"
      />
      <TextBlock 
        text="Discover pure bliss as you unwind 
        by one of our 16 crystal-clear pools, 
        each offering a unique ambiance for every 
        mood. Whether you’re looking to soak up 
        the sun at our beachfront infinity pool 
        or enjoy a quiet retreat in a more 
        secluded area, there’s always a perfect 
        spot waiting for you. Families with 
        children will love our dedicated kids’ 
        pools, complete with water features and 
        shallow areas for safe fun. For those 
        seeking deeper relaxation, our luxurious 
        spa offers a range of rejuvenating 
        treatments inspired by traditional 
        Thai therapies. Indulge in soothing 
        massages, body scrubs, and facials 
        while enjoying the serene ambiance of 
        our spa facilities, which are designed to 
        melt away stress and revitalize both body 
        and mind." 
      />
      <ImageComponent 
        src={poolside} 
        alt="View of hotel pool" 
      />
      <BlackLine />
      <SubHeading 
        text="Culinary Excellence at Our 
        All-Inclusive Restaurant"
      />
      <TextBlock 
        text="Dining at Laguna Pearl Retreat 
        is an unforgettable experience. Our 
        all-inclusive restaurant offers a 
        diverse menu featuring authentic Thai 
        cuisine and international favorites. 
        We understand the importance of dietary 
        preferences and restrictions, which is 
        why we are proud to offer a wide range 
        of options, including vegetarian, vegan, 
        gluten-free, and allergen-friendly 
        meals. Whether you’re craving a taste 
        of Thailand or something more 
        familiar, our culinary team is 
        committed to meeting your needs 
        with delicious, high-quality dishes." 
      />
      <TextBlock 
        text={<span>Check out the hotel restaurant
          <button className="linkRestaurant" onClick={() => navigate
          ('/hotel-restaurant-saffron-breeze-café')}>
            Saffron Breeze Café</button></span>}
      />
      <ImageComponent 
        src={food} 
        alt="Refreshing meal" 
      />
      <BlackLine />
      <SubHeading 
        text="Seamless Travel with Complimentary 
        Airport Transfers"
      />
      <TextBlock 
        text="Start your vacation stress-free 
        with our complimentary airport pick-up 
        and drop-off service. From the moment 
        you arrive at Phuket International 
        Airport, our dedicated team will be 
        there to ensure your transition to 
        paradise is smooth and effortless. 
        Enjoy a comfortable ride to and 
        from the hotel, allowing you to 
        focus on making the most of your 
        time at Laguna Pearl Retreat." 
      />
      <ImageComponent 
        src={buss} 
        alt="Airpoart transfer with buss" 
      />
      <BlackLine />
      <SubHeading 
        text="A Short Stroll to Paradise: 
        Beachfront Bliss Just 100 Meters Away"
      />
      <TextBlock 
        text="One of the highlights of 
        Laguna Pearl Retreat is its 
        unbeatable location, just a short 
        100-meter walk from the nearest 
        beach. Spend your days lounging 
        on soft, white sands, swimming 
        in the turquoise waters of the 
        Andaman Sea, or trying out a 
        range of exciting water sports. 
        Our staff can assist with beach 
        equipment rentals and 
        recommendations for nearby 
        attractions to make your 
        stay even more memorable." 
      />
      <ImageComponent 
        src={paradise} 
        alt="Beatiful beach with warm weather" 
      />
      <BlackLine />
      <SubHeading 
        text="An Unforgettable Stay 
        Awaits at Laguna Pearl Retreat"
      />
      <TextBlock 
        text="Whether you’re here for 
        a romantic getaway, a fun-filled 
        family vacation, or a serene 
        escape, Laguna Pearl Retreat 
        promises a luxurious and 
        unforgettable experience. 
        With world-class amenities, 
        personalized service, and the 
        perfect location just steps 
        from the beach, we invite 
        you to indulge in the best 
        that Phuket has to offer." 
      />
      <TextBlock 
        text="Book your stay with 
        us today, and let your journey 
        to paradise begin." 
      />
      <ImageComponent 
        src={romance} 
        alt="Drawn heart in sand" 
      />
      <Footer />
    </div>
  );
};

export default LagunaPearlRetreat;