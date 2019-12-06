import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import client from "lib/client";
import qs from "querystring";

const LOGIN = "LOGIN";

const LOGIN_API = ({ userId, userPw }) => {
  client.post("/rest/login", { userId, userPw });
};

export const loginNormal = createAction(LOGIN, LOGIN_API);

const initialState = {
  user: {}
};
