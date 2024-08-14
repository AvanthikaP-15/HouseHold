import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Assets/css/UserInfo.css';

const UserInfo = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log("JWT Token:", token);

        if (!token || token.split('.').length !== 3) {
          throw new Error("Invalid JWT Token: Must contain 2 periods");
        }

        const response = await axios.get("http://localhost:8080/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Fetched User Data:", response.data);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user data", error);
        setError(error.message);
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return (
      <div className="error-message">
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (users.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-info">
      <h1>User Information</h1>
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td className="password-cell">********</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserInfo;
