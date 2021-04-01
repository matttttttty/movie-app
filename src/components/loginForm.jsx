import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi";

class LoginForm extends Component {
  state = { account: { username: "", password: "" }, error: {} };

  schema = Joi.object({
    username: Joi.string().required().min(5).max(30).label("Username"),
    password: Joi.string().required().label("Password"),
  });

  validate() {
    const { account } = this.state;
    const { error } = this.schema.validate(account, { abortEarly: false });
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path] = item.message;
    return errors;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const error = this.validate();
    console.log(error);
    this.setState({ error: error || {} });
    console.log("submit");
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.target.name] = e.target.value;
    this.setState({ account });
  };

  renderInput = (label, name, type = "text") => {
    const { account } = this.state;
    return (
      <Input
        label={label}
        name={name}
        value={account[name]}
        onChange={this.handleChange}
        error={this.state.error}
        type={type}
      />
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("Username", "username")}
        {this.renderInput("Password", "password", "password")}

        <button
          type="submit"
          className="btn btn-primary"
          disabled={this.validate()}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default LoginForm;
