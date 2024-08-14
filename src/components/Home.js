import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/Home.css';
import CarouselComponent from '../components/CarouselComponent';

const Home = () => {
  const navigate = useNavigate();

  const handleFeedbackClick = () => {
    navigate('/contact');
  };

  return (
    <div className="home">
      <div className="hero-content">
        <section className="carousel-section">
          <CarouselComponent />
        </section>
        <a href="/services" className="cta-button">Explore Services</a>
      </div>

      <section className="features-section">
        <h2>Our Household Services</h2>
        <div className="features-container">
          <div className="feature card">
            <img src="https://images.pexels.com/photos/4108711/pexels-photo-4108711.jpeg" alt="Cleaning Services" />
            <i className="fas fa-broom"></i>
            <h3>Cleaning Services</h3>
            <p>Professional cleaning services to keep your home spotless and fresh.</p>
          </div>
          <div className="feature card">
            <img src="https://media.istockphoto.com/id/1339613829/photo/plumber-at-work-in-a-bathroom-plumbing-repair-service-assemble-and-install-concept.jpg?s=2048x2048&w=is&k=20&c=VtlTqDmKRNb63hSsulMTZnxpH9fkMitsqapsMfkEAkw=" alt="Plumbing" />
            <i className="fas fa-wrench"></i>
            <h3>Plumbing</h3>
            <p>Expert plumbing services to fix leaks, clogs, and more.</p>
          </div>
          <div className="feature card">
            <img src="https://images.pexels.com/photos/401107/pexels-photo-401107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Electrical Services" />
            <i className="fas fa-bolt"></i>
            <h3>Electrical Services</h3>
            <p>Reliable electrical services to ensure your home's safety and efficiency.</p>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <h2>Our Work Gallery</h2>
        <div className="gallery-container">
          <div className="gallery-item card">
            <img src="https://images.pexels.com/photos/48889/cleaning-washing-cleanup-the-ilo-48889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Floor Cleaning" />
          </div>
          <div className="gallery-item card">
            <img src="https://images.pexels.com/photos/298696/pexels-photo-298696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gardening" />
          </div>
          <div className="gallery-item card">
            <img src="https://images.pexels.com/photos/3018073/pexels-photo-3018073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Painting" />
          </div>
          <div className="gallery-item card">
            <img src="https://images.pexels.com/photos/3837464/pexels-photo-3837464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Roofing" />
          </div>
          <div className="gallery-item card">
            <img src="https://images.pexels.com/photos/3802921/pexels-photo-3802921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="HVAC Services" />
          </div>
          <div className="gallery-item card">
            <img src="https://media.istockphoto.com/id/1560609530/photo/indian-girl-preparing-food-magnificent-young-woman-preparing-delicious-home-cooked.jpg?s=2048x2048&w=is&k=20&c=Jme0cLoBf7LM9FaSyiEJnEVB_rjLGvQ72rX0bEU8P38=" alt="Moving Services" />
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>Customer Testimonials</h2>
        <div className="testimonials-container">
          <div className="testimonial card">
            <p>"The cleaning team did an amazing job! My house has never looked better."</p>
            <h4>- Sarah W.</h4>
          </div>
          <div className="testimonial card">
            <p>"Quick and efficient plumbing service. Highly recommend!"</p>
            <h4>- Michael B.</h4>
          </div>
          <div className="testimonial card">
            <p>"The electricians were professional and solved all our issues quickly."</p>
            <h4>- Emily J.</h4>
          </div>
        </div>
      </section>

      <section className="feedback-section">
        <h2>We Value Your Feedback</h2>
        <div className="feedback-container">
          <div className="feedback-card">
            <div className="feedback-content">
              <p>"Excellent service! The team was punctual and did a fantastic job."</p>
              <h4>- Chris D.</h4>
            </div>
            <div className="feedback-rating">
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
            </div>
          </div>
          <div className="feedback-card">
            <div className="feedback-content">
              <p>"They took care of everything, from cleaning to repairs. Truly a one-stop service!"</p>
              <h4>- Lisa M.</h4>
            </div>
            <div className="feedback-rating">
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">☆</span>
            </div>
          </div>
          <div className="feedback-card">
            <div className="feedback-content">
              <p>"Great experience! The team exceeded our expectations in every way."</p>
              <h4>- Jamie K.</h4>
            </div>
            <div className="feedback-rating">
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
              <span className="rating-star">★</span>
            </div>
          </div>
        </div>
        <div className="feedback-action">
          <button className="give-feedback-button" onClick={handleFeedbackClick}>Give Your Feedback</button>
        </div>
      </section>

      <section className="cta-section">
        <h2>Need Help with Your Home?</h2>
        <p>Contact us today to book the best household services in town.</p>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </section>
    </div>
  );
};

export default Home;
