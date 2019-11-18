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

const cx = classNames.bind(styles);

class Header extends React.Component {
    render() {
        return (
            <header className={cx("invert")}>
                <div className={cx("content")}>
                    <nav className={cx("navigation")}>
                        <Link to="/">청년주거 백과</Link>
                        <Link to="/">비즈페이지</Link>
                    </nav>
                    <h2>
                        <Link to="/">
                            <img src={logo} alt="logo" title="logo" />
                        </Link>
                    </h2>
                    <div className={cx("member-wrap")}>
                        <Link to="/">하우스 검색</Link>
                        <Link to="/user/Register">회원가입</Link>
                        <a href="/">로그인</a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
