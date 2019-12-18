import React from "react";
import classnames from "classnames/bind";
import styled from "./_Mypage.module.scss";
import Recently from "components/user/mypage/details/Recently/Recently";
import Scraps from "components/user/mypage/details/Scraps/Scraps";
import Inquiry from "components/user/mypage/details/Inquiry/Inquiry";
import UserAccount from "components/user/mypage/details/UserAccount/UserAccount";

const cx = classnames.bind(styled);

class Mypage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowMypage: "recent"
        };
    }
    ChangeView = e => {
        let nextState = e;
        this.setState({
            nowMypage: nextState
        });
    };

    splashComp = e => {
        let nowComp = this.state.nowMypage;
        switch (nowComp) {
            case "recent":
                return <Recently />;

            case "interest":
                return <Recently />;

            case "scraps":
                return <Scraps />;

            case "inquiry":
                return <Inquiry />;

            case "privacy":
                return <UserAccount />;

            default:
                return null;
        }
    };

    render() {
        return (
            <>
                <div className={cx("mypage-wrap")}>
                    <div className={cx("mypage-user-data")}>
                        <h1>김문영</h1>
                        <span>kimmy@naver.com</span>
                    </div>
                </div>
                <div className={cx("mypage-category")}>
                    <div className={cx("main-category")}>
                        <ul>
                            <li
                                className={
                                    this.state.nowMypage === "recent"
                                        ? cx("primary-blue")
                                        : null
                                }
                            >
                                <button
                                    onClick={e => this.ChangeView("recent")}
                                >
                                    최근 본 하우스
                                </button>
                            </li>
                            <li
                                className={
                                    this.state.nowMypage === "interest"
                                        ? cx("primary-blue")
                                        : null
                                }
                            >
                                <button
                                    onClick={e => this.ChangeView("interest")}
                                >
                                    관심하우스
                                </button>
                            </li>
                            <li
                                className={
                                    this.state.nowMypage === "scraps"
                                        ? cx("primary-blue")
                                        : null
                                }
                            >
                                <button
                                    onClick={e => this.ChangeView("scraps")}
                                >
                                    나의 스크랩
                                </button>
                            </li>
                            <li
                                className={
                                    this.state.nowMypage === "inquiry"
                                        ? cx("primary-blue")
                                        : null
                                }
                            >
                                <button
                                    onClick={e => this.ChangeView("inquiry")}
                                >
                                    입주문의
                                </button>
                            </li>
                            <li
                                className={
                                    this.state.nowMypage === "privacy"
                                        ? cx("primary-blue")
                                        : null
                                }
                            >
                                <button
                                    onClick={e => this.ChangeView("privacy")}
                                >
                                    개인정보
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx("mypage-wrap")}>{this.splashComp()}</div>
            </>
        );
    }
}

export default Mypage;
