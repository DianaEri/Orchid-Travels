import React, { useState } from 'react';
import '../index.css'; 
import Header from '../Header.jsx'; 
import YellowLine from '../YellowLine.jsx'; 
import ImageComponent from '../ImageComponent.jsx';
import imageOneAboutUs from '../assets/imageOneAboutUs.svg';
import TravelDetailsData from '../TravelDetailsData'; 
import BookingOptionsForm from '../BookingOptionsForm'; 
import TotalPriceBooking from '../TotalPriceBooking'; 
import HeadingBlock from '../HeadingBlock'; 
import Footer from '../Footer'; 
import Button from '../Button'; 
import PaymentOptions from '../PaymentOptions'; 
import ChosenBookingOptions from '../ChosenBookingOptions.jsx'; 

const Booking = () => {
  const [step, setStep] = useState('booking'); 
  const [receiptPrinted, setReceiptPrinted] = useState(false); 

  const handleProceedClick = () => {
    setStep('confirm'); 
  };

  const handleConfirmClick = () => {
    setStep('receipt');  
  };

  const handlePrintReceipt = () => {
    window.print();  
    setReceiptPrinted(true); 
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
          <TotalPriceBooking />
          <Button type="button" className="proceed-button" onClick={handleProceedClick}>
            Proceed with booking
          </Button>
        </div>
      )}

      {step === 'confirm' && (
        <div>
          <TravelDetailsData />
          <ChosenBookingOptions /> 
          <TotalPriceBooking />
          <PaymentOptions />
          <Button type="button" className="confirm-button" onClick={handleConfirmClick}>
            Confirm and pay
          </Button>
        </div>
      )}

      {step === 'receipt' && (
        <div>
          <TravelDetailsData />
          <ChosenBookingOptions /> 
          <TotalPriceBooking />
          <Button type="button" className="print-receipt-button" onClick={handlePrintReceipt}>
            Print receipt
          </Button>
       
          {receiptPrinted && <p className="receipt-printed-message">Receipt printed</p>}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Booking;