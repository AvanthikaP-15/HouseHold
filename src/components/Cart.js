import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Rating: {item.rating}</p>
                <p>Specialty: {item.specialty}</p>
                <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <button onClick={handleCheckout} className="checkout-button">Proceed to Checkout</button>
      )}
    </div>
  );
};

export default Cart;
