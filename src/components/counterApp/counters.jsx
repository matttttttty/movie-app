import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.counters.map((c) => (
          <Counter
            key={c.id}
            counter={c}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
