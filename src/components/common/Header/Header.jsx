import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./_Header.module.scss";
import logo from "assets/images/logo.png";
import Popup from "components/common/Popup/Popup";
import Login from "components/user/Login/Login";
import PasswordFind from "components/user/PasswordFind/PasswordFind";
import PasswordMod from "components/user/PasswordMod/PasswordMod";
import Dormancy from "components/user/Dormancy/Dormancy";
import AsideHam from "components/common/AsideHam/AsideHam";

const cx = classNames.bind(styles);

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowHam: false
        };
    }

    render() {
        const ToggleHam = e => {
            e.preventDefault();
            this.setState({
                isShowHam: !this.state.isShowHam
            });
        };
        return (
            <>
                <header className={cx("invert")}>
                    <div className={cx("content")}>
                        <button
                            className={cx("ham-menu")}
                            onClick={e => ToggleHam(e)}
                        >
                            <div className={cx("line")}></div>
                            <div className={cx("line")}></div>
                            <div className={cx("line")}></div>
                        </button>
                        <nav className={cx("navigation")}>
                            <Link to="/article">청년주거 백과</Link>
                            <Link to="/">비즈페이지</Link>
                        </nav>
                        <h2>
                            <Link to="/">
                                <img src={logo} alt="logo" title="logo" />
                            </Link>
                        </h2>
                        <div className={cx("member-wrap")}>
                            <Link to="/search">하우스 검색</Link>
                            <Link to="/user/Register">회원가입</Link>
                            <Link to="/user/mypage">김문경님</Link>
                            {/* <a href="/" onClick={this.props.openModal}>
                                로그인
                            </a> */}
                        </div>
                    </div>
                </header>
                <AsideHam
                    ToggleHam={ToggleHam}
                    isShowHam={this.state.isShowHam}
                />
                <Popup
                    closeModal={this.props.closeModal}
                    isModalOpen={this.props.isModalOpen}
                >
                    <Login
                        closeModal={this.props.closeModal}
                        isModalOpen={this.props.isModalOpen}
                    />
                </Popup>
            </>
        );
    }
}

export default Header;
