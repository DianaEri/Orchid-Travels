// HotelDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const HotelDetail = () => {
  const { hotelName } = useParams(); // Extract the hotel name from the URL parameters

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

  const hotel = hotelDetails[hotelName];

  return (
    <div className="hotel-detail">
      {hotel ? (
        <>
          <h1>{hotel.name}</h1>
          <p>{hotel.description}</p>
          <p>Price: {hotel.price} kr per night</p>
          {/* Add more hotel details and styling as needed */}
        </>
      ) : (
        <p>Hotel not found.</p>
      )}
    </div>
  );
};

export default HotelDetail;
