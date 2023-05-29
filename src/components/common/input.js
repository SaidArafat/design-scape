import React from "react";

const Input = ({
  type = "text",
  name,
  label,
  value,
  onChange,
  error,
  focus = false,
}) => {
  const isTextArea = type === "textarea";

  return (
    <div className="my-4">
      <label className="form-label text-capitalize" htmlFor={name}>
        {label}
      </label>
      {isTextArea ? (
        <textarea
          className="form-control rounded-0"
          name={name}
          placeholder={`${label}..`}
          autoFocus={focus}
          id={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          className="form-control rounded-0"
          type={type}
          name={name}
          placeholder={`${label}..`}
          autoFocus={focus}
          id={name}
          value={value}
          onChange={onChange}
        />
      )}
      {error && <div className="alert text-danger">{error}</div>}
    </div>
  );
};

export default Input;
