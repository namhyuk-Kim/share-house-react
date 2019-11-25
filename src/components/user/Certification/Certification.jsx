import React from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "assets/images/logo.png";
import styles from "./_Certification.module.scss";

const cx = classnames.bind(styles);

class Certifi extends React.Component {
    render() {
        return (
            <div className={cx("email-certifi")}>
                <div className={cx("email-content")}>
                    <div className={cx("email-header")}>
                        <img src={logo} alt="logo" title="logo" />
                    </div>
                    <h1>이메일을 인증하고, 가입을 완료하세요.</h1>
                    <p>
                        안녕하세요.
                        <br />
                        Come&Stay에 가입해 주셔서 감사 드립니다.
                        <br />
                        <br />
                        아래 링크를 눌러 이메일을 인증하면 회원 가입이
                        완료됩니다.
                    </p>
                    <button>비밀번호 재설정하기</button>
                    <p className={cx("mail_info")}>
                        링크는 발송 후, 10분 이내에 인증을 하셔야 합니다.
                        <br />
                        <br /> 등록한 계정 : <span>jhsim1210@gmail.com</span>
                        <br />
                        <br />
                        감사합니다.
                    </p>
                </div>
                <div className={cx("email-footer")}>
                    본 메일은 발신전용입니다. 궁금한 사항은 Come&Stay에 문의하여
                    주세요.
                </div>
            </div>
        );
    }
}

export default Certifi;
