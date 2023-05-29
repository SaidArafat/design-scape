import React from "react";
import PricingCard from "./pricingCard";

const PricingCardContainer = ({ cards }) => {
  return (
    <section className="row">
      {cards.map((card, index) => (
        <div className="col-md-3 col-sm-6 mx-auto" key={index}>
          <PricingCard
            type={card.type}
            price={card.price}
            description={card.description}
          />
        </div>
      ))}
    </section>
  );
};

export default PricingCardContainer;
