import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { CartProvider } from './components/CartContext';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import CreateTheme from './components/CreateTheme';
import EditTheme from './components/EditTheme';
import UserInfo from './components/UserInfo';
import Availability from './components/Availability';
import Booking from './components/Booking';
import UserDashboard  from './components/UserDashboard';
import EditProfile from './components/EditProfile';
import Settings from './components/Settings';
import MyEvent from './components/MyEvent';
import Payment from './components/Payment';
import Success from './components/Success';
import Cart from './components/Cart';
import EventDetail from './components/EventDetail';

const App = () => {
  const location = useLocation();
  const hideNavBarFooter = [
    '/admin',
    '/edit-themes',
    '/create-theme',
    '/user-info',
    '/user-dashboard',
    '/edit-profile',
    '/settings',
    '/my-events',
    '/booking',
    '/payment',
    '/success',
  ].includes(location.pathname);

  return (
    <>
      {!hideNavBarFooter && <NavBar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/event-details/:id" element={<EventDetail />} />
          <Route path="/availability" element={<Availability />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/create-theme" element={<CreateTheme />} />
          <Route path="/edit-themes" element={<EditTheme />} />
          <Route path="/user-info" element={<UserInfo />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/my-events" element={<MyEvent />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      {!hideNavBarFooter && <Footer />}
    </>
  );
};

const AppWrapper = () => (
  <CartProvider>
  <Router>
    <App />
  </Router>
  </CartProvider>
);

export default AppWrapper;
