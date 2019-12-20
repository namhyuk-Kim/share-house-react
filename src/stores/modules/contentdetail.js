import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import client from "lib/client";
import qs from "querystring";

const CONTENTDETAIL = "CONTENTDETAIL";

const PageDetail_API = pageid => {
  return client.get(`/rest/${pageid}`); // 콘텐츠 상세정보 조회
};

export const ContentDetail = createAction(CONTENTDETAIL, PageDetail_API); // 콘텐츠 상세 보기

const initialState = {};

export default handleActions(
  {
    ...pender({
      type: CONTENTDETAIL,
      onSuccess: () => {
        return;
      }
    })
  },
  initialState
);
