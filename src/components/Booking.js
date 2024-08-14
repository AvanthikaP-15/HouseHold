import React, { useState } from 'react';
import '../Assets/css/Booking.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faCalendarAlt, faClock, faMapMarkerAlt, faInfoCircle, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Booking = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [serviceName, setServiceName] = useState(''); // Updated to service name
  const [providerName, setProviderName] = useState(''); // Updated to provider name
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [address, setAddress] = useState(''); // Updated to address instead of venue
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Adjust token retrieval as needed
      const response = await axios.post(
        'http://localhost:8080/api/bookings/newBooking',
        {
          username,
          email,
          serviceName, // Updated to service name
          providerName, // Updated to provider name
          date,
          time,
          address, // Updated to address instead of venue
          additionalInfo
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('Booking submitted:', response.data);
      navigate('/payment');
    } catch (error) {
      console.error('Error submitting booking', error);
      if (error.response) {
        setError(`Server Error: ${error.response.status} - ${error.response.data.message || error.response.statusText}`);
      } else if (error.request) {
        setError('No response received from server. Please check your network connection.');
      } else {
        setError(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="booking-container">
      <h2>Book Your Household Service</h2> {/* Updated header */}
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faUser} /> Username
          </label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faClipboardList} /> Service Name {/* Updated label */}
          </label>
          <input 
            type="text" 
            value={serviceName} 
            onChange={(e) => setServiceName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faUser} /> Provider Name {/* Updated label */}
          </label>
          <input 
            type="text" 
            value={providerName} 
            onChange={(e) => setProviderName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faCalendarAlt} /> Date
          </label>
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faClock} /> Time
          </label>
          <input 
            type="time" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Address {/* Updated label */}
          </label>
          <input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faInfoCircle} /> Additional Information
          </label>
          <textarea 
            value={additionalInfo} 
            onChange={(e) => setAdditionalInfo(e.target.value)} 
          ></textarea>
        </div>
        <button type="submit" className="booking-button">Submit Booking</button>
      </form>
      {error && (
        <div className="error-message">
          <h3>Error</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Booking;
