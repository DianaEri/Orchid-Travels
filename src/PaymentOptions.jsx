import React, { useState } from 'react';
import './index.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const PaymentOptions = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePaymentMethodSelection = (method) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <div className="booking-options-form">
      <h2 className="booking-title">Select Payment Method</h2>


      <div className="payment-option">
        <input 
          type="radio" 
          id="creditCard" 
          name="paymentMethod" 
          value="creditCard" 
          checked={selectedPaymentMethod === 'creditCard'} 
          onChange={() => handlePaymentMethodSelection('creditCard')} 
          className="round-checkbox" 
        />
        <label htmlFor="creditCard" className="payment-label">
          Credit Card <FontAwesomeIcon icon={faAngleDown} style={{ color: '#BE8730' }} />
        </label>
      </div>
      <p className="payment-description">
        Pay securely using your credit or debit card.
      </p>

 
      <div className="payment-option">
        <input 
          type="radio" 
          id="paypal" 
          name="paymentMethod" 
          value="paypal" 
          checked={selectedPaymentMethod === 'paypal'} 
          onChange={() => handlePaymentMethodSelection('paypal')} 
          className="round-checkbox" 
        />
        <label htmlFor="paypal" className="payment-label">
          PayPal <FontAwesomeIcon icon={faAngleDown} style={{ color: '#BE8730' }} />
        </label>
      </div>
      <p className="payment-description">
        Use your PayPal account for fast and secure payment.
      </p>


      <div className="payment-option">
        <input 
          type="radio" 
          id="bankTransfer" 
          name="paymentMethod" 
          value="bankTransfer" 
          checked={selectedPaymentMethod === 'bankTransfer'} 
          onChange={() => handlePaymentMethodSelection('bankTransfer')} 
          className="round-checkbox" 
        />
        <label htmlFor="bankTransfer" className="payment-label">
          Bank Transfer <FontAwesomeIcon icon={faAngleDown} style={{ color: '#BE8730' }} />
        </label>
      </div>
      <p className="payment-description">
        Transfer funds directly from your bank account.
      </p>
    </div>
  );
};

export default PaymentOptions;