import React from 'react';
import successImage from '../Assets/Images/tick.jpg'; // Replace with your success image path
import '../Assets/css/Success.css'; // Optional: Add a CSS file for styling the success page

const Success = () => {
  return (
    <div className="success-container">
      <img src={successImage} alt="Success" className="success-image" />
      <h2>Payment Successful!</h2>
      <p>Thank you for your payment. Your transaction has been completed successfully.</p>
    </div>
  );
};

export default Success;
