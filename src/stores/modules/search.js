import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import client from "lib/client";
import qs from "querystring";

const SEARCHELP = "SERCHELP";

const SEARCH_LIST = "SEARCH_LIST";

// ---------------------------------------------------------------

// -------- 검색 추천 키워드
const SearchHelp_API = search_keyword => {
  return client.get(`/rest/search/word?SEARCH_TEXT=${search_keyword}`);
};

// -------- 하우스 검색 리스트
const SearchList_API = ({
  page,
  rows,
  NORTH,
  SOUTH,
  EAST,
  WEST,
  SHAREHOUSE,
  HOUSE2030,
  PREMIUM_HOUSE
}) => {
  return client.get(
    `rest/house?${qs.stringify({
      page,
      rows,
      NORTH,
      SOUTH,
      EAST,
      WEST,
      SHAREHOUSE,
      HOUSE2030,
      PREMIUM_HOUSE
    })}`
  );
};

// ---------------------------------------------------------------

export const SearchHelp = createAction(SEARCHELP, SearchHelp_API); // 검색 추천 키워드
export const SearchList = createAction(SEARCH_LIST, SearchList_API); // 하우스 검색 리스트

const initialState = {};

export default handleActions(
  {
    ...pender({
      type: SEARCHELP,
      onSuccess: () => {
        return;
      }
    }),
    ...pender({
      type: SEARCH_LIST,
      onSuccess: () => {
        return;
      }
    })
  },
  initialState
);
