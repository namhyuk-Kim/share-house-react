import React from "react";
import classnames from "classnames/bind";
import PropTypes from "prop-types";
import styles from "./_RegisterDone.module.scss";
import { Link } from "react-router-dom";

const cx = classnames.bind(styles);

class RegisterDone extends React.Component {
    render() {
        return (
            <div className={cx("content")}>
                <div className={cx("register")}>
                    <div className={cx("register-left")}>
                        <h1>
                            함께하는 즐거움
                            <br />
                            <span className={cx("white")}>‘공유’</span>와
                            <span className={cx("white")}>‘교류’</span>가
                            매력적인
                            <br />
                            쉐어하우스
                        </h1>
                        <p>지금바로가입하세요</p>
                        <div className={cx("clear")}></div>
                    </div>
                    <div className={cx("register-right")}>
                        <div>
                            <span>가입완료</span>
                            <h1>회원가입을 축하합니다</h1>
                            <p>
                                회원가입이 완료되었습니다
                                <br />
                                Come&Stay는 고객님의 쾌적한 하우스만을
                                <br />
                                제공해드리겠습니다.
                            </p>
                            <Link to="/">확인</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterDone;
