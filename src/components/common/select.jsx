import React from "react";
import PropTypes from "prop-types";

const Select = ({
  name,
  label,
  onChange,
  value,
  items,
  valueProperty,
  nameProperty,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
        aria-label="Default select example"
      >
        {items.map((item) => (
          <option key={item[valueProperty]} value={item[valueProperty]}>
            {item[nameProperty]}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.defaultProps = {
  valueProperty: "_id",
  nameProperty: "name",
};

Select.propTypes = { items: PropTypes.array.isRequired };

export default Select;
