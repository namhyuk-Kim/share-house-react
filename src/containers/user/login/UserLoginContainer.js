import React from "react";
import { bindActionCreators } from "redux";
import { withCookies } from "react-cookie";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as UserAction from "stores/modules/user";
import Login from "components/user/Login/Login";
import { encode } from "lib/encrypt";

class UserLoginContainer extends React.Component {
  LoginNormal = async ({ userId, userPw }) => {
    const { UserAction } = this.props;
    try {
      const res = await UserAction.LoginNormal({
        userId,
        userPw
      });

      const Ecode = res.data.result["resCode"];

      if (Ecode === "0002") {
        return alert("사용자ID 또는 비밀번호가 맞지 않습니다.");
      } else if (Ecode === "0000") {
        const LoginData = {
          member_name: res["data"]["result"]["data"]["member"]["MEMBER_NAME"],
          access_token: res["headers"]["x-access-token"],
          refresh_token: res["headers"]["x-refresh-token"]
        };

        this.props.cookies.set("auth", encode(JSON.stringify(LoginData)), {
          path: "/"
        });

        alert("로그인되었습니다.");

        this.props.closeModal();

        window.location.reload();

        return LoginData;
      }
    } catch (e) {
      console.dir(e);
    }
  };

  render() {
    return (
      <Login
        LoginNormal={this.LoginNormal}
        closeModal={this.props.closeModal}
      />
    );
  }
}

export default withCookies(
  connect(null, dispatch => ({
    UserAction: bindActionCreators(UserAction, dispatch)
  }))(withRouter(UserLoginContainer))
);
