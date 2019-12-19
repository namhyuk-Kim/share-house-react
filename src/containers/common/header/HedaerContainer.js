import React from "react";
import Header from "components/common/Header";
import { withCookies } from "react-cookie";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as UserActions from "stores/modules/user";

import { decode } from "lib/encrypt";

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  Cookie_Logout = e => {
    e.preventDefault();
    const { cookies } = this.props;

    cookies.remove("auth");
    return window.location.replace("/");
  };

  render() {
    return (
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
