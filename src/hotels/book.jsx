import React, { useState } from 'react';
import '../index.css'; 
import Header from '../Header.jsx'; 
import YellowLine from '../YellowLine.jsx'; 
import ImageComponent from '../ImageComponent.jsx';
import imageOneAboutUs from '../assets/imageOneAboutUs.svg';
import TravelDetailsData from '../TravelDetailsData'; 
import BookingOptionsForm from '../BookingOptionsForm'; 
import TotalPrice from '../TotalPrice'; 
import HeadingBlock from '../HeadingBlock'; 
import Footer from '../Footer'; 
import Button from '../Button'; 
import PaymentOptions from '../PaymentOptions'; 
import ChosenBookingOptions from '../ChosenBookingOptions.jsx'; 

const Booking = () => {
  const [step, setStep] = useState('booking'); 

  const handleProceedClick = () => {
    setStep('confirm'); 
  };

  const handleConfirmClick = () => {
    console.log("Confirm and pay clicked");
  };

  return (
    <div>
      <Header />
      <HeadingBlock text="Prices and booking" />
      <YellowLine />
      <ImageComponent src={imageOneAboutUs} alt="imageOneAboutUs" />

      {step === 'booking' && (
        <div>
          <TravelDetailsData />
          <BookingOptionsForm />
          <TotalPrice />
          <Button type="button" className="proceed-button" onClick={handleProceedClick}>
            Proceed with booking
          </Button>
        </div>
      )}

      {step === 'confirm' && (
        <div>
          <TravelDetailsData />
          <ChosenBookingOptions /> 
          <TotalPrice />
          <PaymentOptions />
          <Button type="button" className="confirm-button" onClick={handleConfirmClick}>
            Confirm and pay
          </Button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Booking