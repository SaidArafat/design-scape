import React from "react";
import SectionTitle from "./common/sectionTitle";
import IconCardContainer from "./common/iconCardContainer";
import ButtonLight from "./common/buttonLight";

const Services = () => {
  const cards = [
    {
      icon: <i className="fa-regular fa-star"></i>,
      title: "Interior Design",
      description:
        "Interior design services offer a vast variety of solutions for our clients’ homes and offices.",
    },
    {
      icon: <i className="fa-regular fa-star"></i>,
      title: "Decorative Services",
      description:
        "Our professional decorators will be happy to help you change your house’s inner look.",
    },
    {
      icon: <i className="fa-regular fa-star"></i>,
      title: "Space Planning",
      description:
        "We create better interior experiences through our space planning services.",
    },
  ];

  return (
    <section className="py-5 text-center">
      <SectionTitle title="our services" />
      <IconCardContainer cards={cards} />
      <ButtonLight text="free consultation" type="button" />
    </section>
  );
};

export default Services;
