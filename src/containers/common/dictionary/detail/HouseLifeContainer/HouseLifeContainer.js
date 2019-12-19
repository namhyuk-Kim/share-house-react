import React from "react";
import HouseLife from "components/dictionary/detail/House_life/HouseLife";
import { withCookies } from "react-cookie";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as UserAction from "stores/modules/mainall";

class HouseLifeContainer extends React.Component {
  // 슬기로운 하우스 라이프 콘테이너
  ArticleContent = async () => {
    // 콘텐츠 조회 api 통신
    const { UserAction } = this.props;
    try {
      const res = await UserAction.ArticleContent();
      return res.data.result.data.articleList; // 슬기로운 하우스 라이프 콘텐츠 반환 [ 배열형식임 ]
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    // 콘텐츠 조회 api 통신 호출 함수 전달 및 하우스 라이프 컴포넌트 반환
    return <HouseLife ArticleContent={this.ArticleContent} />;
  }
}

export default connect(null, dispatch => ({
  UserAction: bindActionCreators(UserAction, dispatch)
}))(HouseLifeContainer);
