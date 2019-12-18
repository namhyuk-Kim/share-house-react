import React from "react";
import styles from "./_EmailOk.module.scss";
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
                    <h1>E-mail 확인 완료</h1>
                    <p>
                        계정이 확인되었습니다. Come&Stay에 가입해주셔서
                        감사합니다.
                    </p>
                    <button>홈으로 이동</button>
                </div>
            </div>
        );
    }
}

export default EmailOk;
