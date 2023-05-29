import React from "react";
import Navigation from "./common/navigation";
import ContactList from "./common/contactList";
import FooterText from "./common/footerText";

const Footer = () => {
  const links = ["about", "services", "pricing", "testimonials"];

  const contacts = [
    "Address",
    "3517 W. Gray St. Utica, Pennsylvania 57867",
    "Email",
    "s.arafat@gmail.com",
    "Phone",
    "(+20)01069992895",
  ];

  return (
    <footer className="pt-5 px-2 bg-light d-flex flex-column justify-content-between flex-md-row text-center text-md-start">
      <FooterText />
      <Navigation links={links} />
      <ContactList contacts={contacts} />
    </footer>
  );
};

export default Footer;
