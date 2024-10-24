import React, { useState } from 'react';
import './index.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const PaymentOptions = ({ onPaymentMethodSelect }) => {  
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handlePaymentMethodSelection = (method) => {
    setSelectedPaymentMethod(method);
    onPaymentMethodSelect(method);  
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
        Visa or Mastercard <FontAwesomeIcon icon={faAngleDown} style={{ color: '#BE8730' }} />
        </label>
      </div>
      <p className="payment-description">
      Simply enter your card details, and your payment will be processed instantly. Both Visa and Mastercard offer fraud protection, easy transaction tracking, and flexible payment options, ensuring a seamless and safe shopping experience.
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
          Paypal <FontAwesomeIcon icon={faAngleDown} style={{ color: '#BE8730' }} />
        </label>
      </div>
      <p className="payment-description">
      With PayPal, you can pay instantly, send money, and even use the "Pay in 4" option to split purchases into interest-free payments. It's trusted worldwide for its buyer protection and convenience.
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
          Swish<FontAwesomeIcon icon={faAngleDown} style={{ color: '#BE8730' }} />
        </label>
      </div>
      <p className="payment-description">
      With Swish, you can make instant, secure payments directly from your bank account using your mobile phone. It offers quick and easy transfers for online purchases. Just enter your phone number to complete the transaction in seconds, without the need for a card.
      </p>
    </div>
  );
};

export default PaymentOptions;