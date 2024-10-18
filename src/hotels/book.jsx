import React from 'react';
import '../index.css'; 
import Header from '../Header.jsx'; 
import YellowLine from '../YellowLine.jsx'; 
import ImageComponent from '../ImageComponent.jsx';
import imageOneAboutUs from '../assets/imageOneAboutUs.svg';


const Booking = () => {
  return (
    <div>
      <Header /> 
      <YellowLine /> 
      <ImageComponent src={imageOneAboutUs} alt="imageOneAboutUs" />

    </div>
  );
};

export default Booking;