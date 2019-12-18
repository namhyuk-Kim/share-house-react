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
import Detail from "components/house/detail/Detail";
import Dictionary from "components/dictionary/Dictionary";
import DictionaryPost from "components/dictionary/detail/Postdetail/PostDetail";
import Mypage from "components/user/mypage/Mypage";
import inquiryDetail from "components/user/mypage/details/Inquiry/detail/InquiryDetail";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      member_name: ""
    };
  }

  async componentDidMount() {
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
  };

  render() {
    return (
      <BrowserRouter>
        <MainTemplate member_name={this.state.member_name}>
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route exact path="/user/register" component={Register}></Route>
            <Route
              exact
              path="/user/registerDone"
              component={RegisterDone}
            ></Route>
            <Route exact path="/company/intro" component={Intro}></Route>
            <Route exact path="/company/terms" component={Terms}></Route>
            <Route exact path="/company/privacy" component={Privacy}></Route>
            <Route exact path="/search" component={Search}></Route>
            <Route
              exact
              path="/house/houseid"
              // params={{ houseid: 1 }}
              component={Detail}
            ></Route>
            <Route exact path="/article" component={Dictionary}></Route>
            <Route
              exact
              path="/article/articleid"
              // params={{ articleid: 1 }}
              component={DictionaryPost}
            ></Route>
            <Route exact path="/user/mypage" component={Mypage}></Route>
            <Route
              exact
              path="/user/mypage/inquiry/detail"
              component={inquiryDetail}
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
