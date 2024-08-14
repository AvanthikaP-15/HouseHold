import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/Services.css'; // Adjust the path as necessary

const servicesData = [
  { id: 'cleaning', title: 'Cleaning Services', description: 'Professional cleaning services to keep your home spotless and fresh.', imageUrl: 'https://images.pexels.com/photos/6195278/pexels-photo-6195278.jpeg' },
  { id: 'plumbing', title: 'Plumbing', description: 'Expert plumbing services to fix leaks, clogs, and more.', imageUrl: 'https://images.pexels.com/photos/3721272/pexels-photo-3721272.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'electrical', title: 'Electrical Services', description: 'Reliable electrical services to ensure your home’s safety and efficiency.', imageUrl: 'https://images.pexels.com/photos/3825584/pexels-photo-3825584.jpeg' },
  { id: 'gardening', title: 'Gardening', description: 'Gardening services to maintain and beautify your outdoor spaces.', imageUrl: 'https://images.pexels.com/photos/5561310/pexels-photo-5561310.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'painting', title: 'Painting Services', description: 'Professional painting services for both interior and exterior of your home.', imageUrl: 'https://images.pexels.com/photos/9244176/pexels-photo-9244176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 'hvac', title: 'Pet Care', description: 'Pet care involves the responsibilities and practices needed to ensure that pets are healthy, happy, and well-adjusted.', imageUrl: 'https://images.pexels.com/photos/7055930/pexels-photo-7055930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  // { id: 'moving', title: 'Moving Services', description: 'Efficient and reliable moving services to make your relocation stress-free.', imageUrl: 'https://example.com/moving.jpg' },
];

const Services = () => {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate('/availability');
  };

  const handleImageClick = (id) => {
    navigate(`/service-details/${id}`);
  };

  return (
    <div className="services">
      <div className="card-container">
        {servicesData.map((service) => (
          <div className="card" key={service.id}>
            <img
              className="card-image"
              src={service.imageUrl}
              alt={service.title}
              onClick={() => handleImageClick(service.id)}
            />
            <div className="card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="view-button" onClick={handleViewClick}>View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
