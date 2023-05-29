import React from "react";
import Header from "./header";
import About from "./about";
import Services from "./services";
import Pricing from "./pricing";
import Testimonials from "./testimonials";
import Contact from "./contact";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
