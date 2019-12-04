import React from "react";
import classnames from "classnames/bind";
import styles from "./_AsideHam.module.scss";
import { Link } from "react-router-dom";
import logo from "assets/images/logo.png";

const cx = classnames.bind(styles);

class AsideHam extends React.Component {
    render() {
        return (
            <>
                <div
                    className={
                        this.props.isShowHam
                            ? cx(["aside-ham", "show"])
                            : cx(["aside-ham", "hide"])
                    }
                >
                    <div className={cx("ham")}>
                        <div className={cx("ham-header")}>
                            <button
                                className={cx("ham-menu")}
                                onClick={this.props.ToggleHam}
                            >
                                <div className={cx("line")}></div>
                                <div className={cx("line")}></div>
                            </button>
                            <h2>
                                <a href="/">
                                    <img src={logo} alt="logo" />
                                </a>
                            </h2>
                        </div>
                        <div className={cx("ham-body")}>
                            <p>
                                <span>
                                    <Link to="/user/Register">회원가입</Link>
                                </span>
                                &nbsp;|&nbsp;
                                <span>로그인</span>
                            </p>
                            <p>
                                <Link to="/house/search">하우스검색</Link>
                            </p>
                            <p>
                                <Link to="/">마이페이지</Link>
                            </p>
                            <p>
                                <Link to="/">문의메세지</Link>
                            </p>
                            <p>
                                <Link to="/dictionary">청년주거백과</Link>
                            </p>
                            <p>
                                <Link to="/">비즈페이지</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        this.props.isShowHam
                            ? cx(["ham-back", "back-show"])
                            : cx(["ham-back", "back-hide"])
                    }
                ></div>
            </>
        );
    }
}

export default AsideHam;
