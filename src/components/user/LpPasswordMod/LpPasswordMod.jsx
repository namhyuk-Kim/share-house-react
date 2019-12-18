import React from "react";
import classnames from "classnames/bind";
import PropTypes from "prop-types";
import styles from "./_PasswordMod.module.scss";
import { Link } from "react-router-dom";
import sns_naver from "assets/images/Naver.png";
import sns_kakao from "assets/images/kakao.png";
import sns_facebook from "assets/images/facebook_login.png";

const cx = classnames.bind(styles);

class PasswordMod extends React.Component {
    render() {
        return (
            <div className={cx("modp")}>
                <button className={cx("close")}></button>
                <div className={cx("modp-wrap")}>
                    <h1>비밀번호 변경</h1>
                    <span>
                        비밀번호 변경 주기가 지났습니다.
                        <br />
                        비밀번호를 번경해주세요.
                    </span>
                    <div>
                        <Link to="/">90뒤에 변경하기</Link>
                        <Link to="/">비밀번호 변경</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default PasswordMod;
