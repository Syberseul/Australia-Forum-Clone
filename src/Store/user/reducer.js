import * as actionTypes from "./actionTypes";

const defaultState = {
  userLoggedIn: false,
  userID: "",
};

const userLogIn = (state, action) => {
  if (action.userID !== "") {
    return {
      userLoggedIn: true,
      userID: action.userID,
    };
  }
  return state;
};

const userLogOut = (state, action) => {
  return {
    userLoggedInL: false,
    userID: "",
  };
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return userLogIn(state, action);
    case actionTypes.USER_LOGOUT:
      return userLogOut(state, action);
    default:
      return state;
  }
};
