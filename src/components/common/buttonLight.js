import React from "react";

const ButtonLight = ({ text, type, onClick }) => {
  return (
    <button
      className="button button--light align-self-auto flex-shrink-0"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonLight;
