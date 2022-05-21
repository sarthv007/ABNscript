let initialState = {
  counter: 0,
  users: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + action.payload,
      };
    case "DECREMENT":
      return {
        counter: state.counter - action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
