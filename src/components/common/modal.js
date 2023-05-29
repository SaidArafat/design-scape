import React, { useState } from "react";
import Input from "../common/input";
import ButtonLight from "./buttonLight";
import { addOrder } from "./../../store/slices/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import StatusIndicator from "./statusIndicator";
import Joi from "joi";

const Modal = ({ open, onClose }) => {
  const { isLoading, error } = useSelector((state) => state.orders);

  const [order, setOrder] = useState({
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  if (!open) return null;

  const orderSchema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    message: Joi.string().min(8).required().label("Message"),
  });

  const validateOrder = (order) => {
    const options = { abortEarly: false };
    const { error } = orderSchema.validate(order, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const validateProperty = (name, value) => {
    const schema = Joi.object({
      [name]: orderSchema.extract(name),
    });

    const { error } = schema.validate({ [name]: value });
    return error ? error.details[0].message : null;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const errorMessage = validateProperty(name, value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));

    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateOrder(order);
    setErrors(errors || {});
    if (!errors) {
      dispatch(addOrder(order));
      // .unwrap()
      // .then(() => onClose())
      // .catch((error) =>
      //   window.alert(
      //     `${error} ,The server is down. please try later to reconnect.`
      //   )
      // );
    }
  };

  return (
    <StatusIndicator isLoading={isLoading} error={error}>
      <div onClick={onClose} className="modal-overlay">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modal-container p-4 pb-5 bg-white"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button className="btn-close" onClick={onClose} />
          <form onSubmit={handleSubmit}>
            <Input
              label="Email"
              name="email"
              type="email"
              focus={true}
              onChange={handleChange}
              error={errors.email}
            />
            <Input
              label="Message"
              name="message"
              type="textarea"
              onChange={handleChange}
              error={errors.message}
            />

            <ButtonLight text="Send" type="submit" />
          </form>
        </div>
      </div>
    </StatusIndicator>
  );
};

export default Modal;
