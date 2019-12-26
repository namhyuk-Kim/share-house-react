import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import client from "lib/client";
import qs from "querystring";

const CONTENTDETAIL = "CONTENTDETAIL";
const ADDCOMMENT = "ADDCOMMENT";

const PageDetail_API = pageid => {
  return client.get(`/rest/${pageid}`); // 콘텐츠 상세정보 조회
};

const AddComment_API = (articlepath, message, seq) => {
  if (seq === null || seq === undefined || seq === "") {
    return client.post(`/rest${articlepath}/comment?MESSAGE=${message}`); // 일반 댓글 작성
  } else {
    return client.post(
      `/rest${articlepath}/comment?MESSAGE=${message}&ORG_SEQ=${seq}`
    ); // 대댓글 작성시 사용...
  }
};

export const AddComment = createAction(ADDCOMMENT, AddComment_API);
export const ContentDetail = createAction(CONTENTDETAIL, PageDetail_API); // 콘텐츠 상세 보기

const initialState = {};

export default handleActions(
  {
    ...pender({
      type: CONTENTDETAIL,
      onSuccess: () => {
        return;
      }
    }),
    ...pender({
      type: ADDCOMMENT,
      onSuccess: () => {
        return;
      }
    })
  },
  initialState
);
