import React from "react";
import classnames from "classnames/bind";
import PropTypes from "prop-types";
import styles from "./_PasswordChange.module.scss";
import { Link } from "react-router-dom";
import sns_naver from "assets/images/Naver.png";
import sns_kakao from "assets/images/kakao.png";
import sns_facebook from "assets/images/facebook_login.png";

const cx = classnames.bind(styles);

class PasswordChange extends React.Component {
    render() {
        return (
            <div className={cx("modp")}>
                <button className={cx("close")}></button>
                <div className={cx("modp-wrap")}>
                    <h1>비밀번호 변경</h1>
                    <span>비밀번호를 변경해 주세요.</span>

                    <form>
                        <label>
                            <input type="text" placeholder="비밀번호 변경" />
                        </label>
                        <label>
                            <input
                                type="text"
                                placeholder="신규  비밀번호 입력(8자리 이상)"
                            />
                        </label>
                        <label>
                            <input type="text" placeholder="비밀번호 재학인" />
                        </label>
                        <input type="cancel" value="다음에 변경하기" />
                        <input type="submit" value="발송하기" />
                    </form>
                </div>
            </div>
        );
    }
}

export default PasswordChange;
