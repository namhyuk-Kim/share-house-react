import React from "react";
import MainTemplate from "./components/base/MainTemplate/MainTemplate";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "components/common/Main/Main";
import Register from "components/common/Register/Register";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainTemplate>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/Register" component={Register}></Route>
          {/* <Route exact path="/login" component={Login}></Route> */}
        </MainTemplate>
      </BrowserRouter>
    );
  }
}

export default App;
