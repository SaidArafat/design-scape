import React from "react";

const CarouselSlide = ({ slide }) => {
  return (
    <div className="bg-light py-5 pb-3 position-relative mx-2 col-md-8 mx-auto">
      <div className="carousel-header ms-sm-3 m-0">
        <h5 className="text-capitalize mb-0 fs-6">{slide.name}</h5>
        <p className="text-capitalize opacity-75 mb-0 slide__tagline">
          {slide.position}
        </p>
      </div>
      <img
        className="slide__image img-thumbnail"
        src={slide.imageUrl}
        alt={slide.caption}
      />
      <div className="carousel-body text-start p-5 pb-2 border-top border-white border-2">
        <p>{slide.caption}</p>
      </div>
    </div>
  );
};

export default CarouselSlide;
