import React from 'react';
import '../index.css'; 
import Header from '../Header.jsx'; 
import YellowLine from '../YellowLine.jsx'; 
import ImageComponent from '../ImageComponent.jsx';
import imageOneAboutUs from '../assets/imageOneAboutUs.svg';
import TravelDetailsData from '../TravelDetailsData'; 
import HeadingBlock from '../HeadingBlock'; 
import Footer from '../Footer'; 


const Booking = () => {
  return (
    <div>
      <Header /> 
      <HeadingBlock text="Prices and booking" />
      <YellowLine /> 
      <ImageComponent src={imageOneAboutUs} alt="imageOneAboutUs" /> 
      <TravelDetailsData /> 
      <Footer /> 
      

    </div>
  );
};

export default Booking;