import { combineReducers } from "redux";
import { penderReducer as pender } from "redux-pender";

import user from "./user";
//-----------------------리덕스 기본 설정----------------------//
export default combineReducers({
  user,
  pender
});
