import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API calls
import '../Assets/css/Payment.css';
import card from '../Assets/Images/card.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faCreditCard, faUser, faCalendarAlt, faKey } from '@fortawesome/free-solid-svg-icons';

const Payment = () => {
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [error, setError] = useState(null); // To handle errors
  const navigate = useNavigate();

  const handlePayment = async (e) => {
    e.preventDefault();

    // Replace with the actual API endpoint for storing payment information
    const apiEndpoint = 'http://localhost:8080/api/payments';

    try {
      const token = localStorage.getItem('token'); // Retrieve token from local storage
      const response = await axios.post(
        apiEndpoint,
        {
          amount,
          cardNumber,
          cardHolder,
          expiry,
          cvc
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('Payment processed:', response.data);
      navigate('/success'); // Redirect on success
    } catch (error) {
      console.error('Error processing payment', error);
      if (error.response) {
        // Server responded with a status other than 2xx
        setError(`Server Error: ${error.response.status} - ${error.response.data.message || error.response.statusText}`);
      } else if (error.request) {
        // Request was made but no response was received
        setError('No response received from server. Please check your network connection.');
      } else {
        // Something happened in setting up the request that triggered an error
        setError(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="payment-container">
      <div className="card-image">
        <img src={card} alt="Credit Card" />
      </div>
      <div className="payment-form-container">
        <h2>Payment Information</h2>
        <form className="payment-form" onSubmit={handlePayment}>
          <div className="form-group">
            <label><FontAwesomeIcon icon={faDollarSign} /> Amount</label>
            <input 
              type="text" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label><FontAwesomeIcon icon={faCreditCard} /> Card Number</label>
            <input 
              type="text" 
              value={cardNumber} 
              onChange={(e) => setCardNumber(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label><FontAwesomeIcon icon={faUser} /> Cardholder Name</label>
            <input 
              type="text" 
              value={cardHolder} 
              onChange={(e) => setCardHolder(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label><FontAwesomeIcon icon={faCalendarAlt} /> Expiry Date</label>
            <input 
              type="text" 
              value={expiry} 
              onChange={(e) => setExpiry(e.target.value)} 
              placeholder="MM/YY"
              required 
            />
          </div>
          <div className="form-group">
            <label><FontAwesomeIcon icon={faKey} /> CVC</label>
            <input 
              type="text" 
              value={cvc} 
              onChange={(e) => setCvc(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="payment-button">Proceed to Pay</button>
        </form>
        {error && (
          <div className="error-message">
            <h3>Error</h3>
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;
