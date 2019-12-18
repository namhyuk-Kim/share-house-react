import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import client from "lib/client";
import qs from "querystring";

const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const NATION_CODES = "NATION_CODES";
const SESSION_REFRESH = "SESSION_REFRESH";
const LOGOUT = "LOGOUT";
const MYINFO = "MYINFO";

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
  console.log(refresh_token);
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
  return client.get(`/rest/my/info`);
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
        console.log(res);
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
        let nextState = state;
        nextState["auth"]["user"]["isLogined"] = false;

        delete client.defaults.headers.common["x-access-id"];
        delete client.defaults.headers.common["x-access-token"];

        return nextState;
      },
      onSuccess: (state, action) => {
        const ACCESS_TOKEN = action.payload.data.result.data.ACCESS_TOKEN;

        console.log(ACCESS_TOKEN);

        let nextState = state;
        const NowEcode = action["payload"]["data"]["result"]["resCode"];
        const NowEmsg = action["payload"]["data"]["result"]["resMessage"];
        if (NowEcode !== "0000") {
          console.log(ACCESS_TOKEN);
          console.log(NowEcode);
          console.log(NowEmsg);
          nextState["auth"]["user"]["isLogined"] = false;
        } else {
          nextState["auth"]["user"]["isLogined"] = true;
          client.defaults.headers.common["x-access-token"] = ACCESS_TOKEN;
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
    })
  },
  initialState
);
