import React from "react";
import classnames from "classnames/bind";
import PropTypes from "prop-types";
import styles from "./_Login.module.scss";
import { Link } from "react-router-dom";

const cx = classnames.bind(styles);

class Login extends React.Component {
    render() {
        return (
            <div className={cx("Login")}>
                <div className={cx("login-wrap")}>
                    <h1>로그인</h1>
                    <span>청년들을 위한 하우스 집합소</span>
                </div>
            </div>
        );
    }
}

export default Login;
