import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ links }) => {
  return (
    <nav className="mb-3">
      <h5 className="fs-6 fw-semibold text-uppercase">Navigation</h5>
      <ul className="list-unstyled">
        {links.map((link, index) => (
          <li key={index} className="my-3">
            <Link
              className="text-dark text-capitalize text-decoration-none"
              to={link}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
