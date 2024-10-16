// src/HotelRestaurantSaffronBreezeCafé.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const HotelRestaurantSaffronBreezeCafé = () => {
  return (
    <div className="restaurant-page">
      <Header />
      <h1>Saffron Breeze Café</h1>
      <p>
        Welcome to Saffron Breeze Café! Here, you can enjoy a delightful dining experience with authentic Thai cuisine and international favorites. Our restaurant offers a wide range of dishes to cater to all dietary preferences, ensuring a satisfying meal for every guest.
      </p>
      {/* Add more content about the restaurant, menu items, ambiance, etc. */}
      <Footer />
    </div>
  );
};

export default HotelRestaurantSaffronBreezeCafé;