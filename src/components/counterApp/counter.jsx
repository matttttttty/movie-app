import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onIncrement, onDecrement, onDelete } = this.props;
    return (
      <div>
        <span className="badge bg-secondary  m-2">{counter.value}</span>
        <button
          className="btn btn-primary m-2"
          onClick={() => onIncrement(counter)}
        >
          +
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => onDecrement(counter)}
          disabled={counter.value > 0 ? false : true}
        >
          -
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => onDelete(counter)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
