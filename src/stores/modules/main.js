import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import client from "lib/client";
import qs from "querystring";

const TODAYHOUSE = "TODAYHOUSE";
const VIEWDHOUSE = "VIEWDHOUSE";

const TodayHouse_API = () => {
  return client.get("/rest/today/house"); // 메인페이지 오늘의 인기 하우스 조회 api
};

const ViewdHouse_API = house => {
  return client.get(`/rest/recent/house?house=${encodeURIComponent(house)}`); // 메인페이지 오늘의 인기 하우스 조회 api
};

export const TodayHouse = createAction(TODAYHOUSE, TodayHouse_API); // 오늘의 인기 하우스
export const ViewdHouse = createAction(VIEWDHOUSE, ViewdHouse_API); // 최근 본 하우스

const initialState = {};

export default handleActions(
  {
    ...pender({
      type: TODAYHOUSE,
      onSuccess: () => {
        return;
      }
    }),
    ...pender({
      type: VIEWDHOUSE,
      onSuccess: () => {
        return;
      }
    })
  },
  initialState
);
