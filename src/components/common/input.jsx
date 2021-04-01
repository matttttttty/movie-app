import React from "react";

const Input = ({ label, name, value, onChange, error, type }) => {
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
      {error[name] && (
        <label className="badge bg-warning text-dark">{error[name]}</label>
      )}
    </div>
  );
};

export default Input;
