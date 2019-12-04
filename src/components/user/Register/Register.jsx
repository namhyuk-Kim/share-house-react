import React from "react";
import classnames from "classnames/bind";
import PropTypes from "prop-types";
import styles from "./_Register.module.scss";
import { Link } from "react-router-dom";

const cx = classnames.bind(styles);

class Register extends React.Component {
    componentDidMount() {
        // this.props.closeModal();
        console.log(this);
    }

    render() {
        return (
            <div className={cx("content")}>
                <div className={cx("register")}>
                    <div className={cx("register-left")}>
                        <div className={cx("clear")}></div>
                    </div>
                    <div className={cx("register-right")}>
                        <div>
                            <h1>회원가입</h1>
                            <form>
                                <input
                                    name={cx("email")}
                                    type="email"
                                    placeholder="이메일 주소 입력"
                                />
                                <input
                                    name={cx("name")}
                                    type="text"
                                    placeholder="이름 *"
                                    required
                                />
                                <div className={cx("genders")}>
                                    <label>
                                        <input
                                            type="radio"
                                            name="gender"
                                            defaultChecked
                                        />
                                        <div className={cx("gender-box")}>
                                            남성
                                        </div>
                                    </label>
                                    <label>
                                        <input type="radio" name="gender" />
                                        <div className={cx("gender-box")}>
                                            여성
                                        </div>
                                    </label>
                                </div>
                                <input
                                    name={cx("birth")}
                                    type="text"
                                    placeholder="출생년도(숫자4자리입력) *"
                                    required
                                />
                                <select
                                    name={cx("nationality")}
                                    type="text"
                                    required
                                >
                                    <option
                                        value=""
                                        data-default
                                        defaultChecked
                                    >
                                        국적을 선택해 주세요 *
                                    </option>
                                </select>
                                <input
                                    name={cx("password")}
                                    type="text"
                                    placeholder="비밀번호 입력(8자리 이상) *"
                                    required
                                />
                                <input
                                    name={cx("re-password")}
                                    type="text"
                                    placeholder="비밀번호 확인 *"
                                    required
                                />
                                <label>
                                    <input type="checkbox" />
                                    공실 및 신규오픈 하우스 정보가 담긴 뉴스레터
                                    수신동의
                                </label>
                                <p>
                                    회원가입을 함으로써 이용약관,개인정보 수집
                                    및 이용, 메일수신에동의하시게 됩니다.
                                </p>
                                <button>회원가입</button>
                                <div>
                                    <span className={cx("primary_blue")}>
                                        이미 Come&Stay 회원입니다.
                                    </span>
                                    <Link to="login">로그인</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={cx("clear")}></div>
                </div>
            </div>
        );
    }
}

export default Register;
