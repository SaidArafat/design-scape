import React from "react";
import ButtonDark from "./buttonDark";

const PricingCard = ({ type, price, description }) => {
  return (
    <div className="pricing--card mt-4">
      <h3 className="card-title text-capitalize fs-5">{type}</h3>
      <h4 className="card-price">
        <span className="d-block fs-3 my-4">${price}</span>
        per month
      </h4>
      <p className="card-description text-capitalize">{description}</p>
      <ButtonDark
        text="buy now"
        type="button"
        onClick={() => {
          /* Handle button click */
          console.log("Buy Now");
        }}
      />
    </div>
  );
};

export default PricingCard;
