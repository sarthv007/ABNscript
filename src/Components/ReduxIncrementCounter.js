import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CounterSelector from "../Selectors";

function ReduxIncrementCounter(props) {
  const { counter } = useSelector(CounterSelector);

  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch({ type: "INCREMENT", payload: 1 });
  };

  const incrementCountBy5 = () => {
    dispatch({ type: "INCREMENT", payload: 5 });
  };

  const decrementCount = () => {
    dispatch({ type: "DECREMENT", payload: 1 });
  };

  console.log("Components data using redux", counter);

  return (
    <>
      <h2>Counter: {counter}</h2>
      <br />
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={incrementCountBy5}>Increment By 5</button>
    </>
  );
}

export default ReduxIncrementCounter;
