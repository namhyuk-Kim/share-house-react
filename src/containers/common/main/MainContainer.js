import React from "react";
import Main from "components/common/Main/Main";
import { withCookies } from "react-cookie";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as UserActions from "stores/modules/main";

import { decode } from "lib/encrypt";

class MainContainer extends React.Component {
  // 인덱스 페이지 ( 메인 ) 콘테이너
  constructor(props) {
    super(props);
    this.state = {
      todayHouse_len: 0,
      todayHouseArr: [],
      viewdhouse_arr: [],
      viewdhouse_len: 0,
      isLoading: false,
      ishLoading: false
    };
  }

  componentDidMount() {
    this.TodayHouse(); //오늘의 인기하우스 받아옴
    this.ViewdHouse(); // 최근본 하우스
  }

  TodayHouse = async () => {
    // 오늘의 인기하우스 api 통신후 하우스 리스트 반환하는 함수
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
      // 통신중 오류가 생긴다면
      console.log(e);
    }
  };

  ViewdHouse = async () => {
    // 최근본 하우스
    const { UserActions } = this.props;
    const myStorage = localStorage;
    const viewdhouse = myStorage.getItem("viewdhouse");
    try {
      const res = await UserActions.ViewdHouse(viewdhouse);

      let nextState = this.state;

      nextState["viewdhouse_arr"] = res.data.result.data.houseList;
      nextState["viewdhouse_len"] = res.data.result.data.houseList.length;
      nextState["ishLoading"] = true;

      this.setState(nextState);

      return;
    } catch (e) {
      // 통신중 오류가 생긴다면
      console.log(e);
    }
  };

  render() {
    return (
      // 메인 인덱스 페이지 컴포넌트 반환
      <Main
        todayHouseArr={this.state.todayHouseArr}
        todayHouse_len={this.state.todayHouse_len}
        viewdhouse_arr={this.state.viewdhouse_arr}
        viewdhouse_len={this.state.viewdhouse_len}
        isLoading={this.state.isLoading}
        cookies={this.props.cookies.cookies}
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
