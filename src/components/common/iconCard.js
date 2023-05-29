import React from "react";

const IconCard = ({ icon, title, description }) => {
  return (
    <div className="icon-card">
      <div className="icon">{icon}</div>
      <h4 className="title my-3 fs-5 text-uppercase">{title}</h4>
      <p className="description">{description}</p>
    </div>
  );
};

export default IconCard;
