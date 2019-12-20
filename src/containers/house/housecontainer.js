import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as UserAction from "stores/modules/housedetail";
import HouseDetail from "components/house/detail/Detail";

class HouseContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  HouseDetail = async () => {
    const { UserAction } = this.props;
    try {
      const houserest = this.props.location.pathname;
      const res = await this.props.UserAction.HouseDetail(houserest);
      return res.data.result.data;
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return <HouseDetail HouseDetail={this.HouseDetail} />;
  }
}

export default connect(null, dispatch => ({
  UserAction: bindActionCreators(UserAction, dispatch)
}))(HouseContainer);
