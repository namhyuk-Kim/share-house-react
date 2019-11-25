import React from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "assets/images/logo.png";
import styles from "./_Preinfo.module.scss";

const cx = classnames.bind(styles);

class Preinfo extends React.Component {
    render() {
        return (
            <div className={cx("email-certifi")}>
                <div className={cx("email-content")}>
                    <div className={cx("email-header")}>
                        <img src={logo} alt="logo" title="logo" />
                    </div>
                    <h1>휴면계정 전환 사전 안내</h1>
                    <p>
                        안녕하세요.
                        <br />
                        Come&Stay에서 안내드립니다.
                        <br />
                        <br />
                        Come&Stay
                        <br />
                        [정보통신망 이용촉진 및 정보보호 등에 관한 법률 제 29조
                        및 동법 시행령 16조]에
                        <br />
                        따라 고객님의 개인정보 보호를 위한 휴면 회원 정책을
                        시행합니다.
                        <br />
                        <br />
                        휴면계정 전환 예정일자 : 2019년 12월 31일
                        <br />
                        <br />
                        분기보관 예정 정보 : 이름,출생년도,이메일주소
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

export default Preinfo;
