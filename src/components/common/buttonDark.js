import React from "react";

const ButtonDark = ({ text, type, onClick }) => {
  return (
    <button className="button button--dark" type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonDark;
