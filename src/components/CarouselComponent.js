import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
      >
        <div>
          <img src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Household Service 1" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Household Service 2" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Household Service 3" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Household Service 4" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
