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
      isLoading: false
    };
  }

  componentDidMount() {
    this.TodayHouse(); //오늘의 인기하우스 받아옴
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

  render() {
    return (
      // 메인 인덱스 페이지 컴포넌트 반환
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
