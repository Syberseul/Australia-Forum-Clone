import { combineReducers } from "redux";
import { reducer as accountReducer } from "./user";

const reducer = combineReducers({
  account: accountReducer,
});

export default reducer;
