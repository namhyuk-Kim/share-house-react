import React from "react";
import classnames from "classnames/bind";
import styled from "./_UserAccount.module.scss";
import naver from "assets/images/naver-small.png";
import facebook from "assets/images/facebook-small.png";
import kakaotalk from "assets/images/kakao-small.png";

const cx = classnames.bind(styled);

class UserAccount extends React.Component {
    render() {
        return (
            <div className={cx("Account-management")}>
                <div>
                    <div className={cx("UserAccount-left")}>
                        <h1>계정정보</h1>
                        <div className={cx("clear")}></div>
                    </div>
                    <div className={cx("UserAccount-right")}>
                        <div>
                            <form>
                                <input
                                    name={cx("email")}
                                    type="email"
                                    defaultValue="Comenstay@comenstay.com"
                                    readOnly
                                />
                                <button className={cx("change-password")}>
                                    비밀번호 변경
                                </button>
                                <input
                                    name={cx("name")}
                                    type="text"
                                    defaultValue="홍길동"
                                    readOnly
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
                                    defaultValue="1990.01.01"
                                    required
                                />
                                <select
                                    name={cx("nationality")}
                                    type="text"
                                    required
                                >
                                    <option
                                        value="korea"
                                        data-default
                                        defaultChecked
                                    >
                                        대한민국
                                    </option>
                                </select>
                            </form>
                        </div>
                    </div>
                    <div className={cx("UserAccount-left")}>
                        <h1>SNS 계정 연동관리</h1>
                        <div className={cx("liner")}></div>
                        <div className={cx("clear")}></div>
                    </div>
                    <div className={cx("UserAccount-right")}>
                        <div>
                            <div className={cx("naver-linked-account")}>
                                <div className={cx("sns-type")}>
                                    <img src={naver} alt="sns-account-naver" />
                                    네이버
                                </div>
                                <span>연결된 정보가 없습니다.</span>
                                <button>연결</button>
                            </div>

                            <div className={cx("kakao-linked-account")}>
                                <div className={cx("sns-type")}>
                                    <img
                                        src={kakaotalk}
                                        alt="sns-account-naver"
                                    />
                                    카카오
                                </div>
                                <span className={cx("has-linked")}>
                                    johnny_johnny@naver.com
                                </span>
                                <button>연결</button>
                            </div>

                            <div className={cx("facebook-linked-account")}>
                                <div className={cx("sns-type")}>
                                    <img
                                        src={facebook}
                                        alt="sns-account-naver"
                                    />
                                    페이스북
                                </div>
                                <span>연결된 정보가 없습니다.</span>
                                <button>연결</button>
                            </div>

                            <div className={cx("receive-agreement")}>
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            defaultValue="false"
                                        />
                                    </label>
                                    <span>뉴스레터 수신동의</span>
                                </div>
                                <div className={cx("clear")}></div>
                                <div>
                                    <label>
                                        <input
                                            type="checkbox"
                                            defaultValue="false"
                                        />
                                    </label>
                                    <span>전체 알림에 대한 수신 설정 동의</span>
                                </div>
                            </div>
                            <div className={cx("clear")}></div>
                            <button className={cx("close-account")}>
                                회원탈퇴
                            </button>
                            <div className={cx("clear")}></div>
                            <div className={cx("confirm-change")}>
                                <button className={cx("confirm-ok")}>
                                    수정완료
                                </button>
                                <button className={cx("confirm-cancel")}>
                                    취소
                                </button>
                                <div className={cx("clear")}></div>
                            </div>
                            <div className={cx("clear")}></div>
                        </div>
                    </div>
                    <div className={cx("clear")}></div>
                </div>
            </div>
        );
    }
}

export default UserAccount;
