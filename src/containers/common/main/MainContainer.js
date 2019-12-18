import React from "react";
import Main from "components/common/Main/Main";
import { withCookies } from "react-cookie";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as UserActions from "stores/modules/main";

import { decode } from "lib/encrypt";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todayHouse_len: 0,
      todayHouseArr: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.TodayHouse();
  }

  TodayHouse = async () => {
    const { UserActions } = this.props;

    try {
      const res = await UserActions.TodayHouse();

      let nextState = this.state;

      nextState["todayHouseArr"] = res.data.result.data.houseList;
      nextState["todayHouse_len"] = res.data.result.data.houseList.length;
      nextState["isLoading"] = true;

      this.setState(nextState);

      return;
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <Main
        todayHouseArr={this.state.todayHouseArr}
        todayHouse_len={this.state.todayHouse_len}
        isLoading={this.state.isLoading}
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
  )(withRouter(MainContainer))
);
