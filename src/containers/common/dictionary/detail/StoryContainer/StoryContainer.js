import React from "react";
import Story from "components/dictionary/detail/Story/Story";
import { withCookies } from "react-cookie";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as UserAction from "stores/modules/mainall";

class StoryContainer extends React.Component {
  ArticleContent = async () => {
    const { UserAction } = this.props;
    try {
      const res = await UserAction.ArticleContent();
      return res.data.result.data.articleList;
    } catch (e) {
      console.dir(e);
    }
  };

  render() {
    return <Story ArticleContent={this.ArticleContent} />;
  }
}

export default connect(null, dispatch => ({
  UserAction: bindActionCreators(UserAction, dispatch)
}))(StoryContainer);
