import React from "react";
import classnames from "classnames/bind";
import styles from "./_Dictionary.module.scss";
import search from "assets/images/Search.png";
import MainAll from "containers/common/dictionary/detail/MainAllContainer/MainAllContainer";
import HouseLife from "containers/common/dictionary/detail/HouseLifeContainer/HouseLifeContainer";
import Comic from "./detail/Comic/Comic";
import Story from "containers/common/dictionary/detail/StoryContainer/StoryContainer";
import Report from "containers/common/dictionary/detail/ReportContainer/ReportContainer";

const cx = classnames.bind(styles);

class Dictionary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nowCategory: "All",
            nowDetailCategory: ""
        };
    }

    render() {
        const SelCategory = () => {
            if (this.state.nowDetailCategory !== "") {
                switch (this.state.nowDetailCategory) {
                    case "0001":
                        return <HouseLife />;
                    case "0002":
                        return <Comic />;
                    case "0003":
                        return <Story />;
                    case "0004":
                        return <Report />;
                    default:
                        return <MainAll />;
                }
            } else {
                switch (this.state.nowCategory) {
                    case "All":
                        return <MainAll nowCategory={this.state.nowCategory} />;
                    case "house":
                        return (
                            <HouseLife nowCategory={this.state.nowCategory} />
                        );
                    case "young":
                        return (
                            <Report
                                nowCategory={this.state.nowCategory}
                                category={"청년임대주택 알아보기"}
                            />
                        );
                    default:
                        return (
                            <MainAll
                                nowCategory={this.state.nowCategory}
                                nowDetailCategory={this.state.nowDetailCategory}
                            />
                        );
                }
            }
        };

        const ChangeCategory = e => {
            if (e === "house") {
                let nextState = this.state;

                nextState["nowCategory"] = e;
                nextState["nowDetailCategory"] = "0001";

                this.setState(nextState);

                return;

                // 0001 슬기로운 하우스 생활
                // 0002 컴앤스테이툰
                // 0003 쉐어하우스 스토리
                // 0004 쉐어하우스 리포트
                // 0005 청년주택의 모든 것
                // 0006 청년임대주택 알아보기
            }
            this.setState({
                nowCategory: e,
                nowDetailCategory: ""
            });
        };

        const ChangeDetailCate = e => {
            this.setState({
                nowDetailCategory: e
            });
        };

        return (
            <>
                <div className={cx("dictionary-wrap")}>
                    <div className={cx("dictionary-search")}>
                        <h1>청년주거 백과</h1>
                        <p>
                            청년들의 더 나은 주거환경과 올바른 주거문화 형성을
                            위한
                            <br />
                            다양한 정보를 제공해 드립니다.
                        </p>
                        <form>
                            <input
                                type="text"
                                placeholder="검색어를 입력해주세요."
                            ></input>
                            <button>검색</button>
                            <img src={search} alt={"search"} />
                        </form>
                    </div>
                </div>
                <div className={cx("dictionary-category")}>
                    <div className={cx("main-category")}>
                        <ul>
                            <li>
                                <button
                                    className={
                                        this.state.nowCategory === "All"
                                            ? cx("primary_blue")
                                            : null
                                    }
                                    onClick={e => ChangeCategory("All")}
                                >
                                    ALL
                                </button>
                            </li>
                            <li>
                                <button
                                    className={
                                        this.state.nowCategory === "house"
                                            ? cx("primary_blue")
                                            : null
                                    }
                                    onClick={e => ChangeCategory("house")}
                                >
                                    쉐어하우스
                                </button>
                            </li>
                            <li>
                                <button
                                    className={
                                        this.state.nowCategory === "young"
                                            ? cx("primary_blue")
                                            : null
                                    }
                                    onClick={e => ChangeCategory("young")}
                                >
                                    서울시 청년주택
                                </button>
                            </li>
                        </ul>
                    </div>
                    {this.state.nowCategory === "house" ? (
                        <div className={cx("sub-category")}>
                            <ul>
                                <li>
                                    <button
                                        className={
                                            this.state.nowDetailCategory ===
                                            "0001"
                                                ? cx("primary_blue")
                                                : null
                                        }
                                        onClick={e => ChangeDetailCate("0001")}
                                    >
                                        슬기로운 하우스생활
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={
                                            this.state.nowDetailCategory ===
                                            "0002"
                                                ? cx("primary_blue")
                                                : null
                                        }
                                        onClick={e => ChangeDetailCate("0002")}
                                    >
                                        컴앤스테이툰
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={
                                            this.state.nowDetailCategory ===
                                            "0003"
                                                ? cx("primary_blue")
                                                : null
                                        }
                                        onClick={e => ChangeDetailCate("0003")}
                                    >
                                        쉐어하우스 스토리
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={
                                            this.state.nowDetailCategory ===
                                            "0004"
                                                ? cx("primary_blue")
                                                : null
                                        }
                                        onClick={e => ChangeDetailCate("0004")}
                                    >
                                        쉐어하우스 리포트
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : null}
                </div>
                <div className={cx("dictionary-wrap")}>{SelCategory()}</div>
            </>
        );
    }
}

export default Dictionary;
