import React, { useState } from "react";
import ButtonLight from "./common/buttonLight";
import abstractImage from "../images/lot-bushes-sand-dunes-namibia-desert-namibia.jpg";
import Modal from "./common/modal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="row py-5">
      <div className="col-md-6 py-5">
        <article className="d-flex flex-column justify-content-center align-items-start">
          <header>
            <h1>We create your space better</h1>
          </header>
          <p className="my-5">
            Our team creates comfortable spaces for our clients. We’ve been
            designing your everyday life and work through great ideas since
            1999.
          </p>
          <ButtonLight
            text="get started"
            type="button"
            onClick={() => setOpenModal(true)}
          />
          <Modal open={openModal} onClose={() => setOpenModal(false)} />
        </article>
      </div>
      <div className="col-md-6">
        <div>
          <img
            className=" h-75"
            src={abstractImage}
            alt="abstract-fantasy-landscape-background"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
