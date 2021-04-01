import React from "react";
import PropTypes from "prop-types";

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

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Input;
