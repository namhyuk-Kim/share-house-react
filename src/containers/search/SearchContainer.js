import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as UserAction from "stores/modules/search";
import Search from "components/house/search/Search";

class SearchContainer extends React.Component {
  SearchHelp = async search_keyword => {
    const { UserAction } = this.props;
    try {
      const res = await UserAction.SearchHelp(search_keyword);
      return res.data.result.data.kewordList;
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return <Search SearchNomination={this.SearchHelp} />;
  }
}

export default connect(null, dispatch => ({
  UserAction: bindActionCreators(UserAction, dispatch)
}))(SearchContainer);
