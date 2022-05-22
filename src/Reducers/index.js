import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import usersReducer from "./usersReducer";

export const rootReducer = combineReducers({
  counterReducer: counterReducer,
  usersReducer: usersReducer,
});
