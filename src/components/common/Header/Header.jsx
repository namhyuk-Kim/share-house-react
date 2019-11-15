import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./_Header.module.scss";
import logo from "assets/images/logo.png";

const cx = classNames.bind(styles);

class Header extends React.Component {
    render() {
        return (
            <header className={cx("invert")}>
                <div className={cx("content")}>
                    <nav className={cx("navigation")}>
                        {/* <Link>청년주거백과</Link>
                        <Link>비즈페이지</Link> */}
                        <a href="/">청년주거백과</a>
                        <a href="/">비즈페이지</a>
                    </nav>
                    <h2>
                        <a href="/">
                            <img src={logo} alt="logo" title="logo" />
                        </a>
                    </h2>
                    <div className={cx("member-wrap")}>
                        <a href="/">하우스 검색</a>
                        <a href="/">회원가입</a>
                        <a href="/">로그인</a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
