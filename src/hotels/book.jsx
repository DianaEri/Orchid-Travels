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
  const [receiptPrinted, setReceiptPrinted] = useState(false); 
  const [totalPrice, setTotalPrice] = useState(0);  
  const [errorMessage, setErrorMessage] = useState('');  
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');  

  const handleProceedClick = () => {
    if (totalPrice > 0) {
      setErrorMessage('');  
      setStep('confirm'); 
    } else {
      setErrorMessage('Please select a room and flight class to proceed.');  
    }
  };

  const handleConfirmClick = () => {
    if (selectedPaymentMethod) {
      setStep('receipt');  
    } else {
      setErrorMessage('Please select a payment method to proceed.');  
    }
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
       
          <TotalPrice onPriceUpdate={setTotalPrice} />

        
          {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}

          <Button 
            type="button" 
            className="proceed-button" 
            onClick={handleProceedClick}
            disabled={totalPrice === 0}  
          >
            Proceed with booking
          </Button>
        </div>
      )}

      {step === 'confirm' && (
        <div>
          <TravelDetailsData />
          <ChosenBookingOptions /> 
          <TotalPrice />
          <PaymentOptions onPaymentMethodSelect={setSelectedPaymentMethod} />  
          
        
          {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
          
          <Button 
            type="button" 
            className="confirm-button" 
            onClick={handleConfirmClick}
            disabled={!selectedPaymentMethod}  
          >
            Confirm and pay
          </Button>
        </div>
      )}

      {step === 'receipt' && (
        <div>
          <TravelDetailsData />
          <ChosenBookingOptions /> 
          <TotalPrice />
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