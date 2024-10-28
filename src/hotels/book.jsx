// (Madelene) made this component, which displays the booking website. 
// This component manages a booking process that renders three steps. Step 1: Booking, where the user 
// selects a room and flight, views the total price, and sees a table with information about departure date,
//  departure location, length of stay, and destination. Step 2: A table, the selected room and flight 
// class, the total price, and payment options. Step 3: A table, the selected room and flight class, the 
// total price is presented, along with a receipt printout as a PDF.
// There is also an error message that pops up if the user doesnt make enough selections in radio buttons. The total price needs to be calculated.
// The total price is only calculated when you chose 1 room and 1 flight class. If the user doesnt chose and skips directly to "Proceed with
// booking" the button wont work and will show an error message, because Total price isnt calculated.
// An error message is also displayed when a payement option is not selected. The error message is shown when a payment method is
// not selected because the handleConfirmClick function checks if the selectedPaymentMethod state is empty.

// The components Header, YellowLine, TravelDetailsData, BokingOptionsForm, TotalPrice, headingBlock, 
// PaymentOptions, ChosenBookingOptions is made by (Madelene)

// The rest of the components, like button, footer are made by (Diana).

import React, { useState, useEffect } from 'react'; // Import React and hooks (useEffect, useState)
import '../index.css'; // Import the CSS file for styling
import Header from '../Header.jsx'; //Displays a header with hamburger menu component 
import YellowLine from '../YellowLine.jsx'; // Displays a yellow line component
import TravelDetailsData from '../TravelDetailsData'; // Retrieves and displays travel information
import BookingOptionsForm from '../BookingOptionsForm'; // Displays a component with choices for what you can book with radio buttons. You have Room choices and Select flight choices. 
import TotalPrice from '../TotalPrice'; // This component displays the total price for a booking.
import HeadingBlock from '../HeadingBlock'; //This component,displays a styled heading block for the website.
import Footer from '../Footer'; // A  footer component which includes logos, social media icons, and links to various sections of the website.
import Button from '../Button'; // This component is a reusable button element that can be customized with props.
import PaymentOptions from '../PaymentOptions'; // This component displays payment options
import ChosenBookingOptions from '../ChosenBookingOptions.jsx'; // This component, created by (Madelene), retrieves and displays "chosen Room with price" and  "chosen flight class"

// This component, created by Madelene, displays a booking page.
const Booking = () => {
  // State variables for managing the booking process.
  const [step, setStep] = useState('booking'); // Tracks current step (booking, confirm, receipt).
  const [receiptPrinted, setReceiptPrinted] = useState(false); // Tracks if receipt has been printed.
  const [totalPrice, setTotalPrice] = useState(0); // Stores total price of the booking.
  const [errorMessage, setErrorMessage] = useState(''); // Holds error messages.
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(''); // Tracks selected payment method.
  const [hotelData, setHotelData] = useState(null); // Stores fetched hotel data.
  const [selectedHotel, setSelectedHotel] = useState(null); // Stores the selected hotel.

  // Fetches hotel data from API when the component loads.
  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/data');
        const data = await response.json();
        setHotelData(data.hotels); // Save the fetched hotel data from API.
        setSelectedHotel(data.hotels[0]); // Set the default selected hotel.
      } catch (error) {
        console.error('Error fetching hotel data:', error); // Log error if fetch fails for API data.
      }
    };
    fetchHotelData();
  }, []);

  // Handles the click event for proceeding with the booking.
  const handleProceedClick = () => {
    if (totalPrice > 0) { // If a price is set, proceed to the confirm step.
      setErrorMessage('');  
      setStep('confirm'); 
    } else { // Otherwise, show an error message.
      setErrorMessage('Please select a room and flight class to proceed.');  
    }
  };

  // Handles the click event for confirming the booking.
  const handleConfirmClick = () => {
    if (selectedPaymentMethod) { // If a payment method is selected, proceed to receipt step.
      setStep('receipt');  
    } else { // Otherwise, show an error message.
      setErrorMessage('Please select a payment method to proceed.');  
    }
  };

  // Handles printing the receipt.
  const handlePrintReceipt = () => {
    window.print();  // Print the receipt.
    setReceiptPrinted(true); // Mark the receipt as printed.
  };

  return (
    <div>
      <Header /> {/* Displays Header component */}
      <HeadingBlock text="Prices and booking" /> {/* Page title */}
      <YellowLine /> {/* Displays YellowLine component */}

      {/* Booking step */}
      {step === 'booking' && (
        <div>
          <TravelDetailsData /> {/* Travel details */}
          <BookingOptionsForm /> {/* Form for booking options */}
       
          <TotalPrice onPriceUpdate={setTotalPrice} /> {/*  */}

          {/* Error message if not chosing 1 room and 1 flight class */}
          {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}

          <Button 
            type="button" 
            className="proceed-button" 
            onClick={handleProceedClick}
            disabled={totalPrice === 0}  // Disable button if 1 room and 1 flight class is not selected, both needs to be selected, the button only proceeds when total price is calculated. 
          >
            Proceed with booking
          </Button>
        </div>
      )}

      {/* Confirmation step */}
      {step === 'confirm' && (
        <div>
          <TravelDetailsData /> {/* Displays TravelFetailsData component */}
          <ChosenBookingOptions /> {/* Displays ChosenBookigOptions Component */}
          <TotalPrice /> {/* Displays totalPrice component */}

          <div style={{ marginTop: '3em' }}>
            <PaymentOptions onPaymentMethodSelect={setSelectedPaymentMethod} />  {/* Displays PaymentOptions component */}
          </div>
          
          {/* Error message if not chosing 1 payment option */}
          {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
          
          <Button 
            type="button" 
            className="confirm-button" 
            onClick={handleConfirmClick}
            disabled={!selectedPaymentMethod}  // Disable button if no payment method is selected.
          >
            Confirm and pay
          </Button>
        </div>
      )}

      {/* Receipt step */}
      {step === 'receipt' && (
        <div>
          <TravelDetailsData /> {/* Displays TravelFetailsData component  */}
          <ChosenBookingOptions /> {/* Displays ChosenBookigOptions Component */}
          <TotalPrice /> {/* Displays totalPrice component  */}
          <Button type="button" className="print-receipt-button" onClick={handlePrintReceipt}>
            Print receipt
          </Button>
       
          {/* Message confirming the receipt was printed */}
          {receiptPrinted && <p className="receipt-printed-message" style={{ color: 'green' }}>Receipt printed</p>}
        </div>
      )}

      <Footer /> {/* Displays Footer component */}
    </div>
  );
};

export default Booking; // Export the component.