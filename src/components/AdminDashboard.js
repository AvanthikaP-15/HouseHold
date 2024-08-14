import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faPalette, faPlusCircle, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../Assets/css/AdminDashboard.css';
import profilePic from '../Assets/Images/man.jpg'; // Replace with your profile picture path
import EditTheme from './EditTheme';
import CreateTheme from './CreateTheme';
import UserInfo from './UserInfo';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [recentOrders, setRecentOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token'); // Or wherever you store the token
        const response = await axios.get('http://localhost:8080/api/bookings', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setRecentOrders(response.data);
      } catch (error) {
        console.error('Error fetching recent orders:', error.response ? error.response.data : error.message);
      }
    };
    
    fetchOrders();
  }, []);

  const handleSidebarClick = (section) => {
    setActiveSection(section);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    sessionStorage.removeItem('userInfo');
    navigate('/');
  };

  const cardData = {
    dailyViews: 245,
    bookings: 37,
    enquiries: 12,
    earnings: '$5,400'
  };

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Monthly Views',
        data: [120, 150, 180, 220, 200, 250, 300],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
        lineTension: 0.3,
      },
      {
        label: 'Customer Count',
        data: [30, 45, 50, 70, 60, 85, 90],
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 159, 64, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 159, 64, 1)',
        lineTension: 0.3,
      },
      {
        label: 'Website Ratings',
        data: [4.2, 4.5, 4.0, 4.8, 4.7, 4.9, 5.0],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(153, 102, 255, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(153, 102, 255, 1)',
        lineTension: 0.3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 14,
          },
          color: '#333',
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
        backgroundColor: '#fff',
        titleColor: '#333',
        bodyColor: '#666',
        borderColor: '#ddd',
        borderWidth: 1,
      },
      title: {
        display: true,
        text: 'Website Statistics',
        font: {
          size: 18,
          weight: 'bold',
        },
        color: '#333',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#666',
        },
      },
      y: {
        grid: {
          borderColor: '#ddd',
        },
        ticks: {
          color: '#666',
        },
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeOutBounce',
    },
  };

  return (
    <div className="admin-dashboard">
      <div className="side-panel">
        <div className="profile-section">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <h3 className="profile-name">John Smith</h3>
          <p className="profile-role">Administrator</p>
        </div>
        <ul>
          <li onClick={() => handleSidebarClick('dashboard')}>
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </li>
          <li onClick={() => handleSidebarClick('edit-themes')}>
            <FontAwesomeIcon icon={faPalette} /> Edit Themes
          </li>
          <li onClick={() => handleSidebarClick('create-theme')}>
            <FontAwesomeIcon icon={faPlusCircle} /> Create Theme
          </li>
          <li onClick={() => handleSidebarClick('user-info')}>
            <FontAwesomeIcon icon={faUser} /> User Info
          </li>
        </ul>
        <div className="logout-section">
          <button onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </button>
        </div>
      </div>
      <div className="main-content">
        {activeSection === 'dashboard' && (
          <>
            <div className="cards-container">
              <div className="card">
                <h3>Daily Views</h3>
                <p className="card-count">{cardData.dailyViews}</p>
              </div>
              <div className="card">
                <h3>Bookings</h3>
                <p className="card-count">{cardData.bookings}</p>
              </div>
              <div className="card">
                <h3>Enquiries</h3>
                <p className="card-count">{cardData.enquiries}</p>
              </div>
              <div className="card">
                <h3>Earnings</h3>
                <p className="card-count">{cardData.earnings}</p>
              </div>
            </div>
            <section id="charts">
              <h2>Website Statistics</h2>
              <div className="chart-container">
                <Line data={chartData} options={chartOptions} />
              </div>
            </section>
            <section id="recent-orders">
              <h2>Recent Orders</h2>
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
                  {recentOrders.map((order, index) => (
                    <tr key={index}>
                      <td>{order.username}</td>
                      <td>{order.email}</td>
                      <td>{order.eventName}</td>
                      <td>{order.organizerName}</td>
                      <td>{order.date}</td>
                      <td>{order.time}</td>
                      <td>{order.venue}</td>
                      <td>{order.additionalInfo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </>
        )}
        {activeSection === 'edit-themes' && <EditTheme />}
        {activeSection === 'create-theme' && <CreateTheme />}
        {activeSection === 'user-info' && <UserInfo />}
      </div>
    </div>
  );
};

export default AdminDashboard;
