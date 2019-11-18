import React from "react";
import classnames from "classnames/bind";
import PropTypes from "prop-types";
import styles from "./_Login.module.scss";
import { Link } from "react-router-dom";
import sns_naver from "assets/images/Naver.png";
import sns_kakao from "assets/images/kakao.png";
import sns_facebook from "assets/images/facebook_login.png";

const cx = classnames.bind(styles);

class Login extends React.Component {
    render() {
        return (
            <div className={cx("Login")}>
                <button className={cx("close")}></button>
                <div className={cx("login-wrap")}>
                    <h1>로그인</h1>
                    <span>청년들을 위한 하우스 집합소</span>
                    <form>
                        <label>
                            <input
                                type="button"
                                value="네이버 계정으로 로그인"
                            />
                            <img src={sns_naver} alt="sns-icon" />
                        </label>
                        <label>
                            <input
                                type="button"
                                value="카카오 계정으로 로그인"
                            />
                            <img src={sns_kakao} alt="sns-icon" />
                        </label>
                        <label>
                            <input
                                type="button"
                                value="페이스북 계정으로 로그인"
                            />
                            <img src={sns_facebook} alt="sns-icon" />
                        </label>
                    </form>
                    <form>
                        <label>
                            <input
                                type="email"
                                placeholder="이메일 주소 입력"
                            />
                        </label>
                        <label>
                            <input
                                type="password"
                                placeholder="비밀번호 입력"
                            />
                        </label>
                        <input type="submit" value="로그인" />
                        <div>
                            <label>
                                <input type="checkbox" />
                                <span>자동로그인</span>
                            </label>
                            <div>
                                <Link to="/">비밀번호찾기</Link>

                                <Link to="/">회원가입</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
