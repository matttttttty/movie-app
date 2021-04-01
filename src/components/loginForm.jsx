import React from "react";
import Joi from "joi";
import Form from "./common/form";

class LoginForm extends Form {
  state = { data: { username: "", password: "" }, error: {} };

  schema = Joi.object({
    username: Joi.string().required().min(5).max(30).label("Username"),
    password: Joi.string().required().label("Password"),
  });

  doSubmit() {
    console.log("submit");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("Username", "username")}
        {this.renderInput("Password", "password", "password")}
        {this.renderButton("Login")}
      </form>
    );
  }
}

export default LoginForm;
