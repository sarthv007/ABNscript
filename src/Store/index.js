import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "../Reducers";

const store = createStore(rootReducer);
export default store;
