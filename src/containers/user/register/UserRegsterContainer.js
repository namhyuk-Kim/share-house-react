import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as UserAction from "stores/modules/user";
import Register from "components/user/Register/Register";

class UserRegisterContainer extends React.Component {
  NationCodes = async () => {
    const { UserAction } = this.props;
    try {
      const res = await UserAction.Nation_Codes();
      return res.data.result.data.nationList;
    } catch (e) {
      console.log(e);
    }
  };

  RegisterNormal = async ({
    EMAIL,
    MEMBER_NAME,
    GENDER,
    BIRTHYEAR,
    NEW_PASSWORD,
    NATION_CODE,
    NOTICE_YN
  }) => {
    const { UserAction } = this.props;
    try {
      const res = await UserAction.RegisterNormal({
        EMAIL,
        MEMBER_NAME,
        GENDER,
        BIRTHYEAR,
        NEW_PASSWORD,
        NATION_CODE,
        NOTICE_YN
      });
      return res;
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <Register
        NationCodes={this.NationCodes}
        RegisterNormal={this.RegisterNormal}
      />
    );
  }
}

export default connect(null, dispatch => ({
  UserAction: bindActionCreators(UserAction, dispatch)
}))(UserRegisterContainer);
