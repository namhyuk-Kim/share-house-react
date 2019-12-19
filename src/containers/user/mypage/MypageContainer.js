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
      NationCodes: []
    };
  }

  async componentDidMount() {
    const token = this.props.cookies.get("auth");
    if (token === undefined || token === null || token === "") {
      alert("로그인 후 이용해주십시오");
      window.location.replace("/");
    } else {
      await this.Myinfo();
      await this.Nation_Codes();
    }
  }

  Nation_Codes = async () => {
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
    const { UserAction } = this.props;
    try {
      const res = await this.props.UserAction.Myinfo();
      const NextMemberData = res.data.result.data.member;
      let NextState = this.state;
      NextState["MemberData"] = NextMemberData;
      this.setState(NextState);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    let NextState = this.state;
    console.log(NextState);
    return (
      <Mypage
        Myinfo={this.Myinfo}
        MemberData={NextState["MemberData"]}
        NationCodes={NextState["NationCodes"]}
      />
    );
  }
}

export default withCookies(
  connect(null, dispatch => ({
    UserAction: bindActionCreators(UserAction, dispatch)
  }))(withRouter(MypageContainer))
);
