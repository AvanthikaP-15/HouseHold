import React, { useState, useEffect } from 'react';
import '../Assets/css/UserDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUserEdit, faCalendarAlt, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import EditProfile from './EditProfile';
import MyEvent from './MyEvent';
import Settings from './Settings';
import profilePic from '../Assets/Images/women1.jpg'; // Add your profile picture here
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('dashboard');
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user information after login
    const fetchUserInfo = async () => {
      try {
        // Assuming the token contains the user's email
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        
        if (token) {
          // Decode the token to extract email (assuming JWT format)
          const email = JSON.parse(atob(token.split('.')[1])).sub; 

          const response = await axios.get(`http://localhost:8080/api/users/email/${email}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setUserInfo({ name: response.data.username, email: response.data.email });
        }
      } catch (error) {
        console.error('Error fetching user information:', error);
        // Handle error, possibly redirect to login
        navigate('/login');
      }
    };

    fetchUserInfo();
  }, [navigate]);

  const handleLogout = () => {
    // Clear the auth token from localStorage or sessionStorage
    localStorage.removeItem('token'); 
    sessionStorage.removeItem('token'); 

    // Optionally, clear other relevant data, like user information
    localStorage.removeItem('userInfo');
    sessionStorage.removeItem('userInfo');

    // Redirect to the homepage or login page
    navigate('/');
  };

  const recentActivities = [
    { activity: 'Scheduled a home cleaning service', date: '2024-07-01' },
    { activity: 'Updated home maintenance preferences', date: '2024-06-25' },
    { activity: 'Requested a plumbing repair', date: '2024-06-20' }
  ];

  const upcomingServices = [
    { service: 'Kitchen Cleaning', date: '2024-08-12' },
    { service: 'Garden Maintenance', date: '2024-09-15' }
  ];

  const renderComponent = () => {
    switch (activeComponent) {
      case 'edit-profile':
        return <EditProfile />;
      case 'my-services':
        return <MyEvent />; // Updated component name
      case 'settings':
        return <Settings />;
      default:
        return (
          <>
            <div className="cards-container">
              <div className="card">Recent Activities</div>
              <div className="card">Upcoming Services</div>
              <div className="card">Notifications</div>
              <div className="card">Messages</div>
            </div>
            <section id="recent-activities">
              <h2>Recent Activities</h2>
              <ul>
                {recentActivities.map((activity, index) => (
                  <li key={index}>{activity.activity} - {activity.date}</li>
                ))}
              </ul>
            </section>
            <section id="upcoming-services">
              <h2>Upcoming Services</h2>
              <ul>
                {upcomingServices.map((service, index) => (
                  <li key={index}>{service.service} - {service.date}</li>
                ))}
              </ul>
            </section>
            <section id="notifications">
              <h2>Notifications</h2>
              <ul>
                <li>New message from your service provider</li>
                <li>Your cleaning service is confirmed</li>
              </ul>
            </section>
            <section id="messages">
              <h2>Messages</h2>
              <ul>
                <li>Message from Alex: "Your garden service is scheduled!"</li>
                <li>Message from Jamie: "Please confirm your availability for plumbing work."</li>
              </ul>
            </section>
          </>
        );
    }
  };

  return (
    <div className="user-dashboard">
      <div className="side-panel">
        <div className="profile-section">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <h2>{userInfo.name}</h2>
          <p>{userInfo.email}</p>
        </div>
        <ul>
          <li onClick={() => setActiveComponent('dashboard')}>
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </li>
          <li onClick={() => setActiveComponent('edit-profile')}>
            <FontAwesomeIcon icon={faUserEdit} /> Edit Profile
          </li>
          <li onClick={() => setActiveComponent('my-services')}>
            <FontAwesomeIcon icon={faCalendarAlt} /> My Services
          </li>
          <li onClick={() => setActiveComponent('settings')}>
            <FontAwesomeIcon icon={faCog} /> Settings
          </li>
        </ul>
        <div className="logout-section">
          <button onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </button>
        </div>
      </div>
      <div className="main-content">
        {renderComponent()}
      </div>
    </div>
  );
};

export default UserDashboard;
