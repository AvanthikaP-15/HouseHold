import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Assets/css/NavBar.css';
import logo from '../Assets/Images/logo.jpg';
import searchIcon from '../Assets/Images/search.png';
import adminIcon from '../Assets/Images/setting.png';
import cartIcon from '../Assets/Images/calendar.png';
import { useCart } from './CartContext';

const NavBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { cart } = useCart();

  // Determine if the user is logged in
  const isAuthenticated = !!localStorage.getItem('token');

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleAccountClick = () => {
    navigate('/user-dashboard');
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Evento Logo" className="navbar-logo-image" />
          Evento
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {!isAuthenticated ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        ) : null}
      </ul>
      <div className="navbar-right">
        <div className="navbar-search">
          <img src={searchIcon} alt="Search Icon" className="search-icon" onClick={toggleSearch} />
          {searchOpen && (
            <input type="text" placeholder="Search events..." className="search-input" />
          )}
        </div>
        {isAuthenticated && (
          <>
            <div className="navbar-admin" ref={dropdownRef}>
              <img src={adminIcon} alt="Admin Icon" className="admin-icon" onClick={toggleDropdown} />
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/user-dashboard">My Account</Link>
                  <Link to="/" onClick={logout}>Logout</Link>
                </div>
              )}
            </div>
            <div className="navbar-cart">
              <Link to="/cart">
                <img src={cartIcon} alt="Cart Icon" className="cart-icon" />
                {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
