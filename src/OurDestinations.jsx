import React from 'react';
import TextBlock from './TextBlock';
import HeadingBlock from './HeadingBlock';
import SubHeading from './SubHeading';

const OurDestinations = () => {
  return (
    <div>
      {/* Heading for the page */}
      <HeadingBlock
        text="Our Travel Destinations: Explore Thailand with Orchid Travels"
      />

      {/* Description for each destination */}
      <TextBlock 
        text="At Orchid Travels, we take pride in offering you the finest travel experiences to the stunning and diverse destinations of Thailand. Whether you're seeking the vibrant energy of city life, the tranquility of pristine beaches, or the wonders of nature, our handpicked destinations promise unforgettable memories. Let us guide you through three of Thailand’s most iconic locations: Phuket, Krabi, and Bangkok." 
      />
      <SubHeading 
        text="Explore Our Travel Destinations" 
      />
      <TextBlock 
        text="Experience the stunning landscapes and outdoor activities in Krabi." 
      />

      <TextBlock 
        text="Discover the rich history and bustling life of Bangkok." 
      />

      {/* You can add more TextBlock components for additional text or descriptions as needed */}
    </div>
  );
};

export default OurDestinations;