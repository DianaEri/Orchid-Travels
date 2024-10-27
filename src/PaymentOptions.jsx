// This component, created by (Madelene), displays payment options. This component allows the user to choose a payment
// method for their booking. The user can select from various payment systems. "Visa or Mastercard", "Paypal", och
//"Klarna".

// Import React and hooks (useState)
import React, { useState } from 'react';
// Import the CSS file for styling.
import './index.css'; 
// Import FontAwesomeIcon component for using icons.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import the specific icon (faAngleDown) from Font Awesome.
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

// Component to display and handle payment options.
const PaymentOptions = ({ onPaymentMethodSelect }) => {  
  // State to store the selected payment method.
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  // Function to handle the selection of a payment method.
  const handlePaymentMethodSelection = (method) => {
    setSelectedPaymentMethod(method); // Update the state with the selected method.
    onPaymentMethodSelect(method);  // Call the function passed as a prop with the selected method.
  };

  return (
    // Main container for the payment options form.
    <div className="booking-options-form">
      {/* Title for the payment method selection section */}
      <h2 className="booking-title">Select Payment Method</h2>

      {/* Option for Visa or Master card payment */}
      <div className="payment-option">
        <input 
          type="radio" 
          id="creditCard" 
          name="paymentMethod" 
          value="creditCard" 
          checked={selectedPaymentMethod === 'creditCard'} // Check if this option is selected.
          onChange={() => handlePaymentMethodSelection('creditCard')} // Handle selection when changed.
          className="round-checkbox" 
        />
        <label htmlFor="creditCard" className="payment-label">
          Visa or Mastercard <FontAwesomeIcon icon={faAngleDown} style={{ color: '#BE8730' }} />
        </label>
      </div>
      {/* Description for Visa or Mastercard card payment */}
      <p className="payment-description">
        Simply enter your card details, and your payment will be processed instantly. Both Visa and Mastercard offer fraud protection, easy transaction tracking, and flexible payment options, ensuring a seamless and safe shopping experience.
      </p>

      {/* Option for PayPal payment */}
      <div className="payment-option">
        <input 
          type="radio" 
          id="paypal" 
          name="paymentMethod" 
          value="paypal" 
          checked={selectedPaymentMethod === 'paypal'} // Check if this option is selected.
          onChange={() => handlePaymentMethodSelection('paypal')} // Handle selection when changed.
          className="round-checkbox" 
        />
        <label htmlFor="paypal" className="payment-label">
          Paypal <FontAwesomeIcon icon={faAngleDown} style={{ color: '#BE8730' }} />
        </label>
      </div>
      {/* Description for PayPal payment */}
      <p className="payment-description">
        With PayPal, you can pay instantly, send money, and even use the "Pay in 4" option to split purchases into interest-free payments. It's trusted worldwide for its buyer protection and convenience.
      </p>

      {/* Option for bank transfer payment (Klarna) */}
      <div className="payment-option">
        <input 
          type="radio" 
          id="bankTransfer" 
          name="paymentMethod" 
          value="bankTransfer" 
          checked={selectedPaymentMethod === 'bankTransfer'} // Check if this option is selected.
          onChange={() => handlePaymentMethodSelection('bankTransfer')} // Handle selection when changed.
          className="round-checkbox" 
        />
        <label htmlFor="bankTransfer" className="payment-label">
          Klarna <FontAwesomeIcon icon={faAngleDown} style={{ color: '#BE8730' }} />
        </label>
      </div>
      {/* Description for Klarna payment */}
      <p className="payment-description">
      With Klarna, you can split your purchase into interest-free installments, pay the full amount after 30 days, or choose financing options for larger purchases.
      </p>
    </div>
  );
};

// Export the PaymentOptions component for use in other parts of the application.
export default PaymentOptions;