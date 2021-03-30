// import "./App.css";
// import Movie from "./components/movies";
import Counters from "./counters";
import NavBar from "./navBar";
import React, { Component } from "react";

class CountersApp extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = (counter) => {
    let counters = [...this.state.counters];
    counters = counters.filter((c) => c !== counter);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = [...this.state.counters];
    counters.forEach((c) => (c.value = 0));
    this.setState({ counters });
  };
  render() {
    return (
      <main className="container">
        <NavBar counters={this.state.counters} />
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </main>
    );
  }
}

export default CountersApp;
