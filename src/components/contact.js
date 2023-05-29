import React, { useState } from "react";
import ButtonLight from "./common/buttonLight";
import Modal from "./common/modal";

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className="py-5 d-flex flex-column justify-content-between flex-md-row align-items-center">
      <p className="fs-3">Do you have any question?</p>
      <ButtonLight
        text="order a call"
        type="button"
        onClick={() => setOpenModal(true)}
      />
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </section>
  );
};

export default Contact;
