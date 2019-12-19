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
    //회원탈퇴 api 불러오는 함수
    e.preventDefault();
    const { cookies } = this.props; // 쿠키값 받아옴
    await UserAction.CloseAccount(); // 회원탈퇴
    cookies.remove("auth", { path: "/" }); // 회원탈퇴 이후 브라우저에 남아있는 쿠키값 제거 ( 남아있으면 만료된 토큰이 계속 돌면서 문제를 일으킴..)
    alert("정상적으로 회원탈퇴 되었습니다."); // 회원탈퇴가 정상적으로 이루어지었다고 알림.
    window.location.replace("/"); // 탈퇴 이후 메인페이지로 이동시킴
  };

  render() {
    // 회원탈퇴 레이어 팝업으로 반환 ...
    return <CloseAcoount CloseAccount={this.CloseAccount} />;
  }
}

export default withCookies(
  connect(
    state => ({}),
    dispatch => ({})
  )(withRouter(CloseAccount))
);
