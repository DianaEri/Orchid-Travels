import React, { useState, useEffect } from 'react';
import '../index.css'; 
import Header from '../Header.jsx'; 
import YellowLine from '../YellowLine.jsx'; 
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
  const [hotelData, setHotelData] = useState(null); 
  const [selectedHotel, setSelectedHotel] = useState(null); 

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        const data = await response.json();
        setHotelData(data.hotels); 
        setSelectedHotel(data.hotels[0]); 
      } catch (error) {
        console.error('Error fetching hotel data:', error);
      }
    };
    fetchHotelData();
  }, []);

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

          <div style={{ marginTop: '3em' }}>
            <PaymentOptions onPaymentMethodSelect={setSelectedPaymentMethod} />  
          </div>
          
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
       
          {receiptPrinted && <p className="receipt-printed-message" style={{ color: 'green' }}>Receipt printed</p>}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Booking;