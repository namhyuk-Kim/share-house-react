import React from "react";
import { bindActionCreators } from "redux";
import { withCookies } from "react-cookie";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as UserAction from "stores/modules/passwordchange";
import PasswordChange from "components/user/PasswordChange/PasswordChange";

class PasswordChangeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  passwordChange = async (oldpassword, newpassword) => {
    const { UserAction } = this.props;
    try {
      const res = await UserAction.PasswordChange(oldpassword, newpassword);
      return alert("비밀번호가 변경되었습니다.");
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return <PasswordChange passwordChange={this.passwordChange} />;
  }
}

export default withCookies(
  connect(null, dispatch => ({
    UserAction: bindActionCreators(UserAction, dispatch)
  }))(withRouter(PasswordChangeContainer))
);
