import React from "react";
import classnames from "classnames/bind";
import styled from "./_UserAccount.module.scss";
import naver from "assets/images/naver-small.png";
import facebook from "assets/images/facebook-small.png";
import kakaotalk from "assets/images/kakao-small.png";
import CloseAccount from "containers/common/CloseAccount/CloseAccountContainer";
import Popup from "components/common/Popup/Popup";
import { render } from "react-dom";

const cx = classnames.bind(styled);

class UserAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MemberData: this.props.MemberData,
            NationCodes: this.props.NationCodes,
            NewsNotice:
                this.props.MemberData["NEWS_NOTICE_YN"] === "Y" ? true : false,
            TelConfirmyn:
                this.props.MemberData["TEL_CONFIRM_YN"] === "Y" ? true : false,
            Gender: this.props.MemberData["GENDER"],
            isModalOpen: false
        };
    }

    openModal = e => {
        e.preventDefault();
        this.setState({ isModalOpen: true });
    };

    closeModal = e => {
        e.preventDefault();
        this.setState({ isModalOpen: false });
    };

    movePwchange = e => {
        e.preventDefault();
        window.location.replace("/user/mypage/passwordchange");
    };

    render() {
        const { Gender } = this.state;
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
                                    defaultValue={
                                        this.state.MemberData["EMAIL"]
                                    }
                                    readOnly
                                />
                                <button
                                    className={cx("change-password")}
                                    onClick={e => this.movePwchange(e)}
                                >
                                    비밀번호 변경
                                </button>
                                <input
                                    name={cx("name")}
                                    type="text"
                                    value={this.state.MemberData["MEMBER_NAME"]}
                                    readOnly
                                />
                                <div className={cx("genders")}>
                                    <label>
                                        <input
                                            type="radio"
                                            name="gender"
                                            defaultChecked={
                                                Gender === "M" ? true : false
                                            }
                                        />
                                        <div className={cx("gender-box")}>
                                            남성
                                        </div>
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="gender"
                                            defaultChecked={
                                                Gender === "F" ? true : false
                                            }
                                        />
                                        <div className={cx("gender-box")}>
                                            여성
                                        </div>
                                    </label>
                                </div>
                                <input
                                    name={cx("birth")}
                                    type="text"
                                    readOnly
                                    defaultValue={
                                        this.state.MemberData["BIRTHYEAR"]
                                    }
                                    required
                                />
                                <select name={cx("nationality")} required>
                                    {this.state.NationCodes.filter(
                                        value =>
                                            this.state.MemberData[
                                                "NATION_CODE"
                                            ] === value["code"]
                                    ).map(items => {
                                        return (
                                            <option
                                                value={
                                                    this.state.MemberData[
                                                        "NATION_CODE"
                                                    ]
                                                }
                                                data-default
                                                defaultChecked
                                            >
                                                {items["name"]}
                                            </option>
                                        );
                                    })}
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
                                        {this.state.NewsNotice === true
                                            ? "✔"
                                            : ""}
                                        <input
                                            type="checkbox"
                                            defaultValue={
                                                this.state.MemberData[
                                                    "NEWS_NOTICE_YN"
                                                ] === "Y"
                                                    ? true
                                                    : false
                                            }
                                        />
                                    </label>
                                    <span>뉴스레터 수신동의</span>
                                </div>
                                <div className={cx("clear")}></div>
                                <div>
                                    <label>
                                        {this.state.TelConfirmyn === true
                                            ? "✔"
                                            : ""}
                                        <input
                                            type="checkbox"
                                            defaultValue={
                                                this.state.MemberData[
                                                    "TEL_CONFIRM_YN"
                                                ] === "Y"
                                                    ? true
                                                    : false
                                            }
                                        />
                                    </label>
                                    <span>전체 알림에 대한 수신 설정 동의</span>
                                </div>
                            </div>
                            <div className={cx("clear")}></div>
                            <button
                                className={cx("close-account")}
                                onClick={this.openModal}
                            >
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
                <Popup
                    closeModal={this.closeModal}
                    openModal={this.openModal}
                    isModalOpen={this.state.isModalOpen}
                >
                    <CloseAccount
                        closeModal={this.closeModal}
                        openModal={this.openModal}
                    />
                </Popup>
            </div>
        );
    }
}

export default UserAccount;
