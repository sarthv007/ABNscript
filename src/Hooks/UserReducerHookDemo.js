import React, { useReducer } from "react";

const CounterReducer = (state, action) => {
  console.log("state", state);
  console.log("action", action);

  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
      detail: action.payload.detail,
      language: action.payload.language,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      ...state,
      count: state.count - 1,
    };
  }
  return state;
};

function UserReducerHookDemo() {
  const initialState = {
    count: 0,
    detail: "counter application",
    language: "javascript",
  };
  const [state, dispatch] = useReducer(CounterReducer, initialState);

  const handleIncrement = () => {
    dispatch({
      type: "INCREMENT",
      payload: {
        detail: "react application",
        language: "java",
      },
    });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <>
      <h2>Counter: {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      {state.language} | {state.detail}
    </>
  );
}

export default UserReducerHookDemo;
