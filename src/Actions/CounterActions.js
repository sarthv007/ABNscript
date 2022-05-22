const incrementAction = (value) => {
  return {
    type: "INCREMENT",
    payload: value,
  };
};

export const decrementAction = (value) => {
  return { type: "DECREMENT", payload: value };
};

export const asyncDecrementAction = (value) => {
  return (dispatch, getState) => {
    //good place to do API call
    console.log("getState", getState());
    setTimeout(() => {
      // You can invoke sync or async actions with `dispatch`
      alert("Async thunk");
      dispatch(decrementAction(value));
    }, 5000);
  };
};

export default incrementAction;
