import React from "react";
import { bindActionCreators } from "redux";
import { withCookies } from "react-cookie";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as UserAction from "stores/modules/user";
import Mypage from "components/user/mypage/Mypage";
import { encode } from "lib/encrypt";

class MypageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MemberData: "",
      NationCodes: [],
      viewdhouse_arr: [],
      viewdhouse_len: ""
    };
  }

  async componentDidMount() {
    const token = this.props.cookies.get("auth"); // 쿠키가져옴

    if (token === undefined || token === null || token === "") {
      // 쿠키에 엑세스 토큰값이 없으면 로그인하지 않은 회원이라 판단
      alert("로그인 후 이용해주십시오"); // 로그인 후 이용해주십시오라는 경고메세지를 띄워줌
      window.location.replace("/"); // 페이지를 메인페이지로 돌려보내줌
    } else {
      // 쿠키에 엑세스 토큰값이 존재하는 로그인된 회원이라면
      await this.Myinfo(); // 회원의 정보를 가져옴
      await this.Nation_Codes(); // 사용할 국가코드를 받아옴
      await this.ViewdHouse(); // 최근 본 하우스
    }
  }

  ViewdHouse = async () => {
    // 최근본 하우스
    const { UserAction } = this.props;
    const myStorage = window.localStorage;
    const viewdhouse = myStorage.getItem("viewdhouse");
    try {
      const res = await UserAction.ViewdHouse(viewdhouse);
      console.log(res);
      let nextState = this.state;

      nextState["viewdhouse_arr"] = res.data.result.data.houseList;
      nextState["viewdhouse_len"] = res.data.result.data.houseList.length;

      this.setState(nextState);
      console.log(res);

      return;
    } catch (e) {
      // 통신중 오류가 생긴다면
      console.log(e);
    }
  };

  Nation_Codes = async () => {
    // 마이페이지 계정정보 카테고리에서 사용 할 국가코드불러옴 ...
    const { UserAction } = this.props;
    try {
      const res = await this.props.UserAction.Nation_Codes();
      const NextNationCodes = res.data.result.data.nationList;
      let NextState = this.state;
      NextState["NationCodes"] = NextNationCodes;
      this.setState(NextState);
    } catch (e) {
      console.log(e);
    }
  };

  Myinfo = async () => {
    // 나의 회원정보 받아옴
    const { UserAction } = this.props;
    try {
      const res = await this.props.UserAction.Myinfo(); // 회원정보를 포함한 api 통신 내용 받아 변수에 넣음
      const NextMemberData = res.data.result.data.member; // 회원정보만 빼서 받아옴 ..
      let NextState = this.state; // 현재 state 동기식으로 변경
      NextState["MemberData"] = NextMemberData;
      this.setState(NextState);
    } catch (e) {
      // 통신중 에러가 있다면
      console.log(e);
    }
  };

  SeeFavHouse = async () => {
    const { UserAction } = this.props;
    try {
      const res = await UserAction.SeeFavHouse();
      console.log(res);
      return res.data.result.data;
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    let NextState = this.state;
    console.log(NextState);
    return (
      // 마이페이지에 state 값을 포함시켜 반환함
      <Mypage
        Myinfo={this.Myinfo}
        MemberData={NextState["MemberData"]}
        NationCodes={NextState["NationCodes"]}
        viewdhouse_arr={NextState["viewdhouse_arr"]}
        viewdhouse_len={NextState["viewdhouse_len"]}
        SeeFavHouse={this.SeeFavHouse}
      />
    );
  }
}

export default withCookies(
  connect(null, dispatch => ({
    UserAction: bindActionCreators(UserAction, dispatch)
  }))(withRouter(MypageContainer))
);
