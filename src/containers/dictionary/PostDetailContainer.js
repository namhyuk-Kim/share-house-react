import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as UserAction from "stores/modules/contentdetail";
import ContentDetail from "components/dictionary/detail/Postdetail/PostDetail";

class ContentDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  ContentDetail = async () => {
    const { UserAction } = this.props;
    try {
      const contentrest = this.props.location.pathname;
      const res = await this.props.UserAction.ContentDetail(contentrest);
      return res.data.result.data;
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return <ContentDetail ContentDetail={this.ContentDetail} />;
  }
}

export default connect(null, dispatch => ({
  UserAction: bindActionCreators(UserAction, dispatch)
}))(ContentDetailContainer);
