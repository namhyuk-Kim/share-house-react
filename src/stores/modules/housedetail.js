import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import client from "lib/client";
import qs from "querystring";

const HOUSEDETAIL = "HOUSEDETAIL";

const HouseDetail_API = houseid => {
  return client.get("/rest" + houseid); // 해당하우스의 상세정보 조회
};

export const HouseDetail = createAction(HOUSEDETAIL, HouseDetail_API); // 하우스 상세 정보 조회

const initialState = {};

export default handleActions(
  {
    ...pender({
      type: HOUSEDETAIL,
      onSuccess: () => {
        return;
      }
    })
  },
  initialState
);
