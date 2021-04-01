import React, { Component } from "react";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = { data: {}, error: {} };

  validate() {
    const { data } = this.state;
    const { error } = this.schema.validate(data, { abortEarly: false });
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path] = item.message;
    return errors;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const error = this.validate();
    this.setState({ error: error || {} });
    this.doSubmit();
  };

  doSubmit() {
    console.log("submit");
  }

  handleChange = (e) => {
    const data = { ...this.state.data };
    data[e.target.name] = e.target.value;
    this.setState({ data });
  };

  renderInput = (label, name, type = "text") => {
    const { data } = this.state;
    return (
      <Input
        label={label}
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        error={this.state.error}
        type={type}
      />
    );
  };

  renderSelect(name, label, items) {
    const { data } = this.state;
    return (
      <Select
        name={name}
        label={label}
        onChange={this.handleChange}
        value={data[name]}
        items={items}
      />
    );
  }

  renderButton = (label) => {
    return (
      <button
        type="submit"
        className="btn btn-primary"
        disabled={this.validate()}
      >
        {label}
      </button>
    );
  };
}

export default Form;
