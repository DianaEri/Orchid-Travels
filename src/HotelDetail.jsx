import { useParams } from 'react-router-dom';

const HotelDetail = () => {
  const { hotelName } = useParams();

  // Fetch the hotel details based on the hotelName, or display the details here
  return (
    <div>
      <h1>{hotelName} Details</h1>
      {/* Display hotel-specific details */}
    </div>
  );
};

export default HotelDetail;

const HotelBooking = () => {
  const { hotelName } = useParams();

  return (
    <div>
      <h1>Book {hotelName}</h1>
      {/* Booking form or details */}
    </div>
  );
};

export default HotelBooking;
