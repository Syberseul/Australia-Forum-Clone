import * as actionTypes from "./actionTypes";

export const userLogin = (userID) => ({
  type: actionTypes.USER_LOGIN,
  userID,
});

export const userLogOut = () => ({
  type: actionTypes.USER_LOGOUT,
});
