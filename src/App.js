import React from "react";
import MainTemplate from "./components/base/MainTemplate/MainTemplate";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "components/common/Main/Main";
import Register from "components/user/Register/Register";
import RegisterDone from "components/user/RegisterDone/RegisterDone";
import Intro from "components/company/intro/Intro";
import Terms from "components/company/terms/Terms";
import Privacy from "components/company/privacy/Privacy";
import Search from "components/house/search/Search";
import Detail from "components/house/detail/Detail";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainTemplate>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/user/Register" component={Register}></Route>
          <Route
            exact
            path="/user/RegisterDone"
            component={RegisterDone}
          ></Route>
          <Route exact path="/company/intro" component={Intro}></Route>
          <Route exact path="/company/terms" component={Terms}></Route>
          <Route exact path="/company/Privacy" component={Privacy}></Route>
          <Route exact path="/house/search" component={Search}></Route>
          <Route exact path="/house/detail" component={Detail}></Route>

          {/* <Route exact path="/login" component={Login}></Route> */}
        </MainTemplate>
      </BrowserRouter>
    );
  }
}

export default App;
