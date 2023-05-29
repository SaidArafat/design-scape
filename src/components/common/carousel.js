import React, { useState } from "react";
import CarouselSlide from "./carouselSlide";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="carousel slide px-5">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <CarouselSlide slide={slide} />
          </div>
        ))}
      </div>
      <div className="carousel-buttons mt-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`button--carousel ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
