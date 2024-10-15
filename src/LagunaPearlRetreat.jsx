// src/LagunaPearlRetreat.jsx
import React from 'react';
import Header from './Header';
import HeadingBlock from './HeadingBlock';
import SubHeading from './SubHeading';
import YellowLine from './YellowLine'; // Import the YellowLine component
import ImageComponent from './ImageComponent';
import cozyPool from './assets/cozyPool.jpg';
import HotelReviews from './HotelReviews';
import Button from './Button'

const LagunaPearlRetreat = () => {
  return (
    <div className="laguna-pearl-retreat" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
        text="Phuket: Paradise Island Escape" 
        style={{ paddingTop: '20px' }} // Adjust the value as needed
      />
      <p>A beautiful retreat with stunning views of the Laguna coast.</p>
      <p>Price: 150 kr per night</p>
      {/* Add more detailed information about Laguna Pearl Retreat */}
    </div>
  );
};

export default LagunaPearlRetreat;