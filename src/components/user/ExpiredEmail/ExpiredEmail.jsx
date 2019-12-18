import React from "react";
import styles from "./_ExpiredEmail.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

class EmailOk extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={cx("chpw-wrap")}>
                <div>
                    <h1>확인기간 만료됨</h1>
                    <p>
                        올바르지 않은 경로로 접근하였거나, 이메일 확인 기간이
                        지났습니다.
                    </p>
                    <button>홈으로 이동</button>
                </div>
            </div>
        );
    }
}

export default EmailOk;
