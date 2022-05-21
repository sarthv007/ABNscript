import React, { Component } from "react";
import { connect } from "react-redux";

class ReduxCounterApp extends Component {
  incrementCount = () => {
    this.props.incrementCounter(1);
  };

  incrementCountBy5 = () => {
    this.props.incrementCounter(5);
  };

  decrementCount = () => {
    this.props.decrementCounter(1);
  };

  render() {
    console.log("Class Components Props", this.props);
    return (
      <>
        <h2>Counter: {this.props.counter}</h2>
        <br />
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
        <button onClick={this.incrementCountBy5}>Increment By 5</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { counter: state.counter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: (value) =>
      dispatch({ type: "INCREMENT", payload: value }),
    decrementCounter: (value) =>
      dispatch({ type: "DECREMENT", payload: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounterApp);
