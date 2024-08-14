import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Assets/css/MyEvent.css';

const MyEvent = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (token) {
          // Decode the token to extract email (assuming JWT format)
          const email = JSON.parse(atob(token.split('.')[1])).sub;
          const response = await axios.get(`http://localhost:8080/api/bookings/email/${email}`, {
            headers: {
              Authorization: `Bearer ${token}`, // Ensure Authorization header is correctly formatted
            },
          });
          setEvents(response.data);
        } else {
          setError('User email or token not found.');
        }
      } catch (error) {
        console.error('Error fetching event data:', error);
        setError('Could not fetch event data. Please try again later.');
      }
    };

    fetchEventData();
  }, []);

  if (error) {
    return (
      <div className="error-message">
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="my-events">
      <h2>My Events</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Event Name</th>
            <th>Organizer Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Venue</th>
            <th>Additional Information</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.username}</td>
              <td>{event.email}</td>
              <td>{event.event}</td>
              <td>{event.organizer}</td>
              <td>{event.date}</td>
              <td>{event.time}</td>
              <td>{event.venue}</td>
              <td>{event.additionalInfo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyEvent;
