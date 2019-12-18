import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import client from "lib/client";
import qs from "querystring";

const TODAYHOUSE = "TODAYHOUSE";

const TodayHouse_API = () => {
  return client.get("/rest/today/house");
};

export const TodayHouse = createAction(TODAYHOUSE, TodayHouse_API); // 오늘의 인기 하우스

const initialState = {};

export default handleActions(
  {
    ...pender({
      type: TODAYHOUSE,
      onSuccess: () => {
        return;
      }
    })
  },
  initialState
);
