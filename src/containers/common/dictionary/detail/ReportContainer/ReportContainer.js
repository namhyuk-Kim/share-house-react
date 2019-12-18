import React from "react";
import Report from "components/dictionary/detail/Report/Report";
import { withCookies } from "react-cookie";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as UserAction from "stores/modules/mainall";

class ReportContainer extends React.Component {
  ArticleContent = async () => {
    const { UserAction } = this.props;
    try {
      const res = await UserAction.ArticleContent();
      return res.data.result.data.articleList;
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return <Report ArticleContent={this.ArticleContent} />;
  }
}

export default connect(null, dispatch => ({
  UserAction: bindActionCreators(UserAction, dispatch)
}))(ReportContainer);
