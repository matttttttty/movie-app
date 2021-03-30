import React, { Component } from "react";

class Counter extends Component {
  state = { value: 0 };

  handleIncrement = () => {
    let value = this.state.value;
    value++;
    this.setState({ value });
  };

  handleDecrement = () => {
    let value = this.state.value;
    value--;
    this.setState({ value });
  };

  handleDelete = () => {};

  render() {
    return (
      <div>
        <span className="badge bg-secondary  m-2">{this.state.value}</span>
        <button className="btn btn-primary m-2" onClick={this.handleIncrement}>
          +
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={this.handleDecrement}
          disabled={this.state.value > 0 ? false : true}
        >
          -
        </button>
        <button className="btn btn-danger m-2" onClick={this.handleDelete}>
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
