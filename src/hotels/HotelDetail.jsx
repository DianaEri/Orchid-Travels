import React from 'react';
import { useParams } from 'react-router-dom';

const HotelDetail = () => {
  const { hotelName } = useParams(); // Get the hotel name from the URL

  return (
    <div>
      <h1>Details for {hotelName}</h1>
      {/* Fetch hotel details using hotelName or display static content */}
    </div>
  );
};

export default HotelDetail;