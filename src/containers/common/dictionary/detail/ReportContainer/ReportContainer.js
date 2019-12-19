import React from "react";
import Report from "components/dictionary/detail/Report/Report";
import { withCookies } from "react-cookie";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as UserAction from "stores/modules/mainall";

class ReportContainer extends React.Component {
  // 쉐어하우스 리포트 콘테이너
  ArticleContent = async () => {
    // 청년주거 백과 전체 콘텐츠 받아오는 api 호출 함수
    const { UserAction } = this.props;
    try {
      const res = await UserAction.ArticleContent(); // 통신 내용 받아서 변수에 넣어줌
      return res.data.result.data.articleList; // 통신내용중 콘텐츠 리스트 받아서 반환해줌 [ 배열 ]
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    // 쉐어하우스 리포트 컴포넌트 및 콘텐츠 리스트 받아서 반환해주는 함수 반환
    return <Report ArticleContent={this.ArticleContent} />;
  }
}

export default connect(null, dispatch => ({
  UserAction: bindActionCreators(UserAction, dispatch)
}))(ReportContainer);
