import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import '../Assets/css/Login.css';
import loginImage from '../Assets/Images/login.jpg'; // Update with the correct path to your image

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateLogin();
    if (isValid) {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/auth/authenticate", // Fixed URL
          {
            email: email,
            password: password,
          }
        );
        console.log(response);
        localStorage.setItem("token", response.data.token); // Save token
        localStorage.setItem("role", response.data.role);  // Save role separately
        const role = response.data.role; // Retrieve role directly

        if (role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate('/'); // Redirect to homepage for other users
        }
      } catch (error) {
        console.error('Login failed:', error);
        setErrors({ general: 'Login failed. Please check your credentials and try again.' });
      }
    }
  };

  const validateLogin = () => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="login-container">
      <div className="login-section">
        <div className="login-image">
          <img src={loginImage} alt="Login" />
        </div>
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="input-field">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              {errors.password && <div className="error">{errors.password}</div>}
            </div>
            {errors.general && <div className="error">{errors.general}</div>}
            <button type="submit" className="login-button">Login</button>
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
          </form>
          <a href="#" className="forgot-password">Forgot password?</a>
          <div className="social-login">
            <p>Or login with:</p>
            <div className="social-buttons">
              <button className="social-btn google">Google</button>
              <button className="social-btn facebook">Facebook</button>
              <button className="social-btn twitter">Twitter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
