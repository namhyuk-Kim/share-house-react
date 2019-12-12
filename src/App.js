import React from "react";
import MainTemplate from "./components/base/MainTemplate/MainTemplate";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "components/common/Main/Main";
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
  render() {
    return (
      <BrowserRouter>
        <MainTemplate>
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

export default App;
