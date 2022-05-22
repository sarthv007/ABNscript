export const userSelector = (state) => {
  console.log("state", state);
  return state.usersReducer;
};
