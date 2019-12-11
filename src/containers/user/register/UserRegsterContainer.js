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
      console.dir(e);
    }
  };

  render() {
    return <Register NationCodes={this.NationCodes} />;
  }
}

export default connect(null, dispatch => ({
  UserAction: bindActionCreators(UserAction, dispatch)
}))(UserRegisterContainer);
