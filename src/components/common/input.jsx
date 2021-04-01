import React from "react";

const Input = ({ label, name, value, onChange, type }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
        id={name}
        aria-describedby="emailHelp"
      />
    </div>
  );
};

export default Input;
