import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "../Constant";

const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUserSuccess = (usersData) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: usersData,
  };
};

const fetchUserFail = (error) => {
  console.log("error", error.message);
  return {
    type: FETCH_USERS_FAILURE,
    payload: error.message,
  };
};

//Thunk or async Action creator
export const fetchUsers = () => {
  return (dispatch, getState) => {
    //API Call code goes here
    dispatch(fetchUserRequest());
    try {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((result) => {
          console.log("AFTER API CALL", result.data);
          dispatch(fetchUserSuccess(result.data));
        })
        .catch((error) => {
          console.log("From cache", error);
          dispatch(fetchUserFail(error));
        });
    } catch (error) {
      dispatch(fetchUserFail(error));
    }
  };
};
