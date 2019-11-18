import React from "react";
import classnames from "classnames/bind";
import PropTypes from "prop-types";
import styles from "./_Dormancy.module.scss";
import { Link } from "react-router-dom";
import sns_naver from "assets/images/Naver.png";
import sns_kakao from "assets/images/kakao.png";
import sns_facebook from "assets/images/facebook_login.png";

const cx = classnames.bind(styles);

class Dormancy extends React.Component {
    render() {
        return (
            <div className={cx("dormancy")}>
                <button className={cx("close")}></button>
                <div className={cx("dormancy-wrap")}>
                    <h1>휴면계정 안내</h1>
                    <span>
                        고객님의 계정정보는 현재 휴면계정으로
                        <br />
                        별도 분리.보관 조치되었습니다.
                        <br />
                        <br />
                        서비스를 재이용 희망하실경우, 계정활성화 버튼을
                        <br /> 클릭하여 주세요
                    </span>

                    <button>계정활성화</button>
                </div>
            </div>
        );
    }
}

export default Dormancy;
