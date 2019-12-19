import React from "react";
import { withCookies, Cookies } from "react-cookie";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import CloseAcoount from "components/user/CloseAccount/CloseAccount";
import * as UserAction from "stores/modules/user";

class CloseAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  CloseAccount = async e => {
    e.preventDefault();
    const { cookies } = this.props;
    await UserAction.CloseAccount();
    cookies.remove("auth", { path: "/" });
    alert("정상적으로 회원탈퇴 되었습니다.");
    window.location.replace("/");
  };

  render() {
    return <CloseAcoount CloseAccount={this.CloseAccount} />;
  }
}

export default withCookies(
  connect(
    state => ({}),
    dispatch => ({})
  )(withRouter(CloseAccount))
);
