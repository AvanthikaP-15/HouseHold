import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/Signup.css';
import loginImage from '../Assets/Images/login.jpg';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const apiurl = "http://localhost:8080/api/users/signup";

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validateSignup();
        if (isValid) {
            try {
                console.log('Sending request with payload:', {
                    username,
                    email,
                    password,
                });

                const response = await axios.post(apiurl, {
                    username: username,
                    email: email,
                    password: password,
                    confirmpassword: confirmPassword,
                    roles: "USER",
                });

                console.log('Response:', response.data);
                alert("User created successfully");
                navigate('/login'); // Navigate to login page after successful signup

            } catch (error) {
                console.error('Error during signup:', error);

                if (error.response) {
                    setErrorMessage(error.response.data || 'An error occurred on the server.');
                } else if (error.request) {
                    setErrorMessage('No response from server. Please try again later.');
                } else {
                    setErrorMessage(error.message);
                }
            }
        }
    }

    const validateSignup = () => {
        const errors = {};
        if (!username) {
            errors.username = 'Username is required';
        } else if (username.length < 3) {
            errors.username = 'Username must be at least 3 characters';
        }
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
        if (!confirmPassword) {
            errors.confirmPassword = 'Confirm password is required';
        } else if (password !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    return (
        <div className="auth-container">
            <div className="auth-section">
                <div className="auth-image">
                    <img src={loginImage} alt="Signup" />
                </div>
                <div className="auth-form">
                    <h2>Sign up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-field">
                            <input 
                                type="text" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                placeholder="Username" 
                                name="username" 
                            />
                            {errors.username && <div className="error">{errors.username}</div>}
                        </div>
                        <div className="input-field">
                            <input 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="Email" 
                                name="email" 
                            />
                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>
                        <div className="input-field">
                            <input 
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder="Password" 
                                name="password" 
                            />
                            {errors.password && <div className="error">{errors.password}</div>}
                        </div>
                        <div className="input-field">
                            <input 
                                type="password" 
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                                placeholder="Confirm Password" 
                                name="confirmpassword" 
                            />
                            {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                        </div>
                        {errorMessage && <div className="error">{errorMessage}</div>}
                        <button type="submit" className="auth-button">Sign up</button>
                        <p>Already have an account? <a href="/login">Login</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
