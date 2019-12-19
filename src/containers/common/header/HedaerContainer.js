import React from "react";
import Header from "components/common/Header";
import { withCookies } from "react-cookie";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as UserActions from "stores/modules/user";

import { decode } from "lib/encrypt";

class HeaderContainer extends React.Component {
  // 헤더 콘테이너
  constructor(props) {
    super(props);
    this.state = {};
  }

  Cookie_Logout = e => {
    // 로그아웃 버튼을 누르면 엑세스토큰이 들어간 쿠키값을 제거하여  로그아웃 시켜주는 함수
    e.preventDefault();
    const { cookies } = this.props;

    cookies.remove("auth");
    return window.location.replace("/");
  };

  render() {
    return (
      // 헤더 컴포넌트 반환
      <Header
        member_name={this.props.member_name}
        Logout={this.Cookie_Logout}
        isLogined={this.props.isLogined}
        openModal={this.props.openModal}
        closeModal={this.props.closeModal}
        isModalOpen={this.props.isModalOpen}
      />
    );
  }
}

export default withCookies(
  connect(
    state => ({
      isLogined: state.user.auth.user.isLogined
    }),
    dispatch => ({
      UserActions: bindActionCreators(UserActions, dispatch)
    })
  )(withRouter(HeaderContainer))
);
