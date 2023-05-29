import React from "react";
import { NavLink, useLocation, useMatch } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const match = useMatch("/:validRoute");
  const hasRoutes = location.pathname.includes("/") && match !== null;

  return (
    <nav className={`navbar navbar-expand-lg ${hasRoutes ? "mb-5" : ""}`}>
      <div className="container-fluid p-0">
        <NavLink
          className="navbar-brand me-5 fw-bold fs-4 text-uppercase"
          to="/"
        >
          DS
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="/testimonials">
                Testimonials
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-4">
              <NavLink className="nav-link" to="tel:(+20)01069992895">
                (+20)01069992895
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={`https://mail.google.com/mail/?view=cm&to=s.arafat.selmi@gmail.com
                `}
                target="_blank"
              >
                s.arafat.selmi@gmail.com
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
