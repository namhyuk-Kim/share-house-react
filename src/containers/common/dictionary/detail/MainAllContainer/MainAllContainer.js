import React from "react";
import MainAll from "components/dictionary/detail/MainAll/MainAll";
import { withCookies } from "react-cookie";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as UserAction from "stores/modules/mainall";

class MainAllContainer extends React.Component {
  // 청년주거백과 메인 페이지
  ArticleContent = async () => {
    // 청년주거백과 전체 콘텐츠 받아오는 api
    const { UserAction } = this.props;
    try {
      const res = await UserAction.ArticleContent(); // api 통신내용 변수에 저장
      return res.data.result.data.articleList; // 통신내용중 콘텐츠 받아온것을 반환
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    // 청년주거백과 메인페이지 컴포넌트 및 콘텐츠 리스트 반환하는 함수 보냄
    return <MainAll ArticleContent={this.ArticleContent} />;
  }
}

export default connect(null, dispatch => ({
  UserAction: bindActionCreators(UserAction, dispatch)
}))(MainAllContainer);
