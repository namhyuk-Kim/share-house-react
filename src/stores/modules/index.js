import { combineReducers } from "redux";
import { penderReducer as pender } from "redux-pender";

import user from "./user";

export default combineReducers({
  user,
  pender
});
