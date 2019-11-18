import React from "react";
import classnames from "classnames/bind";
import PropTypes from "prop-types";
import styles from "./_PasswordFind.module.scss";
import { Link } from "react-router-dom";
import sns_naver from "assets/images/Naver.png";
import sns_kakao from "assets/images/kakao.png";
import sns_facebook from "assets/images/facebook_login.png";

const cx = classnames.bind(styles);

class PasswordFind extends React.Component {
    render() {
        return (
            <div className={cx("modp")}>
                <button className={cx("close")}></button>
                <div className={cx("modp-wrap")}>
                    <h1>비밀번호 찾기</h1>
                    <span>
                        회원가입 시 입력한 메일주소로 비밀번호 재설정 링크를
                        전송해
                        <br /> 드립니다.
                    </span>

                    <form>
                        <label>
                            <input
                                type="email"
                                placeholder="이메일 주소 입력"
                            />
                        </label>
                        <input type="submit" value="발송하기" />
                    </form>
                </div>
            </div>
        );
    }
}

export default PasswordFind;
