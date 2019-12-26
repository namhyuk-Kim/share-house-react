import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import client from "lib/client";
import qs from "querystring";

const PWCHANGE = "PWCHANGE";

const PasswordChange_API = (oldPassword, newPassword) => {
  return client.post(
    `/rest/password/change?oldPassword=${oldPassword}&newPassword=${newPassword}`
  );
};

export const PasswordChange = createAction(PWCHANGE, PasswordChange_API);

const initialState = {};

export default handleActions(
  {
    ...pender({
      type: PWCHANGE,
      onSuccess: () => {
        return;
      }
    })
  },
  initialState
);
