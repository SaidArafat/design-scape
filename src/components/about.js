import React from "react";
import SectionTitle from "./common/sectionTitle";

const About = () => {
  return (
    <section className="bg-light py-5 row">
      <header className="col-md-6 mb-4">
        <SectionTitle title="About DS Studio" />
      </header>
      <article className="col-md-6">
        <p>
          Interiart is an award-winning architecture and interior design
          practice based in NYC. We work internationally on projects of
          residential & commercial interior design that require a creative
          approach. Our talented and experienced designers leverage their
          knowledge and expertise to create unique and comfortable interiors for
          you.
        </p>
        <p>
          Our team knows that interior design can be stressful for the client
          and we do our best to make it as easy as possible. We listen to your
          needs, ideas, and inputs. And most importantly, we make it exciting
          and enjoyable for our clients.
        </p>
      </article>
    </section>
  );
};

export default About;
