import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import client from "lib/client";
import qs from "querystring";

const LOGIN = "LOGIN"; // 로그인
const REGISTER = "REGISTER"; // 일반회원 회원가입
const NATION_CODES = "NATION_CODES"; // 국가코드
const SESSION_REFRESH = "SESSION_REFRESH"; // 토큰 세션 리프레시
const LOGOUT = "LOGOUT"; // 로그아웃
const MYINFO = "MYINFO"; // 나의 회원 정보
const CLOSEACCOUNT = "CLOSEACCOUNT"; // 회원 탈퇴
const FAVHOUSE = "FAVHOUSE"; // 관심하우스 등록
const VIEWDHOUSE = "VIEWDHOUSE";
const SEEFAVHOUSE = "SEEFAVHOUSE";

//-------------일반회원가입 json --------------//
const RegisterNormal_API = ({
  EMAIL,
  MEMBER_NAME,
  GENDER,
  BIRTHYEAR,
  NATION_CODE,
  NEW_PASSWORD,
  NOTICE_YN
}) => {
  return client.post(
    "/rest/join",
    qs.stringify({
      EMAIL,
      MEMBER_NAME,
      GENDER,
      BIRTHYEAR,
      NATION_CODE,
      NEW_PASSWORD,
      NOTICE_YN
    })
  );
};

// ------------------- 일반회원 로그인 : 입주회원X json
const LoginNomal_API = ({ userId, userPw }) => {
  return client.post(
    "/rest/login",
    qs.stringify({
      userId,
      userPw
    })
  );
};

// -------------------------- 세션 새로고침
const Session_RefreshAPI = ({ refresh_token }) => {
  return client.post(`/rest/token/refresh?REFRESH_TOKEN=${refresh_token}`);
};

//--------------국가코드 목록

const Nation_Codes_API = () => {
  return client.get("/rest/nation");
};

//--------------로그아웃 ( 회원전체 공통 )

const Logout_API = () => {
  return client.post("/rest/logout");
};

//-------------- 나의 회원정보 조회
const Myinfo_API = () => {
  return client.get("/rest/my/info");
};

//-------------- 일반회원 회원탈퇴
const CloseAccount_API = () => {
  return client.post("/rest/my/leave");
};

const AddFavHouse_API = houseid => {
  return client.post(`/rest/my/favorite/house${houseid}`);
};

const ViewdHouse_API = house => {
  return client.get(`/rest/recent/house?house=${encodeURIComponent(house)}`); // 최근 본 하우스
};

const SeeFavHouse_API = () => {
  return client.get("/rest/my/favorite/house");
};

export const RegisterNormal = createAction(REGISTER, RegisterNormal_API); //일반회원가입
export const LoginNormal = createAction(LOGIN, LoginNomal_API); // 일반유저 로그인
export const Nation_Codes = createAction(NATION_CODES, Nation_Codes_API); // 국가코드목록
export const Session_Refresh = createAction(
  SESSION_REFRESH,
  Session_RefreshAPI
); // 세션 리프레쉬
export const Logout = createAction(LOGOUT, Logout_API); // 로그아웃
export const Myinfo = createAction(MYINFO, Myinfo_API); // 나의 회원정보 조회
export const CloseAccount = createAction(CLOSEACCOUNT, CloseAccount_API); // 일반회원 회원탈퇴
export const AddFavHouse = createAction(FAVHOUSE, AddFavHouse_API); // 관심하우스 추가
export const ViewdHouse = createAction(VIEWDHOUSE, ViewdHouse_API); // 최근 본 하우스
export const SeeFavHouse = createAction(SEEFAVHOUSE, SeeFavHouse_API); // 나의 관심목록 하우스

const initialState = {
  auth: {
    user: {
      isLogined: false,
      member_name: ""
    }
  }
};

export default handleActions(
  {
    ...pender({
      // 회원가입 페이지 국가코드 리턴
      type: NATION_CODES,
      onSuccess: () => {
        return;
      }
    }),
    ...pender({
      type: REGISTER, // 회원가입
      onSuccess: () => {
        return;
      }
    }),
    ...pender({
      type: LOGIN, // 유저 로그인
      onSuccess: (state, action) => {
        const res = action.payload;

        client.defaults.headers.common["x-access-token"] =
          res["headers"]["x-access-tokken"];
        client.defaults.headers.common["x-refresh-token"] =
          res["headers"]["x-refresh-token"];
        return;
      }
    }),
    ...pender({
      type: SESSION_REFRESH,
      onPending: state => {
        // 리프레시 시도시 엑세스 토큰 지워줌
        let nextState = state;
        nextState["auth"]["user"]["isLogined"] = false; // 로그인 true false -> false 로 변경

        delete client.defaults.headers.common["x-access-id"];
        delete client.defaults.headers.common["x-access-token"];

        return nextState;
      },
      onSuccess: (state, action) => {
        // 리프레시 성공시
        const ACCESS_TOKEN = action.payload.data.result.data.ACCESS_TOKEN;

        let nextState = state;
        const NowEcode = action["payload"]["data"]["result"]["resCode"];
        const NowEmsg = action["payload"]["data"]["result"]["resMessage"];
        if (NowEcode !== "0000") {
          nextState["auth"]["user"]["isLogined"] = false; // 만약 오류가 있다면 .. -> 로그인 상태 -> false
        } else {
          nextState["auth"]["user"]["isLogined"] = true; // 오류가 없다면 -> 로그안상테 -> true
          client.defaults.headers.common["x-access-token"] = ACCESS_TOKEN; // 엑세스 토큰 지정
        }

        return nextState;
      }
    }),
    ...pender({
      // 로그아웃 ( 회원전체 공통 )
      type: LOGOUT,
      onSuccess: () => {
        return;
      }
    }),
    ...pender({
      type: MYINFO, // 나의 회원정보 조회
      onSuccess: (state, action) => {
        const member_data =
          action["payload"]["data"]["result"]["data"]["member"];
        let member_info = state;
        member_info["auth"]["user"]["member_name"] = member_data["MEMBER_NAME"];

        return member_info;
      }
    }),
    ...pender({
      type: CLOSEACCOUNT, // 회원탈퇴
      onSuccess: () => {
        return;
      }
    }),
    ...pender({
      type: FAVHOUSE, // 관심하우스 추가
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
      type: SEEFAVHOUSE,
      onSuccess: () => {
        return;
      }
    })
  },
  initialState
);
