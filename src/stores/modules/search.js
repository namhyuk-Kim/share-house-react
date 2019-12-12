import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import client from "lib/client";
import qs from "querystring";

const SEARCHELP = "SERCHELP";

// -------- 검색 추천 키워드
const SearchHelp_API = search_keyword => {
  return client.get(`/rest/search/word?SEARCH_TEXT=${search_keyword}`);
};

export const SearchHelp = createAction(SEARCHELP, SearchHelp_API); // 검색 추천 키워드

const initialState = {};

export default handleActions(
  {
    ...pender({
      type: SEARCHELP,
      onSuccess: () => {
        return;
      }
    })
  },
  initialState
);
