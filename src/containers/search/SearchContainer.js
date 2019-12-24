import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as UserAction from "stores/modules/search";
import Search from "components/house/search/Search";

class SearchContainer extends React.Component {
  state = {
    houseLoad: true,
    houseList: [],
    totalCount: 0
  };

  SearchHelp = async search_keyword => {
    const { UserAction } = this.props;
    try {
      const res = await UserAction.SearchHelp(search_keyword);
      return res.data.result.data.kewordList;
    } catch (e) {
      console.log(e);
    }
  };

  CompareList = async () => {
    const { UserAction } = this.props;
    try {
      const res = await UserAction.CompareList();
      return res.data.result.data.houseList;
    } catch (e) {
      console.log(e);
    }
  };

  AddCompare = async houseid => {
    const { UserAction } = this.props;
    try {
      await UserAction.AddCompare(houseid);
      return alert("비교함에 추가되었습니다.");
    } catch (e) {
      console.dir(e);
    }
  };

  SearchList = async ({
    page,
    rows,
    NORTH,
    SOUTH,
    EAST,
    WEST,
    SHAREHOUSE,
    HOUSE2030,
    PREMIUM_HOUSE
  }) => {
    const { UserAction } = this.props;

    try {
      const res = await UserAction.SearchList({
        page,
        rows,
        NORTH,
        SOUTH,
        EAST,
        WEST,
        SHAREHOUSE,
        HOUSE2030,
        PREMIUM_HOUSE
      });

      if (res["data"]["result"]["resCode"] !== "0000") {
        alert("정보가 존재하지 않습니다");
        return null;
      }

      let nextState = this.state;

      console.log(res.data.result.data.houseList);
      nextState["houseList"] = res.data.result.data.houseList;
      nextState["totalCount"] = res.data.result.data.totalCount;
      nextState["houseLoad"] = false;

      await this.setState(nextState);
      return;
    } catch (e) {
      console.log(e);
      return;
    }
  };

  render() {
    return (
      <Search
        SearchNomination={this.SearchHelp}
        SearchList={this.SearchList}
        houseLoad={this.state.houseLoad}
        houseList={this.state.houseList}
        totalCount={this.state.totalCount}
        AddCompare={this.AddCompare}
        CompareList={this.CompareList}
      />
    );
  }
}

export default connect(null, dispatch => ({
  UserAction: bindActionCreators(UserAction, dispatch)
}))(SearchContainer);
