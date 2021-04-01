import Form from "./common/form";
import Joi from "joi";

class RegisterForm extends Form {
  state = { data: { email: "", password: "", name: "" }, error: {} };

  schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    password: Joi.string().required().label("Password"),
    name: Joi.string().required().min(5).max(30).label("Email"),
  });
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("Email", "email")}
        {this.renderInput("Password", "password", "password")}
        {this.renderInput("Name", "name")}
        {this.renderButton("Register")}
      </form>
    );
  }
}

export default RegisterForm;
