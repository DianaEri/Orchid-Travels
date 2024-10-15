import React from 'react';
import { useParams } from 'react-router-dom';

const HotelDetail = () => {
  const { hotelName } = useParams(); // Get the hotel name from the URL

  // Fetch or define hotel details based on the hotelName
  const hotelDetails = {
    "Laguna Pearl Retreat": {
      name: "Laguna Pearl Retreat",
      description: "A beautiful retreat with stunning views.",
      price: 150,
      // Add more hotel-specific details as needed
    },
    // Add more hotels here as needed
  };

  // Find hotel details based on the hotelName from URL
  const hotel = hotelDetails[hotelName];

  return (
    <div className="hotel-detail">
      {hotel ? (
        <>
          <h1>{hotel.name}</h1>
          <p>{hotel.description}</p>
          <p>Price: {hotel.price} kr per night</p>
        </>
      ) : (
        <p>Hotel not found.</p>
      )}
    </div>
  );
};

export default HotelDetail;
