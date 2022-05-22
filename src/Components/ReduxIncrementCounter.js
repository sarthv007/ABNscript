import React from "react";
import { useSelector, useDispatch } from "react-redux";
import incrementAction, {
  asyncDecrementAction,
  decrementAction,
} from "../Actions/CounterActions";
import CounterSelector from "../Selectors";

function ReduxIncrementCounter(props) {
  const { counter } = useSelector(CounterSelector);

  const dispatch = useDispatch();

  // const incrementCount = () => {
  //   dispatch(incrementAction(1));
  // };

  // const incrementCountBy5 = () => {
  //   dispatch(incrementAction(5));
  // };

  // const decrementCount = () => {
  //   dispatch(decrementAction(1));
  // };

  console.log("Functional Components data using redux", counter);

  return (
    <>
      <h2>Counter: {counter}</h2>
      <br />
      <button onClick={() => dispatch(incrementAction(1))}>Increment</button>
      <button onClick={() => dispatch(asyncDecrementAction(1))}>
        Decrement
      </button>
      <button onClick={() => dispatch(incrementAction(5))}>
        Increment By 5
      </button>
    </>
  );
}

export default ReduxIncrementCounter;
