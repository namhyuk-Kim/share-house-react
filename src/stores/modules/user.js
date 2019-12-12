import { createAction, handleActions } from "redux-actions";
import { pender } from "redux-pender";
import client from "lib/client";
import qs from "querystring";

// const LOGIN = "LOGIN"; 회원가입 이후 로그인 추가 하면 주석풀음 ~
const REGISTER = "REGISTER";
const NATION_CODES = "NATION_CODES";

//-------------일반회원가입--------------//
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

//--------------국가코드 목록

const Nation_Codes_API = () => {
  return client.get("/rest/nation");
};

export const RegisterNormal = createAction(REGISTER, RegisterNormal_API); //일반회원가입
export const Nation_Codes = createAction(NATION_CODES, Nation_Codes_API); // 국가코드목록

// const LOGIN_API = ({ userId, userPw }) => {
//   client.post("/rest/login", { userId, userPw });
// };

// export const loginNormal = createAction(LOGIN, LOGIN_API);

const initialState = {};

export default handleActions(
  {
    ...pender({
      type: NATION_CODES,
      onSuccess: () => {
        return;
      }
    }),
    ...pender({
      type: REGISTER,
      onSuccess: () => {
        return;
      }
    })
  },
  initialState
);
