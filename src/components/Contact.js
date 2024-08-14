import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API calls
import '../Assets/css/Contact.css'; // Import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('All fields are required.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8080/api/feedbacks', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      console.log('Contact form submitted:', response.data);
      setSuccessMessage('Thank you for reaching out! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' }); // Clear form
      setErrorMessage('');
    } catch (error) {
      console.error('Error submitting contact form:', error);
      if (error.response) {
        // Server responded with a status other than 2xx
        setErrorMessage(`Server Error: ${error.response.status} - ${error.response.data.message || error.response.statusText}`);
      } else if (error.request) {
        // Request was made but no response was received
        setErrorMessage('No response received from server. Please check your network connection.');
      } else {
        // Something happened in setting up the request that triggered an error
        setErrorMessage(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
      </div>
      <div className="contact-body">
        <div className="contact-info">
          <h2>Say Hello!</h2>
          <p>We’re always interested in new implementations. Please don’t hesitate to get in touch with us regarding your requirements.</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Email:</strong> info@evento.com</p>
          <p><strong>Address:</strong> 123 Event St, Celebration City, EC 45678</p>
          <div className="contact-info-maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.008975882115!2d-79.383184084528!3d43.65322597917084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d1c6a74baf%3A0x6e7e9a08d1e5e8a!2s123%20Event%20St%2C%20Toronto%2C%20ON%20M5A%204B6%2C%20Canada!5e0!3m2!1sen!2sus!4v1604353407307!5m2!1sen!2sus"
              width="100%"
              height="250"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Maps Location" // Added title for iframe accessibility
            ></iframe>
          </div>
        </div>
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <p>If you have any questions or need further assistance, please fill out the form below. We will get back to you as soon as possible.</p>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
              />
            </div>
            {successMessage && <div className="success-message">{successMessage}</div>}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
