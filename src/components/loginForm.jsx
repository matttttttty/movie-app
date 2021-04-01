import React, { Component } from "react";
import Input from "./common/input";
import joi from "joi-browser";

class LoginForm extends Component {
  state = { account: { username: "", password: "" } };

  const schema = 

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
        type={type}
      />
    );
  };

  render() {
    return (
      <form action="">
        {this.renderInput("Username", "username")}
        {this.renderInput("Password", "password", "password")}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default LoginForm;
