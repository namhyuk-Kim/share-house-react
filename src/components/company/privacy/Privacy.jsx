import React from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./_Privacy.module.scss";

const cx = classnames.bind(styles);

class Privacy extends React.Component {
    render() {
        return (
            <div>
                <div className={cx("index")}>
                    <h1>차례</h1>
                    1. 총칙
                    <br />
                    <br />
                    2. 개인정보의 수집방법 및 항목
                    <br />
                    <br />
                    3. 개인정보의 수집 및 이용목적
                    <br />
                    <br />
                    4. 개인정보 수집, 이용, 제공에 대한 동의
                    <br />
                    <br />
                    5. 개인정보의 목적 외 이용 및 제 3자 제공
                    <br />
                    <br />
                    6. 개인정보의 보유기간 및 파기
                    <br />
                    <br />
                    7. 이용자 및 법정대리인의 권리와 그 행사방법
                    <br />
                    <br />
                    8. 위치기반정보의 수집에 관한 사항
                    <br />
                    <br />
                    9. 개인정보의 기술적/관리적 보호 대책
                    <br />
                    <br />
                    10. 의견수렴 및 불만처리
                    <br />
                    <br />
                    11. 개인정보관리책임자 및 담당자
                    <br />
                    <br />
                    12. 고지의 의무
                </div>
                <div className={cx("content")}>
                    <h1>개인정보 취금방침</h1>
                    <div className={cx("terms")}></div>
                </div>
            </div>
        );
    }
}

export default Privacy;
