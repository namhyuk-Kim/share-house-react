import React from "react";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./_Terms.module.scss";

const cx = classnames.bind(styles);

class Terms extends React.Component {
    render() {
        return (
            <div>
                <div className={cx("index")}>
                    <h1>컴앤스테이 이용약관</h1>
                    제 1장.총칙
                    <br />
                    <br />
                    제 2장. 이용계약 및 정보보호
                    <br />
                    <br />
                    제 3장. 서비스의 이용
                    <br />
                    <br />제 4장. 책임
                </div>
                <div className={cx("content")}>
                    <h1>서비스 이용약관</h1>
                    <div className={cx("terms")}></div>
                </div>
            </div>
        );
    }
}

export default Terms;
