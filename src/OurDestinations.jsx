import React from 'react';
import TextBlock from './TextBlock'; 

const OurDestinations = () => {
  return (
    <div>
      {/* Heading for the page */}
      <TextBlock 
        text="Our Travel Destinations"
      />

      {/* Description for each destination */}
      <TextBlock 
        text="Explore the beautiful beaches and vibrant culture of Phuket!" 
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