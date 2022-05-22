import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "../Constant";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: null,
      };

    case FETCH_USERS_FAILURE:
      console.log("From FETCH_USERS_FAILURE", action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
        user: [],
      };
    default:
      return state;
  }
};

export default usersReducer;
