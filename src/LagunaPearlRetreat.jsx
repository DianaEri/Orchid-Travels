// src/LagunaPearlRetreat.jsx
import React from 'react';
import Header from './Header';
import HeadingBlock from './HeadingBlock';
import SubHeading from './SubHeading';
import YellowLine from './YellowLine'; // Import the YellowLine component
import ImageComponent from './ImageComponent';
import cozyPool from './assets/cozyPool.jpg';
import HotelReviews from './HotelReviews'

const LagunaPearlRetreat = () => {
  return (
    <div className="laguna-pearl-retreat">
      <Header />
      <HeadingBlock
        text="Hotel Laguna Pearl Retreat"
      />
      <YellowLine />
      <ImageComponent src={cozyPool} alt="Pool lounge area" />
      <HotelReviews />
      <p>A beautiful retreat with stunning views of the Laguna coast.</p>
      <p>Price: 150 kr per night</p>
      {/* Add more detailed information about Laguna Pearl Retreat */}
    </div>
  );
};

export default LagunaPearlRetreat;