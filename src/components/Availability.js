import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/Availability.css';
import { useCart } from './CartContext';

// Dummy data for household service providers
const serviceProvidersData = [
  { id: 1, name: 'Sparkle Cleaners', rating: '★★★★★', address: '123 Clean St, Cityville', contact: '123-456-7890', specialty: 'Cleaning Services', imageUrl: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 2, name: 'Pipe Pros', rating: '★★★★☆', address: '456 Flow Ave, Townsburg', contact: '987-654-3210', specialty: 'Plumbing Services', imageUrl: 'https://images.pexels.com/photos/2574664/pexels-photo-2574664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 3, name: 'Green Thumb', rating: '★★★★☆', address: '789 Garden Blvd, Metropolis', contact: '456-789-1234', specialty: 'Gardening Services', imageUrl: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 4, name: 'Fix It All', rating: '★★★★★', address: '321 Repair Rd, Citytown', contact: '789-123-4567', specialty: 'Handyman Services', imageUrl: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 5, name: 'Bright Light', rating: '★★★★☆', address: '654 Light Ln, Villagecity', contact: '321-654-9870', specialty: 'Electrical Services', imageUrl: 'https://images.pexels.com/photos/2397351/pexels-photo-2397351.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 6, name: 'Pet Care', rating: '★★★☆☆', address: '987 Breeze St, Urbantown', contact: '654-321-0987', specialty: 'Pet Care', imageUrl: 'https://images.pexels.com/photos/1870301/pexels-photo-1870301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 7, name: 'Baby Sitting', rating: '★★★★☆', address: '123 Secure Ave, Cityplace', contact: '123-789-4560', specialty: 'Baby Sitting', imageUrl: 'https://images.pexels.com/photos/25842010/pexels-photo-25842010/free-photo-of-mother-holding-baby-in-overalls.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 8, name: 'Eco Clean', rating: '★★★★★', address: '456 Green Rd, Happyville', contact: '987-123-6540', specialty: 'Eco-friendly Cleaning', imageUrl: 'https://images.pexels.com/photos/2318555/pexels-photo-2318555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  // { id: 9, name: 'Fresh Air', rating: '★★★☆☆', address: '789 Fresh Ln, Festiville', contact: '456-321-7890', specialty: 'Air Duct Cleaning', imageUrl: 'https://example.com/a9.jpg' },
  // { id: 10, name: 'Move Masters', rating: '★★★★★', address: '101 Move Blvd, Cheerstown', contact: '123-456-7891', specialty: 'Moving Services', imageUrl: 'https://example.com/a10.jpg' },
  // { id: 11, name: 'Pest Control Pros', rating: '★★★★☆', address: '202 Bug St, Joycity', contact: '987-654-3211', specialty: 'Pest Control', imageUrl: 'https://example.com/a11.jpg' },
  // { id: 12, name: 'Smart Home Solutions', rating: '★★★☆☆', address: '303 Tech Ave, Eventown', contact: '456-789-1235', specialty: 'Smart Home Installations', imageUrl: 'https://example.com/a12.jpg' },
];

const Availability = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleBookClick = () => {
    navigate('/booking');
  };

  const handleAddToCart = (serviceProvider) => {
    addToCart(serviceProvider);
  };

  return (
    <div className="availability">
      <h2>Available Household Services</h2>
      <div className="organizer-container">
        {serviceProvidersData.map((serviceProvider) => (
          <div key={serviceProvider.id} className="organizer-card">
            <img src={serviceProvider.imageUrl} alt={serviceProvider.name} className="organizer-image" />
            <div className="organizer-content">
              <h3>{serviceProvider.name}</h3>
              <p>Rating: {serviceProvider.rating}</p>
              <p>Address: {serviceProvider.address}</p>
              <p>Contact: {serviceProvider.contact}</p>
              <p>Specialty: {serviceProvider.specialty}</p>
              <button className="book-button" onClick={handleBookClick}>Book Service</button>
              <button className="add-to-cart-button" onClick={() => handleAddToCart(serviceProvider)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Availability;
