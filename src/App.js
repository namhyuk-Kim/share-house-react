import React from "react";
import MainTemplate from "./components/base/MainTemplate/MainTemplate";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as UserActions from "stores/modules/user";
import { withCookies } from "react-cookie";
import { withRouter } from "react-router-dom";

import { decode } from "lib/encrypt";

import Main from "containers/common/main/MainContainer";
import Register from "containers/user/register/UserRegsterContainer";
import RegisterDone from "components/user/RegisterDone/RegisterDone";
import Intro from "components/company/intro/Intro";
import Terms from "components/company/terms/Terms";
import Privacy from "components/company/privacy/Privacy";
import Search from "containers/search/SearchContainer";
import Detail from "containers/house/housecontainer";
import Dictionary from "components/dictionary/Dictionary";
import DictionaryPost from "containers/dictionary/PostDetailContainer";
import Mypage from "containers/user/mypage/MypageContainer";
import inquiryDetail from "components/user/mypage/details/Inquiry/detail/InquiryDetail";
import PasswordChange from "components/user/PasswordChange/PasswordChange";
import EmailOk from "components/user/EmailOk/EmailOk";
import ExpiredEmail from "components/user/ExpiredEmail/ExpiredEmail";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      member_name: "",
      created: false
    };
  }

  async componentDidMount() {
    const myStorage = window.localStorage;
    console.log(myStorage);
    if (myStorage.viewdhouse === "") {
      myStorage.setItem("viewdhouse", "");
    }
    await this.Session_Refresh();
  }

  Session_Refresh = async () => {
    const token = this.props.cookies.get("auth");

    if (token !== undefined && token !== null) {
      const access = JSON.parse(decode(token))["refresh_token"];
      const refresh_token = access;
      const res = await this.props.UserActions.Session_Refresh({
        refresh_token
      });

      if (res["data"]["result"]["resCode"] !== "0000") {
        this.props.cookies.remove("auth");
        this.props.history.replace("/");
      }

      const member_name = await this.props.UserActions.Myinfo();
      this.setState({
        member_name:
          member_name["data"]["result"]["data"]["member"]["MEMBER_NAME"]
      });
    }

    this.setState({ ...this.state, isLoading: false });
  };

  render() {
    if (this.state.isLoading) return null;
    return (
      <BrowserRouter>
        <MainTemplate member_name={this.state.member_name}>
          <Switch>
            <Route exact path="/" component={Main}></Route>
            {/* 메인페이지 */}

            <Route exact path="/user/register" component={Register}></Route>
            {/* 일반회원 회원가입 페이지 */}

            <Route //일반회원 회원가입 완료페이지
              exact
              path="/user/registerDone"
              component={RegisterDone}
            ></Route>

            <Route exact path="/company/intro" component={Intro}></Route>
            {/* 컴앤스테이 회사소개 */}

            <Route exact path="/company/terms" component={Terms}></Route>
            {/* 컴앤스테이 이용약관 */}

            <Route exact path="/company/privacy" component={Privacy}></Route>
            {/* 개인정보 취급정보 방침 */}

            <Route exact path="/search" component={Search}></Route>
            {/* 하우스검색 페이지 */}

            <Route // 하우스 상세페이지
              path="/house/"
              component={Detail}
            ></Route>

            <Route exact path="/article" component={Dictionary}></Route>
            {/* 청년주거백과 */}

            <Route //  청년주거백과 자체제작 게시물 상세페이지
              path="/article/"
              // params={{ articleid: 1 } 상세페이지 게시물 아이디로 보낼때 사용할것 ..}
              component={DictionaryPost}
            ></Route>

            <Route exact path="/user/mypage" component={Mypage}></Route>
            {/* 마이페이지 */}

            <Route // 나의페이지 문의 내역 상세
              exact
              path="/user/mypage/inquiry/detail"
              component={inquiryDetail}
            ></Route>

            <Route // 일반회원 비밀번호 변경
              exact
              path="/user/mypage/passwordchange"
              component={PasswordChange}
            ></Route>

            <Route exact path="/user/emailok" component={EmailOk}></Route>
            {/* 이메일인증 승인됨 */}

            <Route //이메일 인증 기간 만료됨
              exact
              path="/user/expiredemail"
              component={ExpiredEmail}
            ></Route>
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    );
  }
}

export default withCookies(
  connect(
    state => ({}),
    dispatch => ({
      UserActions: bindActionCreators(UserActions, dispatch)
    })
  )(withRouter(App))
);
