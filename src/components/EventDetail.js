import React from 'react';
import '../Assets/css/EventDetail.css'; // Adjust the path as necessary

const eventDetailsData = [
  {
    id: 'cleaning',
    title: 'Home Cleaning Services',
    description: 'Professional home cleaning services that ensure your home is spotless and hygienic. We offer deep cleaning, regular maintenance, and specialized cleaning services tailored to your needs.',
    imageUrl: 'https://example.com/house-cleaning.jpg',
    extraContent: 'Our experienced team uses eco-friendly products and advanced techniques to clean every corner of your home, providing a healthy and fresh living environment.'
  },
  {
    id: 'gardening',
    title: 'Gardening and Landscaping',
    description: 'Expert gardening and landscaping services to beautify your outdoor spaces. From lawn care to garden design, we help you create and maintain a vibrant garden.',
    imageUrl: 'https://example.com/gardening-service.jpg',
    extraContent: 'Whether you need regular garden maintenance or a complete landscape overhaul, our team provides customized solutions to enhance the beauty and value of your property.'
  },
  {
    id: 'plumbing',
    title: 'Plumbing Services',
    description: 'Reliable plumbing services for all your household needs. We handle everything from leaky faucets to major plumbing installations with professionalism and expertise.',
    imageUrl: 'https://example.com/plumbing-service.jpg',
    extraContent: 'Our licensed plumbers are available 24/7 to address any plumbing issues, ensuring your home’s water systems are functioning smoothly and efficiently.'
  },
  {
    id: 'electrical',
    title: 'Electrical Services',
    description: 'Comprehensive electrical services, including installation, repairs, and maintenance. We ensure your home’s electrical systems are safe and up to code.',
    imageUrl: 'https://example.com/electrical-service.jpg',
    extraContent: 'Our certified electricians provide reliable and efficient services, from lighting installations to electrical safety inspections, keeping your home powered and secure.'
  },
  {
    id: 'painting',
    title: 'Home Painting Services',
    description: 'Transform your home with our professional painting services. We offer interior and exterior painting that enhances the beauty and durability of your property.',
    imageUrl: 'https://example.com/painting-service.jpg',
    extraContent: 'Our skilled painters use high-quality materials and precision techniques to deliver flawless results that reflect your style and protect your home.'
  },
  {
    id: 'pestcontrol',
    title: 'Pest Control Services',
    description: 'Effective pest control solutions to protect your home from unwanted pests. We use safe and environmentally friendly methods to eliminate pests and prevent infestations.',
    imageUrl: 'https://example.com/pest-control.jpg',
    extraContent: 'Our pest control experts identify and eliminate the source of infestations, providing long-lasting protection for your home and ensuring a pest-free environment.'
  },
  {
    id: 'moving',
    title: 'Moving Services',
    description: 'Stress-free moving services that take the hassle out of relocating. We handle everything from packing and loading to transportation and unpacking.',
    imageUrl: 'https://example.com/moving-service.jpg',
    extraContent: 'Our professional movers are trained to handle your belongings with care, ensuring a smooth and efficient move to your new home.'
  }
];

const EventDetail = () => {
  return (
    <div className="event-detail-container">
      {eventDetailsData.map((event, index) => (
        <div key={event.id} className={`event-section ${index % 2 === 0 ? 'even' : 'odd'}`}>
          <div className="event-content">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p className="extra-content">{event.extraContent}</p>
          </div>
          <div className="event-image">
            <img src={event.imageUrl} alt={event.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventDetail;
