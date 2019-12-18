import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import client from "lib/client";
import qs from "querystring";

const ARTICLECONTENT = "ARTICLECONTENT";

const ArticleContent_API = () => {
  // 청년주거백과 콘텐츠 검색 결과
  return client.get("/rest/article");
};

export const ArticleContent = createAction(ARTICLECONTENT, ArticleContent_API); // 청년주거백과 콘텐츠 검색 결과

const initialState = {};

export default handleActions(
  {
    ...pender({
      type: ARTICLECONTENT,
      onSuccess: () => {
        return;
      }
    })
  },
  initialState
);
