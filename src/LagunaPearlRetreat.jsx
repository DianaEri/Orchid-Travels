// src/LagunaPearlRetreat.jsx
import React from 'react';
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

const LagunaPearlRetreat = () => {
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
        style={{ marginBottom: '0', paddingBottom: '0' }} 
      />
      <HotelReviews />
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
        text="Welcome to Laguna Pearl Retreat – 
        Your Tropical Haven in Phuket, Thailand"
      />
    </div>
  );
};

export default LagunaPearlRetreat;