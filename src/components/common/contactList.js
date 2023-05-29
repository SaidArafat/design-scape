import React from "react";
import { Link } from "react-router-dom";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h5 className="fs-6 fw-semibold text-uppercase">Contacts</h5>
      <ul className="list-unstyled">
        {contacts.map((contact, index) => (
          <li className="my-1 text-capitalize" key={index}>
            {contact.includes("@") ? (
              <Link
                className="text-lowercase text-decoration-none"
                to={`https://mail.google.com/mail/?view=cm&to=${contact}`}
                target="_blank"
              >
                {contact}
              </Link>
            ) : contact.includes("+") ? (
              <Link
                className="text-lowercase text-decoration-none"
                to={`tel:${contact}`}
                target="_blank"
              >
                {contact}
              </Link>
            ) : (
              contact
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
