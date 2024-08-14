import React from 'react';
import '../Assets/css/Card.css';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="view-button">View</button>
      </div>
    </div>
  );
};

export default Card;

