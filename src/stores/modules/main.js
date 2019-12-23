import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import client from "lib/client";
import qs from "querystring";

const TODAYHOUSE = "TODAYHOUSE";
const VIEWDHOUSE = "VIEWDHOUSE";
const FAVHOUSE = "FAVHOUSE"; // 관심하우스 등록
const SEEFAVHOUSE = "SEEFAVHOUSE";

const TodayHouse_API = () => {
  return client.get("/rest/today/house"); // 메인페이지 오늘의 인기 하우스 조회 api
};

const ViewdHouse_API = house => {
  return client.get(`/rest/recent/house?house=${encodeURIComponent(house)}`); // 최근 본 하우스
};

const AddFavHouse_API = houseid => {
  return client.post(`/rest/my/favorite/house/${houseid}`);
};

const SeeFavHouse_API = () => {
  return client.get("/rest/my/favorite/house");
};

export const AddFavHouse = createAction(FAVHOUSE, AddFavHouse_API); // 관심하우스 추가
export const TodayHouse = createAction(TODAYHOUSE, TodayHouse_API); // 오늘의 인기 하우스
export const ViewdHouse = createAction(VIEWDHOUSE, ViewdHouse_API); // 최근 본 하우스
export const SeeFavHouse = createAction(SEEFAVHOUSE, SeeFavHouse_API); // 나의 관심목록 하우스

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
    }),
    ...pender({
      type: FAVHOUSE,
      onSuccess: () => {
        return;
      }
    }),
    ...pender({
      type: SEEFAVHOUSE,
      onSuccess: () => {
        return;
      }
    })
  },
  initialState
);
